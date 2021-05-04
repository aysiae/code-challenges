const majorityElement = require('./majorityElement');

describe('majorityElement', () => {
    it('Can return the majority element', () => {
        expect(majorityElement([0,0,1,1,0])).toBe(0);
    })

    it('Can return the majority element if they are strings',() => {
        expect(majorityElement(['cat','cat', 'cat', 1, 'cat',1])).toBe('cat');
    })

    it('Can return the majority element if there are more than 2 different elements', () => {
        expect(majorityElement([3,3,2,1,2,3,4,4,3,3,3])).toBe(3);
    })

    it('Can return the majority element if they are all the same', () => {
        expect(majorityElement([9,9,9,9,9,9])).toBe(9);
    })
})