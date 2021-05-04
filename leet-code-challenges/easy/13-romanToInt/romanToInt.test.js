const romanToInt = require('./romanToInt');

describe('romanToInt', () => {
    it('Can properly assess basic roman numerals',() => {
        expect(romanToInt('iii')).toBe(3);
    })

    it('Can properly assess I before V', () => {
        expect(romanToInt('iv')).toBe(4);
    })

    it('Can properly assess I before X', () => {
        expect(romanToInt('ix')).toBe(9);
    })

    it('Can properly assess X before L', () => {
        expect(romanToInt('xl')).toBe(40);
    })

    it('Can properly assess X before C', () => {
        expect(romanToInt('xc')).toBe(90);
    })

    it('Can properly assess C before D', () => {
        expect(romanToInt('cd')).toBe(400);
    })

    it('Can properly assess C before M', () => {
        expect(romanToInt('cm')).toBe(900);
    })

    it('Can properly assess a birth year', () => {
        expect(romanToInt('mcmxciv')).toBe(1994);
    })

    it('Can properly assess a basic input', () => {
        expect(romanToInt('liv')).toBe(54);
    })
    
})