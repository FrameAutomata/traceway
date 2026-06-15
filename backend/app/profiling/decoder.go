package profiling

import (
	"time"

	"github.com/google/uuid"
)

// IngestContext carries the inputs a decoder needs that are not (reliably)
// present in the payload itself — e.g. raw pprof has no service.name, so it is
// supplied by the ingest endpoint (query param / header / connection identity).
type IngestContext struct {
	ProjectId          uuid.UUID
	DefaultServiceName string
	ServerName         string
	AppVersion         string
	// ReceivedAt is the fallback profile start time when the payload carries no
	// timestamp (TimeNanos == 0).
	ReceivedAt time.Time
}

// Decoder normalizes a wire payload into one or more Decoded profiles. Both
// PprofDecoder and (in a later PR) OTLPDecoder implement this, so the OTLP proto
// churn is walled off behind this interface.
type Decoder interface {
	Decode(ctx IngestContext, payload []byte) ([]Decoded, error)
}
