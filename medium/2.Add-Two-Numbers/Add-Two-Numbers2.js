/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0)
    var self = head
    var carry = 0
    var sum = 0

    while( l1 || l2 || sum > 0 ) {
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        if (sum >= 10) {
            sum -= 10
            carry ++
        }

        self.next = new ListNode(sum)
        self = self.next
        sum = carry
        carry = 0
    }
    
    return head.next
    
};

