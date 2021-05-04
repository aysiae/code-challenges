// Given an integer array nums, move all 0's to the end of it
//  while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

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