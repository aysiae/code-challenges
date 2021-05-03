const BinarySearchTree = require('./tree');

describe("Binary Search Tree", () => {
    let tree;
    let traversal;

    beforeEach(() => {
        tree = new BinarySearchTree();
        traversal = new BinarySearchTree();
        traversal.add(11);
        traversal.add(6);
        traversal.add(15);
        traversal.add(3);
        traversal.add(9);
        traversal.add(13);
        traversal.add(21);
    });

    it('Can instantiate an empty tree', () => {
        expect(tree.root).toBe(null);
    });

    it('Can add a single value as the root', () => {
        tree.add(4);
        expect(tree.root.val).toBe(4);
    });

    it('Can add lesser values to the left of the root', () => {
        tree.add(7);
        tree.add(4);
        expect(tree.root.left.val).toBe(4);
    });

    it('Can add greater values to the right of the root', () => {
        tree.add(7);
        tree.add(11);
        expect(tree.root.right.val).toBe(11);
    });

    it('Can successfully do a post order traversal ', () => {
        expect(traversal.postOrder()).toEqual([3,9,6,13,21,15,11]);
    });

    it('Can successfully do a pre order traversal ', () => {
        expect(traversal.preOrder()).toEqual([11,6,3,9,15,13,21]);
    });

    it('Can successfully do an in order traversal ', () => {
        expect(traversal.inOrder()).toEqual([3,6,9,11,13,15,21]);
    });

    it('Can successfully return true if a value is contained in the tree', ()=> {
        expect(traversal.contains(21)).toBeTruthy();
    })

    it('Can successfully return false if a value is not contained in the tree', ()=> {
        expect(traversal.contains(26)).toBeFalsy();
    })
})