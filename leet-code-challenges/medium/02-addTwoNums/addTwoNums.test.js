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

    it('Can add the numbers of same lengths contained in a linked list', () => {
        list1.insert(3);
        list1.insert(2);
        list1.insert(4);
        list2.insert(4);
        list2.insert(6);
        list2.insert(5)
        ret.insert(7);
        ret.insert(8);
        ret.insert(9);
        expect(addTwoNums(list1, list2)).toEqual(ret);
    });

    it('Can add the two different length numbers contained in linked lists', () => {
        list1.insert(1);
        list1.insert(0);
        list1.insert(0);
        list1.insert(0);
        list1.insert(0);
        list1.insert(0);
        list1.insert(2);
        list1.insert(4);
        list2.insert(2);
        list2.insert(1);
        list2.insert(6)
        ret.insert(1);
        ret.insert(0);
        ret.insert(0);
        ret.insert(0);
        ret.insert(0);
        ret.insert(2);
        ret.insert(4);
        ret.insert(0);
        expect(addTwoNums(list1, list2)).toEqual(ret);
    });
})