const isPalindrome = require('./isPalindrome');

describe('isPalindrome',() => {
    it('Will return false if a number is not a palindrome', () => {
        expect(isPalindrome(24)).toBeFalsy();
    })

    it('Will return false even if the number is almost a palindrome', () => {
        expect(isPalindrome(2443)).toBeFalsy();
    })

    it('Will return true if a number is a palindrome', () => {
        expect(isPalindrome(242)).toBeTruthy();
    })

    it('Will return true if a number is a palindrome and has an even amount of digits', () => {
        expect(isPalindrome(562265)).toBeTruthy();
    })

    it('Will return false if given a negative number', () => {
        expect(isPalindrome(-141)).toBeFalsy();
    })

    it('Will return true if the number is a single digit', () => {
        expect(isPalindrome(2)).toBeTruthy();
    })
})