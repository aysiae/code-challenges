const moveZeroes = require('./moveZeroes');

describe('moveZeroes', () => {
    it('Can properly move zeroes to the end of the array', () => {
        expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0]);
    })

    it('Can properly maintain the order of non zero elements', () => {
        expect(moveZeroes([1,0,5,0,0,7,0,11,12,0,14])).toEqual([1,5,7,11,12,14,0,0,0,0,0]);
    })

    it('Can handle an array of all zeroes', () => {
        expect(moveZeroes([0,0,0,0,0])).toEqual([0,0,0,0,0]);
    }) 

    it('Can handle an array with only one non zero digit', () => {
        expect(moveZeroes([0,0,0,0,2,0])).toEqual([2,0,0,0,0,0]);
    })
})