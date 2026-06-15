package models

import (
	"time"

	"github.com/google/uuid"
)

// ProfileStack is a unique, symbolized call stack stored once per (project,
// service, stack hash). Many ProfileSample rows reference it by StackHash, which
// is what keeps the exploded sample table small. Backed by a ReplacingMergeTree
// in ClickHouse so re-seeing the same stack just refreshes LastSeen.
type ProfileStack struct {
	ProjectId   uuid.UUID `json:"projectId" ch:"project_id"`
	ServiceName string    `json:"serviceName" ch:"service_name"`
	StackHash   uint64    `json:"stackHash" ch:"stack_hash"`
	Stack       []string  `json:"stack" ch:"stack"`
	LastSeen    time.Time `json:"lastSeen" ch:"last_seen"`
}

// ProfileSample is one (profile, type, stack) measurement: the value summed
// across all raw pprof samples that shared that stack within the profile. This
// is the columnar query store — flame graphs are `sum(value) GROUP BY stack_hash`
// over a time/service/type window, joined to ProfileStack by hash.
//
// Labels is empty in v1 (see profiling.Sample) — the column exists for the
// future allowlisted, endpoint-level slicing feature.
type ProfileSample struct {
	ProjectId   uuid.UUID         `json:"projectId" ch:"project_id"`
	ProfileId   uuid.UUID         `json:"profileId" ch:"profile_id"`
	ServiceName string            `json:"serviceName" ch:"service_name"`
	Type        string            `json:"type" ch:"type"`
	Start       time.Time         `json:"start" ch:"start_time"`
	End         time.Time         `json:"end" ch:"end_time"`
	StackHash   uint64            `json:"stackHash" ch:"stack_hash"`
	Value       int64             `json:"value" ch:"value"`
	Labels      map[string]string `json:"labels" ch:"labels"`
	ServerName  string            `json:"serverName" ch:"server_name"`
	AppVersion  string            `json:"appVersion" ch:"app_version"`
	TraceId     string            `json:"traceId" ch:"trace_id"`
	SpanId      string            `json:"spanId" ch:"span_id"`
}

// Profile is slim per-(upload, type) metadata for the list/detail views. One
// ingested pprof upload yields up to one Profile row per kept type (cpu,
// heap_inuse, heap_alloc), sharing the same Id.
type Profile struct {
	Id                 uuid.UUID         `json:"id" ch:"id"`
	ProjectId          uuid.UUID         `json:"projectId" ch:"project_id"`
	RecordedAt         time.Time         `json:"recordedAt" ch:"recorded_at"`
	Duration           time.Duration     `json:"duration" ch:"duration"`
	ServiceName        string            `json:"serviceName" ch:"service_name"`
	ProfileType        string            `json:"profileType" ch:"profile_type"`
	SampleCount        uint64            `json:"sampleCount" ch:"sample_count"`
	TotalValue         int64             `json:"totalValue" ch:"total_value"`
	ServerName         string            `json:"serverName" ch:"server_name"`
	AppVersion         string            `json:"appVersion" ch:"app_version"`
	Attributes         map[string]string `json:"attributes" ch:"attributes"`
	StorageKey         string            `json:"storageKey" ch:"storage_key"`
	TraceId            string            `json:"traceId" ch:"trace_id"`
	SpanId             string            `json:"spanId" ch:"span_id"`
	DistributedTraceId *uuid.UUID        `json:"distributedTraceId,omitempty" ch:"distributed_trace_id"`
}
