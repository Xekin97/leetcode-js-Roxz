/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    function exchangeVal(node1, node2) {
        var temp = node1.val
        node1.val = node2.val
        node2.val = temp
    }
    if (!head) return []
    if (!head.next || (m == n)) return head
    var self = head
    var pointer = 1
    var rp = 0
    var mapArr = []
    if (m == 1) mapArr.push(head)
    while (self.next) {
        pointer ++
        self = self.next
        if (pointer >= m && pointer < (m + n) / 2) {
            mapArr.push(self)
        }
        if (pointer > (m + n) / 2) {
            exchangeVal(self, mapArr[mapArr.length - 1 - rp])
            rp++
        }
        if (pointer === n) break;
    }
    return head
};