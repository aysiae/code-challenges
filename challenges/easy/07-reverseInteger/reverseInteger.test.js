const reverseInt = require('./reverseInteger');

describe('reverseInt', () => {
    it('Can reverse a positive integer', () => {
        let int = 1234;
        expect(reverseInt(int)).toEqual(4321);
    });

    it('Can reverse a negative integer', () => {
        let int = -215;
        expect(reverseInt(int)).toEqual(-512);
    })

    it('Can reverse an integer than ends in 0', () => {
        let int = 1420;
        expect(reverseInt(int)).toEqual(241);
    })
})