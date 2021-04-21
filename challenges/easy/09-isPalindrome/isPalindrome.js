// Given an integer x, return true if x is a palindrome integer 
// An integer is a palindrome when it reads the same backwards and forwards


// Example
// Input: x = 121
// Output: true
// Explanation, x reversed is 121 which is still equal to 121 

const isPalindrome = (x) => {
    let num = ''+x;
    num = num.split('');
    for(let i = 0; i < Math.floor(num.length/2); i++) {
        let placeholder = num[i];
        let idx = num.length - 1 - i; 
        num[i] = num[idx];
        num[(num.length - 1) - i] = placeholder;
    }

    let ret = ''; 
    for(let j = 0; j < num.length; j++) {
        ret = ret + num[j]
    }

    if(ret == x) {
        return true;
    } else {
        return false;
    }
}

module.exports = isPalindrome;