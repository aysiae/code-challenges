

const maxDepthOfBinaryTree = (root, maxDepth = 1) => {
    let right = 1;
    let left = 1;    
    if(root) {
        if(!root.right && !root.left) {
            return maxDepth;
        } 
        right = maxDepthOfBinaryTree(root.right, maxDepth++);
        left = maxDepthOfBinaryTree(root.left, maxDepth++);
        if(!right) {
            return left;
        } else if(!left) {
            return right;
        } else if(right > left) {
            return right;
        } else {
            return left; 
        }
    } else {
        return 0;
    } 
}

module.exports = maxDepthOfBinaryTree;