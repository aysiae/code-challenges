// Given an integer n, return an array of strings that count up to n
// However if the number is divisble by 3 and 5, replace the integer with FizzBuzz
// If the number is only divisible by 3, replace the integer with Fizz
// If the number is only divisible by 5, replace the integer with Buzz

// Example
// Input: 5
// Output: ['1', '2', 'Fizz', '4', 'Buzz']

var fizzBuzz = function(n) {
    let ret = [];
    if(n == 0) {
        ret.push('0')       
    }
    for(let idx = 1; idx <= n; idx++) {
        if(idx % 3 == 0 && idx % 5 == 0) {
            ret.push('FizzBuzz')
        } else if (idx % 3 == 0) {
            ret.push('Fizz')
        } else if (idx % 5 == 0) {
            ret.push('Buzz')
        } else {
            ret.push(`${idx}`)
        }
    }
    return ret;
};

module.exports = fizzBuzz;