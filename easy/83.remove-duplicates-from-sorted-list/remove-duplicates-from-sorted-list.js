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
// while 遍历
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

// 递归
var deleteDuplicates = function(head) {
    if (!head) return null
    var mNode = new ListNode(head.val)
    var self = mNode
    function check(node, next) {
        if (next === null) return
        else if (node.val !== next.val) {
            self.next = next
            self = self.next
        } else self.next = null
        check(next, next.next)
    }
    check(head, head.next)
    return mNode
};

