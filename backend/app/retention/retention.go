package retention

import (
	"context"
	"strconv"
	"strings"
	"time"

	"github.com/tracewayapp/traceway/backend/app/config"
)

const (
	defaultRetentionDays = 30
	tickInterval         = time.Hour
)

func Start(ctx context.Context) {
	cfg := config.Config
	daysRetentionRecordings := defaultRetentionDays
	sessionRecordingRetentionDays := strings.TrimSpace(cfg.SessionRecordingRetentionDays)
	if sessionRecordingRetentionDays != "" {
		sessionRecordingRetentionDaysInt, err := strconv.Atoi(sessionRecordingRetentionDays)
		if err == nil && sessionRecordingRetentionDaysInt >= 0 {
			daysRetentionRecordings = sessionRecordingRetentionDaysInt
		}
	}

	daysRetentionSqlite := defaultRetentionDays
	sqliteRetentionDays := strings.TrimSpace(cfg.SQLiteRetentionDays)
	if sqliteRetentionDays != "" {
		sqliteRetentionDaysInt, err := strconv.Atoi(sqliteRetentionDays)
		if err == nil && sqliteRetentionDaysInt >= 0 {
			daysRetentionSqlite = sqliteRetentionDaysInt
		}
	}

	daysRetentionProfileArchive := defaultRetentionDays
	profileRetentionDays := strings.TrimSpace(cfg.ProfileRetentionDays)
	if profileRetentionDays != "" {
		profileRetentionDaysInt, err := strconv.Atoi(profileRetentionDays)
		if err == nil && profileRetentionDaysInt >= 0 {
			daysRetentionProfileArchive = profileRetentionDaysInt
		}
	}

	startSQLiteRetention(ctx, daysRetentionSqlite)
	startRecordingDiskCleanup(ctx, daysRetentionRecordings)
	startProfileArchiveDiskCleanup(ctx, daysRetentionProfileArchive)
	startOAuthSessionsPrune(ctx)
}
