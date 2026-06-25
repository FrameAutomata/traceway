import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';

const flamegraphSpy = vi.hoisted(() => vi.fn());
const datumSpy = vi.hoisted(() => vi.fn());

vi.mock('d3-flame-graph', () => {
	const chart = new Proxy(() => chart, { get: () => () => chart }) as never;
	return { default: () => (flamegraphSpy(), chart), colorMapper: () => '', tooltip: () => ({}) };
});

vi.mock('d3-selection', () => {
	const sel: Record<string, unknown> = {};
	sel.datum = (d: unknown) => (datumSpy(d), sel);
	sel.call = () => sel;
	sel.selectAll = () => sel;
	sel.remove = () => sel;
	sel.html = () => sel;
	sel.node = () => null;
	return { select: () => sel };
});

import FlameGraph, { flameTooltipLabel, flameDiffTooltipLabel } from './flame-graph.svelte';
import { CPU_NANOS } from '$lib/utils/profile-format';

const tree = {
	name: 'root',
	value: 100,
	self: 0,
	children: [{ name: 'main.work', value: 60, self: 60, children: [] }]
};

describe('flameTooltipLabel', () => {
	it('formats name, value and percentage of total', () => {
		expect(flameTooltipLabel('main.work', 1_500_000, 4_000_000, CPU_NANOS)).toBe(
			'main.work — 1.5 ms (37.5%)'
		);
	});

	it('renders 0% instead of NaN when the total is zero', () => {
		expect(flameTooltipLabel('main.work', 10, 0, CPU_NANOS)).toBe('main.work — 10 ns (0%)');
	});
});

describe('flameDiffTooltipLabel', () => {
	it('formats baseline → comparison values', () => {
		expect(flameDiffTooltipLabel('main.work', 1_000_000, 1_500_000, CPU_NANOS)).toBe(
			'main.work — 1 ms → 1.5 ms'
		);
	});
});

describe('FlameGraph component', () => {
	beforeEach(() => {
		flamegraphSpy.mockClear();
		datumSpy.mockClear();
	});

	it('shows an empty state and does not render a chart when data is null', () => {
		const { getByText } = render(FlameGraph, { props: { data: null, type: CPU_NANOS } });
		expect(getByText(/no flame graph data/i)).toBeTruthy();
		expect(flamegraphSpy).not.toHaveBeenCalled();
	});

	it('renders the d3 flame graph with the provided tree', () => {
		render(FlameGraph, { props: { data: tree, type: CPU_NANOS } });
		expect(flamegraphSpy).toHaveBeenCalled();
		expect(datumSpy).toHaveBeenCalledWith(tree);
	});

	it('re-renders when the data prop changes', async () => {
		const { rerender } = render(FlameGraph, { props: { data: tree, type: CPU_NANOS } });
		datumSpy.mockClear();
		const next = { name: 'root', value: 50, self: 0, children: [] };
		await rerender({ data: next, type: CPU_NANOS });
		expect(datumSpy).toHaveBeenCalledWith(next);
	});

	it('renders a differential flame graph with the diff tree', () => {
		const diffTree = { name: 'root', value: 250, left: 100, right: 150, delta: 0, children: [] };
		render(FlameGraph, { props: { data: diffTree, type: CPU_NANOS, differential: true } });
		expect(flamegraphSpy).toHaveBeenCalled();
		expect(datumSpy).toHaveBeenCalledWith(diffTree);
	});
});
