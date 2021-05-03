const TreeNode = require('./tree-node');

class BinarySearchTree {
    constructor() {
        this.root = null; 
    }

    add(value, root=this.root) {
        if(root) {
            if(value > root.value) {
                if(root.right) {
                    this.add(value, root.right)
                } else {
                    root.right = new TreeNode(value);
                }
            } else if(value < root.value) {
                if(root.left) {
                    this.add(value, root.left)
                } else {
                    root.left = new TreeNode(value);
                }
            }
        } else {
            root.val = value;
        }
    }

    // root left right
    preOrder(arr=[], root = this.root) {
        let ret = arr;
        if(root) {
            ret.push(root)
            ret = this.preOrder(ret, root.left);
            ret = this.preOrder(ret, root.right);
        }
        return ret; 
    }


    // left rigth root
     postOrder(arr=[], root=this.root) {
         let ret = arr;
         if(root) {
             ret = this.postOrder(ret, ret.left);
             ret = this.postOrder(ret, ret.right);
             ret.push(root);
         }
         return ret;
     }

    // left root right 
    inOrder(arr=[], root=this.root) {
        let ret = arr;
        if(root) {
            ret = this.inOrder(ret, ret.left);
            ret.push(root);
            ret = this.inOrder(ret, ret.right)
        }
        return ret;
    }

    contains(value, root = this.root) {
        if(!root) {
            return false;
        } else if(value > root.val) {
            this.contains(value, root.right);
        } else if(value < root.val) {
            this.contains(value, root.left);
        } else if(value == root.val) {
            return true;
        }
    }

    // breadthFirst() {}

    // findMax() {}
}

module.exports = BinarySearchTree;