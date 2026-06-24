import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/svelte';

import ProfileLabelSelector, { applyLabel, labelTriggerLabel } from './profile-label-selector.svelte';

describe('applyLabel', () => {
	it('sets the value for a key', () => {
		expect(applyLabel({}, 'endpoint', 'GET /a')).toEqual({ endpoint: 'GET /a' });
	});

	it('replaces an existing value and leaves other keys untouched', () => {
		expect(applyLabel({ endpoint: 'GET /a', region: 'eu' }, 'endpoint', 'GET /b')).toEqual({
			endpoint: 'GET /b',
			region: 'eu'
		});
	});

	it('removes the key when the value is undefined', () => {
		expect(applyLabel({ endpoint: 'GET /a', region: 'eu' }, 'endpoint', undefined)).toEqual({
			region: 'eu'
		});
	});

	it('does not mutate the input map', () => {
		const selected = { endpoint: 'GET /a' };
		applyLabel(selected, 'region', 'eu');
		expect(selected).toEqual({ endpoint: 'GET /a' });
	});
});

describe('labelTriggerLabel', () => {
	it('shows the key and value when a value is selected', () => {
		expect(labelTriggerLabel('endpoint', 'GET /a')).toBe('endpoint: GET /a');
	});

	it('shows an all-values placeholder when nothing is selected', () => {
		expect(labelTriggerLabel('endpoint', undefined)).toBe('All endpoint');
	});
});

describe('ProfileLabelSelector component', () => {
	function triggers(container: HTMLElement) {
		return container.querySelectorAll('[data-slot="select-trigger"]');
	}

	it('renders nothing when there are no label keys', () => {
		const { container } = render(ProfileLabelSelector, {
			props: { labels: {}, selected: {}, onSelect: vi.fn() }
		});
		expect(triggers(container)).toHaveLength(0);
	});

	it('renders one dropdown per label key', () => {
		const { container } = render(ProfileLabelSelector, {
			props: {
				labels: { endpoint: ['GET /a', 'GET /b'], region: ['eu', 'us'] },
				selected: {},
				onSelect: vi.fn()
			}
		});
		expect(triggers(container)).toHaveLength(2);
	});

	it('shows the selected value in the trigger', () => {
		const { getByText } = render(ProfileLabelSelector, {
			props: {
				labels: { endpoint: ['GET /a', 'GET /b'] },
				selected: { endpoint: 'GET /b' },
				onSelect: vi.fn()
			}
		});
		expect(getByText('endpoint: GET /b')).toBeTruthy();
	});
});
