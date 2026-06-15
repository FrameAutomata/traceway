package profiling

import (
	"bytes"
	"fmt"
	"time"

	"github.com/google/pprof/profile"
	"github.com/google/uuid"
)

// PprofDecoder decodes a raw, gzipped pprof profile (the stable, load-bearing
// ingest path — what Go's runtime/pprof and `go tool pprof` emit). It is the
// reference implementation of the internal model: parse → keep allowlisted
// sample types → symbolize stacks → dedupe within the profile → explode into
// stack + sample rows.
type PprofDecoder struct{}

// sampleKey groups raw samples that should be summed together. v1 keys on
// (type, stackHash) only; an allowlisted label fingerprint would extend this
// struct later without touching the rest of the pipeline.
type sampleKey struct {
	typ       string
	stackHash uint64
}

func (PprofDecoder) Decode(ctx IngestContext, payload []byte) ([]Decoded, error) {
	p, err := profile.Parse(bytes.NewReader(payload))
	if err != nil {
		return nil, fmt.Errorf("profiling: parse pprof: %w", err)
	}

	// Which value indices do we keep, and what internal type does each map to?
	type keptType struct {
		index int
		typ   string
	}
	var kept []keptType
	for i, st := range p.SampleType {
		if internal, ok := keptSampleTypes[st.Type]; ok {
			kept = append(kept, keptType{index: i, typ: internal})
		}
	}

	meta := Meta{
		ProfileId:   uuid.New(),
		ServiceName: ctx.DefaultServiceName,
		ServerName:  ctx.ServerName,
		AppVersion:  ctx.AppVersion,
		Start:       profileStart(p, ctx.ReceivedAt),
	}
	meta.End = meta.Start
	if p.DurationNanos > 0 {
		meta.End = meta.Start.Add(time.Duration(p.DurationNanos))
	}

	// Accumulate deduped values and collect the unique stacks they reference.
	values := make(map[sampleKey]int64)
	stacks := make(map[uint64][]string)

	for _, s := range p.Sample {
		frames := rootFirstFrames(s)
		if len(frames) == 0 {
			continue
		}
		hash := HashFrames(frames)
		for _, k := range kept {
			if k.index >= len(s.Value) || s.Value[k.index] == 0 {
				continue // e.g. inuse_space for an already-freed allocation
			}
			values[sampleKey{typ: k.typ, stackHash: hash}] += s.Value[k.index]
			stacks[hash] = frames
		}
	}

	decoded := Decoded{Meta: meta}
	for hash, frames := range stacks {
		decoded.Stacks = append(decoded.Stacks, Stack{Hash: hash, Frames: frames})
	}
	for key, v := range values {
		decoded.Samples = append(decoded.Samples, Sample{
			Type:      key.typ,
			StackHash: key.stackHash,
			Value:     v,
		})
	}

	return []Decoded{decoded}, nil
}

// profileStart converts the profile's TimeNanos to a UTC time, falling back to
// the ingest receive time when the payload carries no timestamp.
func profileStart(p *profile.Profile, fallback time.Time) time.Time {
	if p.TimeNanos > 0 {
		return time.Unix(0, p.TimeNanos).UTC()
	}
	return fallback
}

// rootFirstFrames flattens a pprof sample's locations into symbolized frame
// names ordered root-first (leaf last), expanding inlined frames.
//
// pprof orders Sample.Location leaf-first, and within a Location orders Line
// leaf-first (Line[0] is the innermost inlined frame). Concatenating as-is
// yields leaf→root, so we reverse the result to get root→leaf.
func rootFirstFrames(s *profile.Sample) []string {
	var leafToRoot []string
	for _, loc := range s.Location {
		for _, line := range loc.Line {
			if line.Function == nil {
				continue
			}
			leafToRoot = append(leafToRoot, line.Function.Name)
		}
	}
	for i, j := 0, len(leafToRoot)-1; i < j; i, j = i+1, j-1 {
		leafToRoot[i], leafToRoot[j] = leafToRoot[j], leafToRoot[i]
	}
	return leafToRoot
}
