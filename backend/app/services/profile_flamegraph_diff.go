package services

import (
	"sort"

	"github.com/tracewayapp/traceway/backend/app/models"
)

type DiffNode struct {
	Name     string      `json:"name"`
	Left     int64       `json:"left"`
	Right    int64       `json:"right"`
	Children []*DiffNode `json:"children,omitempty"`
}

func FoldDiff(left, right []models.ProfileStackValue) *DiffNode {
	root := &DiffNode{Name: "root"}
	childIndex := map[*DiffNode]map[string]*DiffNode{}

	addSide := func(stacks []models.ProfileStackValue, add func(*DiffNode, int64)) {
		for _, s := range stacks {
			add(root, s.Value)
			node := root
			for _, frame := range s.Stack {
				children, ok := childIndex[node]
				if !ok {
					children = map[string]*DiffNode{}
					childIndex[node] = children
				}
				child, ok := children[frame]
				if !ok {
					child = &DiffNode{Name: frame}
					children[frame] = child
					node.Children = append(node.Children, child)
				}
				add(child, s.Value)
				node = child
			}
		}
	}

	addSide(left, func(n *DiffNode, v int64) { n.Left += v })
	addSide(right, func(n *DiffNode, v int64) { n.Right += v })

	sortDiffChildren(root)
	return root
}

func sortDiffChildren(n *DiffNode) {
	sort.SliceStable(n.Children, func(i, j int) bool {
		a, b := n.Children[i], n.Children[j]
		if a.Left+a.Right != b.Left+b.Right {
			return a.Left+a.Right > b.Left+b.Right
		}
		return a.Name < b.Name
	})
	for _, c := range n.Children {
		sortDiffChildren(c)
	}
}
