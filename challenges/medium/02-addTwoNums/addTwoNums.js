// You are given two non-empty linked lists representing two non
// negative integers. The digits are stored in reverse order,
// and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a single linked list.

// Example:
// Input: 
// List1: 2 -> 4 -> 3
// List2: 5 -> 6 -> 4
//Output: 
// List: 7 -> 0 -> 8
// Explanation:
// 324 + 465 = 807, and 807 in reverse order is 708

const LinkedList = require('../../../data-structures/singly-linked-list/linked-list');

const addTwo = (l1, l2) => {
    let curr1 = l1.head;
    // if curr.next.next is null 
    // we set save curr.next's value, and set curr.next to null
    let int1 = '';
    let int2 = '';
    while(curr1.next) {
        if(!curr1.next.next) {
            int1 = int1 + curr1.next.val;
            curr1.next = null;
            curr1 = l1.head;
        } else {
            curr1 = curr1.next;
        }
    }
    console.log(int1);
    return false;

}

module.exports = addTwo;