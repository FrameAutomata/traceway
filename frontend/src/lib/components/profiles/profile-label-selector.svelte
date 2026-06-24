<script module lang="ts">
	export function applyLabel(
		selected: Record<string, string>,
		key: string,
		value: string | undefined
	): Record<string, string> {
		const next = { ...selected };
		if (value === undefined) {
			delete next[key];
		} else {
			next[key] = value;
		}
		return next;
	}

	export function labelTriggerLabel(key: string, value: string | undefined): string {
		return value ? `${key}: ${value}` : `All ${key}`;
	}
</script>

<script lang="ts">
	import * as Select from '$lib/components/ui/select';

	const ALL = '__all__';

	let {
		labels,
		selected,
		onSelect
	}: {
		labels: Record<string, string[]>;
		selected: Record<string, string>;
		onSelect: (key: string, value: string | undefined) => void;
	} = $props();

	const keys = $derived(Object.keys(labels).sort());
</script>

{#if keys.length > 0}
	<div class="flex flex-wrap items-center gap-2">
		{#each keys as key (key)}
			<Select.Root
				type="single"
				value={selected[key] ?? ALL}
				onValueChange={(v) => onSelect(key, v === ALL ? undefined : v)}
			>
				<Select.Trigger class="h-9 w-[220px]">
					{labelTriggerLabel(key, selected[key])}
				</Select.Trigger>
				<Select.Content>
					<Select.Item value={ALL}>All {key}</Select.Item>
					{#each labels[key] as value (value)}
						<Select.Item {value} label={value}>{value}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		{/each}
	</div>
{/if}
