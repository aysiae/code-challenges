const ReverseString = require('./reverseString')

describe('reverseString', () => {
    let test;
    let reverse;
    let exclamation;
    let racecar;
    
    beforeAll(() => {
        test = ['t','e','s','t'];
        reverse = ['r','e','v','e','r','s','e'];
        exclamation = ['e','x','c','l','a','m','a','t','i','o','n'];
        racecar = ['r','a','c','e','c','a','r'];
    })

    it('Can reverse a string', () => {
        expect(ReverseString(test)).toEqual(test.reverse());
    })

    it('Can reverse a longer string', () => {
        expect(ReverseString(exclamation)).toEqual(exclamation.reverse());
    })

    it('Can reverse a palindrome', () => {
        expect(ReverseString(racecar)).toEqual(racecar);
    })
})