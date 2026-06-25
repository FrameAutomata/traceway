package services

import (
	"testing"

	"github.com/tracewayapp/traceway/backend/app/models"
)

func diffChild(n *DiffNode, name string) *DiffNode {
	for _, c := range n.Children {
		if c.Name == name {
			return c
		}
	}
	return nil
}

func sv(value int64, frames ...string) models.ProfileStackValue {
	return models.ProfileStackValue{Stack: frames, Value: value}
}

func TestFoldDiff_SharedStackMergesBothSides(t *testing.T) {
	left := []models.ProfileStackValue{sv(100, "main", "work")}
	right := []models.ProfileStackValue{sv(150, "main", "work")}

	root := FoldDiff(left, right)
	if root.Left != 100 || root.Right != 150 {
		t.Fatalf("root = (L%d,R%d), want (100,150)", root.Left, root.Right)
	}
	main := diffChild(root, "main")
	if main == nil || main.Left != 100 || main.Right != 150 {
		t.Fatalf("main = %+v, want (100,150)", main)
	}
	work := diffChild(main, "work")
	if work == nil || work.Left != 100 || work.Right != 150 {
		t.Fatalf("work = %+v, want (100,150)", work)
	}
}

func TestFoldDiff_OneSidedStacksZeroOnTheOther(t *testing.T) {
	left := []models.ProfileStackValue{sv(50, "main", "onlyLeft")}
	right := []models.ProfileStackValue{sv(70, "main", "onlyRight")}

	root := FoldDiff(left, right)
	if root.Left != 50 || root.Right != 70 {
		t.Fatalf("root = (L%d,R%d), want (50,70)", root.Left, root.Right)
	}
	onlyLeft := diffChild(diffChild(root, "main"), "onlyLeft")
	if onlyLeft == nil || onlyLeft.Left != 50 || onlyLeft.Right != 0 {
		t.Errorf("onlyLeft = %+v, want (50,0)", onlyLeft)
	}
	onlyRight := diffChild(diffChild(root, "main"), "onlyRight")
	if onlyRight == nil || onlyRight.Left != 0 || onlyRight.Right != 70 {
		t.Errorf("onlyRight = %+v, want (0,70)", onlyRight)
	}
}

func TestFoldDiff_CombinedAccumulatesCumulatively(t *testing.T) {
	left := []models.ProfileStackValue{sv(100, "main", "b"), sv(50, "main", "c")}
	right := []models.ProfileStackValue{sv(150, "main", "b"), sv(70, "main", "d")}

	root := FoldDiff(left, right)
	if root.Left != 150 || root.Right != 220 {
		t.Fatalf("root = (L%d,R%d), want (150,220)", root.Left, root.Right)
	}
	main := diffChild(root, "main")
	if main.Left != 150 || main.Right != 220 {
		t.Fatalf("main cumulative = (L%d,R%d), want (150,220)", main.Left, main.Right)
	}
	if b := diffChild(main, "b"); b == nil || b.Left != 100 || b.Right != 150 {
		t.Errorf("b = %+v, want (100,150)", b)
	}
	if cc := diffChild(main, "c"); cc == nil || cc.Left != 50 || cc.Right != 0 {
		t.Errorf("c = %+v, want (50,0)", cc)
	}
	if d := diffChild(main, "d"); d == nil || d.Left != 0 || d.Right != 70 {
		t.Errorf("d = %+v, want (0,70)", d)
	}
}

func TestFoldDiff_Empty(t *testing.T) {
	root := FoldDiff(nil, nil)
	if root == nil || root.Left != 0 || root.Right != 0 || len(root.Children) != 0 {
		t.Fatalf("empty diff = %+v, want zero root with no children", root)
	}
}

func TestFoldDiff_ChildrenSortedByCombinedMagnitude(t *testing.T) {
	left := []models.ProfileStackValue{sv(10, "main", "small"), sv(100, "main", "big")}
	right := []models.ProfileStackValue{sv(10, "main", "small"), sv(100, "main", "big")}

	root := FoldDiff(left, right)
	main := diffChild(root, "main")
	if main == nil {
		t.Fatal("main node missing")
	}
	if len(main.Children) != 2 || main.Children[0].Name != "big" {
		t.Errorf("children order = %v, want big first (sorted by left+right desc)", main.Children)
	}
}
