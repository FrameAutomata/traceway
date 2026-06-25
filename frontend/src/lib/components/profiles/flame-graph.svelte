<script module lang="ts">
	import { formatProfileValue } from '$lib/utils/profile-format';

	export function flameTooltipLabel(
		name: string,
		value: number,
		total: number,
		type: string
	): string {
		const pct = total > 0 ? (value / total) * 100 : 0;
		const pctStr = Number(pct.toFixed(1)).toString();
		return `${name} — ${formatProfileValue(type, value)} (${pctStr}%)`;
	}

	export function flameDiffTooltipLabel(
		name: string,
		left: number,
		right: number,
		type: string
	): string {
		return `${name} — ${formatProfileValue(type, left)} → ${formatProfileValue(type, right)}`;
	}
</script>

<script lang="ts">
	import flamegraph, { type FlameGraphNode } from 'd3-flame-graph';
	import { select } from 'd3-selection';
	import { diffColor, type FlameDiffNode } from '$lib/utils/profile-diff';

	interface Props {
		data: FlameGraphNode | FlameDiffNode | null;
		type: string;
		differential?: boolean;
	}

	let { data, type, differential = false }: Props = $props();

	let container = $state<HTMLDivElement>();
	let width = $state(0);

	$effect(() => {
		const el = container;
		if (!el || typeof ResizeObserver === 'undefined') return;
		const observer = new ResizeObserver((entries) => {
			width = entries[0].contentRect.width;
		});
		observer.observe(el);
		return () => observer.disconnect();
	});

	$effect(() => {
		const el = container;
		if (!el || !data) return;

		const total = data.value || 0;
		const currentType = type;
		const chart = flamegraph()
			.width(width || el.clientWidth || 960)
			.cellHeight(20)
			.minFrameSize(1)
			.transitionDuration(200)
			.sort(true)
			.selfValue(false);

		if (differential) {
			const diffOf = (d: unknown) => (d as { data: FlameDiffNode }).data;
			chart
				.setColorMapper((d) => diffColor(diffOf(d).delta))
				.label((d) => {
					const n = diffOf(d);
					return flameDiffTooltipLabel(n.name, n.left, n.right, currentType);
				});
		} else {
			chart.label((d) => flameTooltipLabel(d.data.name, d.data.value, total, currentType));
		}

		select(el).datum(data).call(chart);

		return () => {
			try {
				chart.destroy();
			} catch {
				// destroy() can throw if the chart never finished mounting; the
				// unconditional clear below is the real teardown either way.
			}
			select(el).selectAll('*').remove();
		};
	});
</script>

{#if !data}
	<div
		class="flex h-48 items-center justify-center rounded-md border text-sm text-muted-foreground"
	>
		No flame graph data for this range.
	</div>
{:else}
	<div bind:this={container} class="flame-graph w-full"></div>
{/if}

<style>
	:global(.flame-graph .d3-flame-graph rect) {
		stroke: var(--background);
		stroke-width: 0.5;
		fill-opacity: 0.85;
	}

	:global(.flame-graph .d3-flame-graph rect:hover) {
		stroke: var(--ring);
		stroke-width: 1;
		cursor: pointer;
	}

	:global(.flame-graph .d3-flame-graph-label) {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 12px;
		font-family: inherit;
		margin-left: 4px;
		margin-right: 4px;
		line-height: 1.5;
		font-weight: 400;
		color: #fff;
		text-align: left;
	}

	:global(.flame-graph .d3-flame-graph .fade) {
		opacity: 0.5 !important;
	}

	:global(.d3-flame-graph-tip) {
		background: var(--popover);
		color: var(--popover-foreground);
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 6px 10px;
		min-width: 250px;
		text-align: left;
		font-family: inherit;
		font-size: 12px;
		z-index: 10;
	}
</style>
