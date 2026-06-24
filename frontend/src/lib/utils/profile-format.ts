export const CPU_NANOS = 'go:profile_cpu:nanoseconds';
export const HEAP_INUSE = 'go:profile_heap:inuse_space';
export const HEAP_ALLOC = 'go:profile_heap:alloc_space';

export type ProfileCategory = 'cpu' | 'heap';
export type ProfileUnit = 'nanoseconds' | 'bytes';

export interface ProfileTypeMeta {
	type: string;
	label: string;
	category: ProfileCategory;
	unit: ProfileUnit;
	isGauge: boolean;
}

export const PROFILE_TYPES: ProfileTypeMeta[] = [
	{ type: CPU_NANOS, label: 'CPU Time', category: 'cpu', unit: 'nanoseconds', isGauge: false },
	{ type: HEAP_INUSE, label: 'Heap In-Use', category: 'heap', unit: 'bytes', isGauge: true },
	{ type: HEAP_ALLOC, label: 'Heap Allocations', category: 'heap', unit: 'bytes', isGauge: false }
];

const TYPE_INDEX = new Map(PROFILE_TYPES.map((meta) => [meta.type, meta]));

export function getProfileTypeMeta(type: string): ProfileTypeMeta | undefined {
	return TYPE_INDEX.get(type);
}

function trim(value: number): string {
	return Number(value.toFixed(2)).toString();
}

function formatNanoseconds(ns: number): string {
	if (ns < 1_000) return `${trim(ns)} ns`;
	if (ns < 1_000_000) return `${trim(ns / 1_000)} µs`;
	if (ns < 1_000_000_000) return `${trim(ns / 1_000_000)} ms`;
	return `${trim(ns / 1_000_000_000)} s`;
}

function formatBytes(bytes: number): string {
	if (bytes < 1024) return `${trim(bytes)} B`;
	if (bytes < 1024 ** 2) return `${trim(bytes / 1024)} KB`;
	if (bytes < 1024 ** 3) return `${trim(bytes / 1024 ** 2)} MB`;
	return `${trim(bytes / 1024 ** 3)} GB`;
}

export function formatProfileValue(type: string, value: number): string {
	const meta = getProfileTypeMeta(type);
	if (meta?.unit === 'nanoseconds') return formatNanoseconds(value);
	if (meta?.unit === 'bytes') return formatBytes(value);
	return value.toLocaleString();
}

export function defaultProfileType(availableTypes: string[]): string {
	if (availableTypes.includes(CPU_NANOS)) return CPU_NANOS;
	return availableTypes[0] ?? '';
}
