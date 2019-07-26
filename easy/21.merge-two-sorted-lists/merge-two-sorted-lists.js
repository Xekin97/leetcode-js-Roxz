/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode(0)
    var self = head
    var arr = []
    while (l1 || l2) {
        if (l1) {
            arr.push(l1.val)
            l1 = l1.next
        }
        if (l2) {
            arr.push(l2.val)
            l2 = l2.next
        }
    }
    arr.sort((a,b) => a-b)
    for (var i = 0, l = arr.length; i < l; i++) {
        self.next = new ListNode(arr[i])
        self = self.next
    }
    return head.next
};

