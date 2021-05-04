const BST = require('../../../data-structures/binarySearchTree/tree');
const maxDepthOfBinaryTree = require('./maxDepthOfBinaryTree');

describe('maxDepth', ()=>{
    let tree;

    beforeEach(() => {
        tree = new BST();
    })

    it('Can find the max depth of an empty tree', ()=> {
        expect(maxDepthOfBinaryTree(tree.root)).toBe(0);
    })

    it('Can find the max depth of a tree', () => {
        tree.add(10);
        tree.add(6);
        tree.add(16);
        tree.add(11);
        tree.add(17);
        expect(maxDepthOfBinaryTree(tree.root)).toBe(2);
    })
})