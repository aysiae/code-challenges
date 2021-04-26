const LinkedList = require('./singly-linked-list/linked-list');

describe('Singly Linked List', () => {
    let list;

    beforeEach(()=> {
        list = new LinkedList;
    });

    it('Can instantiate an empty linked list', () => {
        expect(list.head).toBe(null);
    });

    it('Can insert a node to the head of an empty linked list',() => {
        list.insert('cat');
        expect(list.head.val).toBe('cat');
    });

    it('Can insert a node to the head of a full linked list', () => {
        list.insert('cat');
        list.insert('dog');
        list.insert('snake');
        expect(list.head.val).toBe('snake');
    });

    it('Can append a node to the head of an empty linked list', () => {
        list.append('dog');
        expect(list.head.val).toBe('dog');
    });

    it('Can append a node to the end of a full linked list', () => {
        list.insert('cat');
        list.insert('snake');
        list.append('mouse');
        expect(list.head.next.next.val).toBe('mouse');
    });

    it('Can successfully determine if a value is included in the linked list', () => {
        list.insert('cat');
        list.insert('dog');
        list.insert('mouse');
        expect(list.includes('dog')).toEqual(true);
    });

    it('Can successfully determine if a value is not included in the linked list', () => {
        list.insert('cat');
        list.insert('dog');
        list.insert('mouse');
        expect(list.includes('bird')).toEqual(false);
    });
})