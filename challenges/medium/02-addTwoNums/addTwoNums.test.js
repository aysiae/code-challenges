const addTwoNums = require('./addTwoNums');
const LinkedList = require('../../../data-structures/singly-linked-list/linked-list');

describe('addTwoNums is a function that', () => {
    let list1;
    let list2;

    beforeEach(() => {
        list1 = new LinkedList();
        list2 = new LinkedList();
        list1.insert(2);
        list1.insert(4);
        list2.insert(5);
        list2.insert(7);
    })

    it('Can add the numbers contained in a linked list', () => {
        expect(addTwoNums(list1, list2)).toBe(true);
    })
})