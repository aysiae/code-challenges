const moveZeroes = function(nums) {
    let zeros = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            zeros++;
        } else {
            nums[count] = nums[i];
            count++;
        }
    }
    for(let j = 0; j < zeros; j++) {
        nums[nums.length-1-j] = 0; 
    }
    return nums; 
};

module.exports = moveZeroes;