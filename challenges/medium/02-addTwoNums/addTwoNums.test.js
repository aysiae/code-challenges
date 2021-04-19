const addTwoNums = require('./addTwoNums');
const LinkedList = require('../../../data-structures/singly-linked-list/linked-list');

describe('addTwoNums is a function that', () => {
    let list1;
    let list2;
    let ret;

    beforeEach(() => {
        list1 = new LinkedList();
        list2 = new LinkedList();
        ret = new LinkedList();
    })

    it('Can add the numbers contained in a linked list', () => {
        list1.insert(2);
        list1.insert(4);
        list1.insert(1);
        list2.insert(5);
        list2.insert(7);
        ret.insert(2);
        ret.insert(9);
        ret.insert(8);
        expect(addTwoNums(list1, list2)).toEqual(ret);
    });
})