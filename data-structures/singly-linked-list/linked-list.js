const Node = require('./node');

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        if(!this.head) {
            this.head = new Node(value);
        } else {
            let node = new Node(value);
            node.next = this.head;
            this.head = node;
        }
    }

    includes(value) {
        let current = this.head;
        while(current) {
            if(current.val == value) {
                return true;
            } 
            current = current.next;
        }
        return false;
    }

    append(value) {
        if(!this.head) {
            this.head = new Node(value);
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = new Node(value);
        }
    }

    toString() {
        let curr = this.head;    
        let ret = '';
        while(curr != null) {
            if(curr == this.head) {
                ret = `{ ${curr.value} } -> `
            } else  {
                ret = `${ret}{ ${curr.value} } -> `
            }
            curr = curr.next;
        } 
        ret = `${ret}NULL`
        return ret;
    }

}

module.exports = SinglyLinkedList;
