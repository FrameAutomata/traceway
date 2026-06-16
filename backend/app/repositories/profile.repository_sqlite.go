//go:build !pgch

package repositories

import (
	"context"
	"encoding/json"

	"github.com/tracewayapp/lit/v2"
	"github.com/tracewayapp/traceway/backend/app/db"
	"github.com/tracewayapp/traceway/backend/app/models"
)

type profileRepository struct{}

func (r *profileRepository) InsertStacksAsync(ctx context.Context, stacks []models.ProfileStack) error {
	if len(stacks) == 0 {
		return nil
	}
	tx, err := db.TelemetryDB.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()

	for _, s := range stacks {
		stackJSON, err := json.Marshal(s.Stack)
		if err != nil {
			return err
		}
		query, args, err := lit.ParseNamedQuery(db.Driver,
			"INSERT OR REPLACE INTO profiling_stacks (project_id, service_name, stack_hash, stack, last_seen) VALUES (:project_id, :service_name, :stack_hash, :stack, :last_seen)",
			lit.P{
				"project_id":   s.ProjectId,
				"service_name": s.ServiceName,
				"stack_hash":   int64(s.StackHash),
				"stack":        string(stackJSON),
				"last_seen":    NewSQLiteTime(s.LastSeen),
			})
		if err != nil {
			return err
		}
		if _, err := tx.ExecContext(ctx, query, args...); err != nil {
			return err
		}
	}
	return tx.Commit()
}

func (r *profileRepository) InsertSamplesAsync(ctx context.Context, samples []models.ProfileSample) error {
	if len(samples) == 0 {
		return nil
	}
	tx, err := db.TelemetryDB.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()

	for _, s := range samples {
		labelsVal, _ := NewSQLiteJSONMap(s.Labels).Value()
		query, args, err := lit.ParseNamedQuery(db.Driver,
			"INSERT INTO profiling_samples (project_id, profile_id, service_name, type, start_time, end_time, stack_hash, value, labels, server_name, app_version, trace_id, span_id) VALUES (:project_id, :profile_id, :service_name, :type, :start_time, :end_time, :stack_hash, :value, :labels, :server_name, :app_version, :trace_id, :span_id)",
			lit.P{
				"project_id":   s.ProjectId,
				"profile_id":   s.ProfileId,
				"service_name": s.ServiceName,
				"type":         s.Type,
				"start_time":   NewSQLiteTime(s.Start),
				"end_time":     NewSQLiteTime(s.End),
				"stack_hash":   int64(s.StackHash),
				"value":        s.Value,
				"labels":       labelsVal,
				"server_name":  s.ServerName,
				"app_version":  s.AppVersion,
				"trace_id":     s.TraceId,
				"span_id":      s.SpanId,
			})
		if err != nil {
			return err
		}
		if _, err := tx.ExecContext(ctx, query, args...); err != nil {
			return err
		}
	}
	return tx.Commit()
}

func (r *profileRepository) InsertProfilesAsync(ctx context.Context, profiles []models.Profile) error {
	if len(profiles) == 0 {
		return nil
	}
	tx, err := db.TelemetryDB.BeginTx(ctx, nil)
	if err != nil {
		return err
	}
	defer tx.Rollback()

	for _, p := range profiles {
		attributesVal, _ := NewSQLiteJSONMap(p.Attributes).Value()
		query, args, err := lit.ParseNamedQuery(db.Driver,
			"INSERT INTO profiles (id, project_id, recorded_at, duration, service_name, profile_type, sample_count, total_value, server_name, app_version, attributes, storage_key, trace_id, span_id, distributed_trace_id) VALUES (:id, :project_id, :recorded_at, :duration, :service_name, :profile_type, :sample_count, :total_value, :server_name, :app_version, :attributes, :storage_key, :trace_id, :span_id, :distributed_trace_id)",
			lit.P{
				"id":                   p.Id,
				"project_id":           p.ProjectId,
				"recorded_at":          NewSQLiteTime(p.RecordedAt),
				"duration":             int64(p.Duration),
				"service_name":         p.ServiceName,
				"profile_type":         p.ProfileType,
				"sample_count":         int64(p.SampleCount),
				"total_value":          p.TotalValue,
				"server_name":          p.ServerName,
				"app_version":          p.AppVersion,
				"attributes":           attributesVal,
				"storage_key":          p.StorageKey,
				"trace_id":             p.TraceId,
				"span_id":              p.SpanId,
				"distributed_trace_id": p.DistributedTraceId,
			})
		if err != nil {
			return err
		}
		if _, err := tx.ExecContext(ctx, query, args...); err != nil {
			return err
		}
	}
	return tx.Commit()
}

var ProfileRepository = profileRepository{}
