//go:build pgch

package repositories

import (
	"context"
	"encoding/json"

	"github.com/tracewayapp/traceway/backend/app/chdb"
	"github.com/tracewayapp/traceway/backend/app/models"
)

type profileRepository struct{}

func (r *profileRepository) InsertStacksAsync(ctx context.Context, stacks []models.ProfileStack) error {
	if len(stacks) == 0 {
		return nil
	}
	batch, err := chdb.Conn.PrepareBatch(chdb.BatchCtx(),
		"INSERT INTO profiling_stacks (project_id, service_name, stack_hash, stack, last_seen)")
	if err != nil {
		return err
	}
	for _, s := range stacks {
		if err := batch.Append(s.ProjectId, s.ServiceName, s.StackHash, s.Stack, s.LastSeen); err != nil {
			return err
		}
	}
	return batch.Send()
}

func (r *profileRepository) InsertSamplesAsync(ctx context.Context, samples []models.ProfileSample) error {
	if len(samples) == 0 {
		return nil
	}
	batch, err := chdb.Conn.PrepareBatch(chdb.BatchCtx(),
		"INSERT INTO profiling_samples (project_id, profile_id, service_name, type, start_time, end_time, stack_hash, value, labels, server_name, app_version, trace_id, span_id)")
	if err != nil {
		return err
	}
	for _, s := range samples {
		labels := s.Labels
		if labels == nil {
			labels = map[string]string{}
		}
		if err := batch.Append(
			s.ProjectId, s.ProfileId, s.ServiceName, s.Type, s.Start, s.End,
			s.StackHash, s.Value, labels, s.ServerName, s.AppVersion, s.TraceId, s.SpanId,
		); err != nil {
			return err
		}
	}
	return batch.Send()
}

func (r *profileRepository) InsertProfilesAsync(ctx context.Context, profiles []models.Profile) error {
	if len(profiles) == 0 {
		return nil
	}
	batch, err := chdb.Conn.PrepareBatch(chdb.BatchCtx(),
		"INSERT INTO profiles (id, project_id, recorded_at, duration, service_name, profile_type, sample_count, total_value, server_name, app_version, attributes, storage_key, trace_id, span_id, distributed_trace_id)")
	if err != nil {
		return err
	}
	for _, p := range profiles {
		attributesJSON := "{}"
		if len(p.Attributes) != 0 {
			if b, err := json.Marshal(p.Attributes); err == nil {
				attributesJSON = string(b)
			}
		}
		if err := batch.Append(
			p.Id, p.ProjectId, p.RecordedAt, int64(p.Duration), p.ServiceName, p.ProfileType,
			p.SampleCount, p.TotalValue, p.ServerName, p.AppVersion, attributesJSON, p.StorageKey,
			p.TraceId, p.SpanId, p.DistributedTraceId,
		); err != nil {
			return err
		}
	}
	return batch.Send()
}

var ProfileRepository = profileRepository{}
