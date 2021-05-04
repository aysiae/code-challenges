// Given an array nums of size n return the majority element
// The majority element appears more than n / 2 times
// You may assume that a majority element always exists in 
// the input array

// Example
// input: nums = [3,2,3]
// output: 3 



const majorityElement = (nums) => {
    let majority = nums.length / 2;
    let map = {}
    for(var num of nums) {
        map[num] = map[num] + 1 || 1;
        
        if(map[num] > majority) {
            return num; 
        }
    }
};

module.exports = majorityElement;