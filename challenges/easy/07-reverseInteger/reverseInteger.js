// Given a signed 32 bit integer x return x with its digit reversed
// If reversing x causes the value to go outide the signed 32 bit
// integer range [-2^31, 2^31-1] then return 0. 

// Example: 
// Input: x = 123
// Output: 321

const reverseInt = (x) => {
    let nums = (''+x).split('');
    let reverse = '';
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] != '-' && nums[0] != 0) {
            reverse = `${reverse}${nums[i]}`
        } else if(i == 0) {
            if(nums[i] == '-') {
                reverse = `-${reverse}`
            }
        }
    }
    reverse = parseInt(reverse);
    let upper = Math.pow(2,31) - 1;
    let lower = Math.pow(-2, 31);
    if(reverse > upper || reverse < lower) {
        return 0;
    }
    return reverse;
}

module.exports = reverseInt;