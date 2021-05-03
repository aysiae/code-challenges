const TreeNode = require('./tree-node');

class BinarySearchTree {
    constructor() {
        this.root = null; 
    }

    add(value, root=this.root) {
        !this.root ? this.root = new TreeNode(value): null; 
        if(root) {
            if(value > root.val) {
                if(root.right) {
                    this.add(value, root.right)
                } else {
                    root.right = new TreeNode(value)
                }
            } else if(value < root.val) {
                if(root.left) {
                    this.add(value, root.left);
                } else {
                    root.left = new TreeNode(value);
                }
            }
        }
    }

    // root left right
    preOrder(arr=[], root = this.root) {
        let ret = arr;
        if(root) {
            ret.push(root.val)
            ret = this.preOrder(ret, root.left);
            ret = this.preOrder(ret, root.right);
        }
        return ret; 
    }


    // left right root
     postOrder(arr=[], root=this.root) {
         let ret = arr;
         if(root) {
             ret = this.postOrder(ret, root.left);
             ret = this.postOrder(ret, root.right);
             ret.push(root.val);
         }
         return ret;
     }

    // left root right 
    inOrder(arr=[], root=this.root) {
        let ret = arr;
        if(root) {
            ret = this.inOrder(ret, root.left);
            ret.push(root.val);
            ret = this.inOrder(ret, root.right)
        }
        return ret;
    }

    contains(value, root = this.root) {
        if(!root) {
            return false;
        } else {
            if(value == root.val) {
                return true;
            } else if(value > root.val) {
                return this.contains(value, root.right);
            } else if(value < root.val) {
                return this.contains(value, root.left);
            }
        }
    }

    // breadthFirst() {}

    // findMax() {}
}

module.exports = BinarySearchTree;