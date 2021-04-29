// Given a non-empty array of integers nums, every element
// appears twice except for one. Find that single one. 


const singleNumber = function(nums) {
    let duplicates = [];
    let current;
    for(let i = 0; i < nums.length; i++) {
        current = nums[i]
        if(!duplicates.includes(current)) {
            duplicates.push(current)
        } else {
            duplicates = duplicates.filter(num => num != current);
        }
    }

    return duplicates[0];
};

module.exports = singleNumber;