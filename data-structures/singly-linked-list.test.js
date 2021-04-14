const LinkedList = require('./singly-linked-list/linked-list');

describe('Singly Linked List', () => {
    let list;

    beforeEach(()=> {
        list = new LinkedList;
    });

    it('Can instantiate an empty linked list', () => {
        expect(list.head).toBe(null);
    })
})