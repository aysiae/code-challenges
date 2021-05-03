const singleNumber = require('./singleNum');

describe('SingleNum', () => {
    it('Can return the solo number', () => {
        expect(singleNumber([0,2,0,3,4,4,2])).toBe(3);
    })

    it('Can return a solo number in single digit array',() => {
        expect(singleNumber([2])).toBe(2);
    })

    it('Will return undefined if there are no solo numbers', () => {
        expect(singleNumber([2,5,2,5,6,9,6,9])).toBe(undefined);
    })
})