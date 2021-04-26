// You are given two non-empty linked lists representing two non
// negative integers. The digits are stored in reverse order,
// and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a single linked list.

// Example:
// Input: 
// List1: 2 -> 4 -> 3
// List2: 5 -> 6 -> 4
//Output: 
// List: 7 -> 9 - 8
// Explanation:
// 324 + 465 = 798, and 807 in reverse order is 708

const LinkedList = require('../../../data-structures/singly-linked-list/linked-list');

const addTwo = (l1, l2) => {
    // if curr.next.next is null 
    // we set save curr.next's value, and set curr.next to null
    let l1_num = traverseList(l1);
    let l2_num = traverseList(l2);
    let sum = parseInt(l1_num) + parseInt(l2_num);
    sum = ''+sum;
    sum = sum.split('');
    let ret = new LinkedList();
    sum.forEach(digit => ret.insert(parseInt(digit)));
    return ret;

}

const traverseList = (list) => {
    curr = list.head;
    let int = '';
    while(curr.next) {
        if(!curr.next.next) {
            int = int + curr.next.val;
            curr.next = null;
            curr = list.head;
        } else {
            curr = curr.next;
        }
    }
    int = int + list.head.val;
    return int;
}

module.exports = addTwo;