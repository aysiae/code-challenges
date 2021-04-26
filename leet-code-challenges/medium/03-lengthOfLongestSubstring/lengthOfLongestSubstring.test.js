const lengthOfLongestSubstring = require('./lengthOfLongestSubstring');

describe('lengthOfLongestSubstring', () => {
    it('Can return the length of the longest substring', () => {
        expect(lengthOfLongestSubstring('abcdabc')).toBe(4);
    })

    it('Can return the length of the longest substring', () => {
        expect(lengthOfLongestSubstring('dreadi')).toBe(5);
    })

    it('Can return the length of the longest substring', () => {
        expect(lengthOfLongestSubstring('bbbbbcbbb')).toBe(2);
    })
    

})