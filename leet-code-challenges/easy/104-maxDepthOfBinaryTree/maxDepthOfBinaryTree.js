

const maxDepth = (root, maxDepth = 0) => {
    if(!this.root) {
        return 0; 
    } 
    let max = maxDepth;
    let right = 0;
    let left = 0;      
    if(root) {
        if(root.left) {
            max++;
            left = maxDepth(root.left, max);
        } else {
            left = max;
        }

        if(root.right) {
            max++;
            right = maxDepth(root.right, max);
        } else {
            right = max; 
        }

    } else {
        if(right > left) {
            return right;
        } else {
            return left; 
        }
    }
}

module.exports = maxDepth;