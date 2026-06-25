import { describe, it, expect } from 'vitest';
import { diffToFlameNode, diffColor, type DiffNode } from './profile-diff';

function channels(color: string): [number, number, number] {
	const m = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
	if (!m) throw new Error(`not an rgb() color: ${color}`);
	return [Number(m[1]), Number(m[2]), Number(m[3])];
}

describe('diffToFlameNode', () => {
	it('uses value = left + right (union layout)', () => {
		const root: DiffNode = {
			name: 'root',
			left: 100,
			right: 150,
			children: [{ name: 'main', left: 100, right: 150, children: [] }]
		};
		const fn = diffToFlameNode(root);
		expect(fn.value).toBe(250);
		expect(fn.children[0].value).toBe(250);
		expect(fn.children[0].left).toBe(100);
		expect(fn.children[0].right).toBe(150);
	});

	it('computes normalized delta = right/rootRight - left/rootLeft', () => {
		const root: DiffNode = {
			name: 'root',
			left: 200,
			right: 200,
			children: [{ name: 'a', left: 100, right: 150, children: [] }]
		};
		const fn = diffToFlameNode(root);
		expect(fn.children[0].delta).toBeCloseTo(0.25, 5);
	});

	it('keeps delta finite when one side has no data', () => {
		const root: DiffNode = {
			name: 'root',
			left: 0,
			right: 100,
			children: [{ name: 'a', left: 0, right: 100, children: [] }]
		};
		const fn = diffToFlameNode(root);
		expect(Number.isFinite(fn.children[0].delta)).toBe(true);
		expect(fn.children[0].delta).toBeCloseTo(1, 5);
	});

	it('handles an empty root', () => {
		const fn = diffToFlameNode({ name: 'root', left: 0, right: 0 });
		expect(fn.value).toBe(0);
		expect(fn.delta).toBe(0);
		expect(fn.children).toEqual([]);
	});
});

describe('diffColor', () => {
	it('is red-dominant when the comparison side is heavier (delta > 0)', () => {
		const [r, g] = channels(diffColor(0.5));
		expect(r).toBeGreaterThan(g);
	});

	it('is green-dominant when the comparison side is lighter (delta < 0)', () => {
		const [r, g] = channels(diffColor(-0.5));
		expect(g).toBeGreaterThan(r);
	});

	it('is roughly neutral at delta 0', () => {
		const [r, g] = channels(diffColor(0));
		expect(Math.abs(r - g)).toBeLessThan(10);
	});
});
