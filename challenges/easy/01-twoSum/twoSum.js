// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target

// You may assume that each input would have exactly one solutions, 
// and you may not use the same element twice. 

// Example:
// input: nums = [2,7,11,15] target = 9
// output: [0,1] because nums[0] = 2, and nums[1] = 7 and 2+7 = 9

const twoSum = (nums, target) => {
    let ret = [];
    for(let idx = 0; idx < nums.length; idx++) {
        let num = nums[idx];
            for(let i = idx+1; i < nums.length; i++) {
                let sum = num + nums[i];
                if(sum === target) {
                    console.log('target met', target);
                     ret = [idx, i];
                     break;
                }
            if(ret.length) {
                break;
            }
        }
    }
    return ret;
}

module.exports = twoSum;