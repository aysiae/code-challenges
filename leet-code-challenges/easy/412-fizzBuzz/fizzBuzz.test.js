const FizzBuzz = require('./fizzBuzz');

describe('FizzBuzz', () => {
    it('Can properly replace integers divsible by 3', () => {
        expect(FizzBuzz(3)).toEqual(['1','2','Fizz']);
    });

    it('Can properly replace integers divisible by 5', () => {
        expect(FizzBuzz(5)).toEqual(['1','2','Fizz','4','Buzz']);
    })

    it('Can properly replace integers divisible by both 3 and 5', () => {
        expect(FizzBuzz(15)).toEqual(['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']);
    })

    it('Can handle if n is 0', () => {
        expect(FizzBuzz(0)).toEqual(['0']);
    })
    
})