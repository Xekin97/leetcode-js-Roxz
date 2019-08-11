/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return null
    var self = head
    while (self.next) {
        if (self.val !== self.next.val) {
            self = self.next
        } else if (self.next.next) {
            self.next = self.next.next
        } else self.next = null
    }
    return head
};

