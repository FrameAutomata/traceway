// Package profiling holds the internal, OTLP-shaped representation of profiling
// data and the decoders that produce it. Both the raw-pprof ingest path and the
// OTLP Profiles ingest path normalize into this single model so that storage,
// query, and rendering have one shape to deal with regardless of the wire format.
package profiling

import (
	"hash/fnv"
	"time"

	"github.com/google/uuid"
)

// Profile type identifiers. Format mirrors the OTel/pprof convention
// "<runtime>:<profile group>:<value unit>" so the type is self-describing and
// drives aggregation semantics downstream (counter vs gauge — see below).
//
// Aggregation note: cpu nanoseconds and alloc_space are counters (sum over the
// window); heap inuse_space is a gauge (a point-in-time live-heap reading, so it
// must be aggregated as latest-per-instance, never summed across time).
const (
	TypeCPUNanos       = "go:profile_cpu:nanoseconds"
	TypeHeapInuseSpace = "go:profile_heap:inuse_space"
	TypeHeapAllocSpace = "go:profile_heap:alloc_space"
)

// keptSampleTypes maps a pprof sample-type name to the internal profile type we
// emit for it. Anything not in this map (e.g. "samples", "alloc_objects",
// "inuse_objects") is intentionally skipped in v1 — the map is the single place
// to extend coverage to more profile types later.
var keptSampleTypes = map[string]string{
	"cpu":         TypeCPUNanos,
	"inuse_space": TypeHeapInuseSpace,
	"alloc_space": TypeHeapAllocSpace,
}

// Stack is a symbolized call stack stored once per unique frame sequence.
// Frames are ordered root-first (the leaf — where the sample was taken — is last),
// which is the order the flame-graph tree builder expects.
type Stack struct {
	Hash   uint64
	Frames []string
}

// Sample is one (type, stack) group with its value summed across all raw pprof
// samples that share that key within a single profile. This per-profile dedup is
// what keeps the exploded row count near "distinct stacks", not "raw samples".
//
// v1 intentionally does NOT group by per-sample pprof labels: those can be
// unbounded (request_id, user_id) and would shatter this dedup, which is the
// entire point of the two-table store. Bounded dimensions we care about
// (service, instance, version) ride on metadata columns instead. The
// profiling_samples table still carries an (empty in v1) labels column, and
// stackKey below is structured so an allowlisted label fingerprint can fold in
// later without a migration — endpoint-level slicing is a deliberate v2 feature.
type Sample struct {
	Type      string
	StackHash uint64
	Value     int64
}

// Meta is the per-profile metadata shared by every sample in the profile.
type Meta struct {
	ProfileId   uuid.UUID
	ServiceName string
	Start       time.Time
	End         time.Time
	ServerName  string
	AppVersion  string
	Attributes  map[string]string
	TraceId     *string
	SpanId      *string
}

// Decoded is the normalized output of any Decoder: one profile's metadata, its
// unique stacks (referenced by hash), and its deduped samples.
type Decoded struct {
	Meta    Meta
	Stacks  []Stack
	Samples []Sample
}

// HashFrames computes a stable 64-bit hash of a root-first frame sequence. It is
// computed in Go (not in the DB) so the same StackHash links the stacks and
// samples tables on insert; any stable hash works since nothing recomputes it.
func HashFrames(frames []string) uint64 {
	h := fnv.New64a()
	for _, f := range frames {
		_, _ = h.Write([]byte(f))
		_, _ = h.Write([]byte{0})
	}
	return h.Sum64()
}
