export interface DiffNode {
	name: string;
	left: number;
	right: number;
	children?: DiffNode[];
}

export interface FlameDiffNode {
	name: string;
	value: number;
	left: number;
	right: number;
	delta: number;
	children: FlameDiffNode[];
}

export function diffToFlameNode(root: DiffNode): FlameDiffNode {
	return buildDiffNode(root, root.left, root.right);
}

function buildDiffNode(node: DiffNode, rootLeft: number, rootRight: number): FlameDiffNode {
	const leftProp = rootLeft > 0 ? node.left / rootLeft : 0;
	const rightProp = rootRight > 0 ? node.right / rootRight : 0;
	return {
		name: node.name,
		value: node.left + node.right,
		left: node.left,
		right: node.right,
		delta: rightProp - leftProp,
		children: (node.children ?? []).map((c) => buildDiffNode(c, rootLeft, rootRight))
	};
}

export function diffColor(delta: number): string {
	const mag = Math.min(1, Math.abs(delta));
	const strong = Math.round(128 + 127 * mag);
	const weak = Math.round(128 - 100 * mag);
	if (delta >= 0) {
		return `rgb(${strong}, ${weak}, ${weak})`;
	}
	return `rgb(${weak}, ${strong}, ${weak})`;
}
