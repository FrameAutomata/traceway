import { describe, it, expect } from 'vitest';
import {
	CPU_NANOS,
	HEAP_INUSE,
	HEAP_ALLOC,
	getProfileTypeMeta,
	formatProfileValue,
	defaultProfileType
} from './profile-format';

describe('getProfileTypeMeta', () => {
	it('returns meta for the CPU type', () => {
		const meta = getProfileTypeMeta(CPU_NANOS);
		expect(meta).toMatchObject({ category: 'cpu', unit: 'nanoseconds', isGauge: false });
		expect(meta?.label).toBeTruthy();
	});

	it('marks heap in-use as a gauge', () => {
		const meta = getProfileTypeMeta(HEAP_INUSE);
		expect(meta).toMatchObject({ category: 'heap', unit: 'bytes', isGauge: true });
	});

	it('marks heap alloc as a counter (not a gauge)', () => {
		const meta = getProfileTypeMeta(HEAP_ALLOC);
		expect(meta).toMatchObject({ category: 'heap', unit: 'bytes', isGauge: false });
	});

	it('returns undefined for an unknown type', () => {
		expect(getProfileTypeMeta('go:profile_mutex:contentions')).toBeUndefined();
	});
});

describe('formatProfileValue', () => {
	it('formats CPU nanoseconds across magnitudes', () => {
		expect(formatProfileValue(CPU_NANOS, 500)).toBe('500 ns');
		expect(formatProfileValue(CPU_NANOS, 1_500)).toBe('1.5 µs');
		expect(formatProfileValue(CPU_NANOS, 1_500_000)).toBe('1.5 ms');
		expect(formatProfileValue(CPU_NANOS, 2_000_000_000)).toBe('2 s');
		expect(formatProfileValue(CPU_NANOS, 0)).toBe('0 ns');
	});

	it('formats heap bytes across magnitudes', () => {
		expect(formatProfileValue(HEAP_INUSE, 512)).toBe('512 B');
		expect(formatProfileValue(HEAP_INUSE, 1024)).toBe('1 KB');
		expect(formatProfileValue(HEAP_ALLOC, 1_048_576)).toBe('1 MB');
		expect(formatProfileValue(HEAP_INUSE, 0)).toBe('0 B');
	});

	it('falls back to a localized number for unknown types', () => {
		expect(formatProfileValue('go:profile_mystery:units', 1234)).toBe((1234).toLocaleString());
	});
});

describe('defaultProfileType', () => {
	it('prefers the CPU type when available', () => {
		expect(defaultProfileType([HEAP_INUSE, CPU_NANOS, HEAP_ALLOC])).toBe(CPU_NANOS);
	});

	it('falls back to the first available type when there is no CPU type', () => {
		expect(defaultProfileType([HEAP_ALLOC, HEAP_INUSE])).toBe(HEAP_ALLOC);
	});

	it('returns an empty string when nothing is available', () => {
		expect(defaultProfileType([])).toBe('');
	});
});
