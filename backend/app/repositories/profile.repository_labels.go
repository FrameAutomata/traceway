package repositories

import (
	"context"
	"time"

	"github.com/google/uuid"
)

const profileLabelEndpoint = "endpoint"

var allowedProfileLabels = []string{profileLabelEndpoint}

func (r *profileRepository) DiscoverLabels(ctx context.Context, projectId uuid.UUID, service, profileType string, from, to time.Time) (map[string][]string, error) {
	out := map[string][]string{}
	for _, key := range allowedProfileLabels {
		values, err := r.distinctLabelValues(ctx, projectId, service, profileType, key, from, to)
		if err != nil {
			return nil, err
		}
		if len(values) > 0 {
			out[key] = values
		}
	}
	return out, nil
}
