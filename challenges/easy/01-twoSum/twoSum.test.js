const twoSum = require('./twoSum');

describe('twoSum', () => {
    it('Will return the indices of numbers that equal the target', () => {
        let nums = [2,6,7,12,19];
        let target = 9;
        expect(twoSum(nums, target)).toEqual([0,2]);
    })

    it('Can return the indices of numbers when nums has a length of 2', () => {
        let nums = [2,2];
        let target = 4;
        expect(twoSum(nums, target)).toEqual([0,1]);
    })

    it('Can return indices of numbers when the same numbers are side by side', () => {
        let nums = [2,5,5,11];
        let target = 10;
        expect(twoSum(nums, target)).toEqual([1,2]);
    })

    it('Can still return indices of numbers when target is 0', () => {
        let nums = [0,4,3,0];
        let target = 0;
        expect(twoSum(nums, target)).toEqual([0,3]);
    })
})