const reverseString = require('./reverseString');

describe('reverseString', () => {
    it('Can reverse a string', () => {
        let str = 'The quick brown fox jumped over the fence.'
        expect(reverseString(str)).toEqual('fence. the over jumped fox brown quick The');
    })
})