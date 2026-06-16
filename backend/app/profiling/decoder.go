package profiling

import (
	"time"

	"github.com/google/uuid"
)

type IngestContext struct {
	ProjectId          uuid.UUID
	DefaultServiceName string
	ServerName         string
	AppVersion         string
	ReceivedAt         time.Time
}

type Decoder interface {
	Decode(ctx IngestContext, payload []byte) ([]Decoded, error)
}
