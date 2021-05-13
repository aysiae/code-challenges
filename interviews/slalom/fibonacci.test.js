const isFibonacci = require('./fibonacci');

describe('isFibonnaci', () => {
    it('Will return true if the number is apart of the sequence', () => {
        expect(isFibonacci(8)).toBeTruthy();
    })

    it('Will return false if the number is not apart of the sequence', () => {
        expect(isFibonacci(20)).toBeFalsy();
    })

    it('Should return true if the number is one of the starting numbers', () => {
        expect(isFibonacci(0)).toBeTruthy();
    })

    it('Should return false if the number is negative', () => {
        expect(isFibonacci(-4)).toBeFalsy();
    })
})