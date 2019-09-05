/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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

 // first
 var reverseList = function(head) {
    if (!head) return head
    var reverseLink = new ListNode(head.val),
        self = head
    while(self.next) {
        self = self.next
        var temp = new ListNode(self.val)
        temp.next = reverseLink
        reverseLink = temp
    }
    return reverseLink
};

// second
var reverseList = function(head) {
    function exchangeVal(n1, n2) {
        var temp = n1.val
        n1.val = n2.val
        n2.val = temp
    }
    if (!head) return head
    var self = head, arr = [head], c1 = 1
    while(self.next) {
        c1 ++
        self = self.next
        arr.push(self)
    }
    var middle = c1 >> 1
    arr.some((item,idx) => {
        exchangeVal(item, arr[arr.length-1-idx])
        return idx === middle
    })
    return head
};

//optimzed
var reverseList = function(head) {
    function exchangeVal(n1, n2) {
        var temp = n1.val
        n1.val = n2.val
        n2.val = temp
    }
    if (!head) return head
    var self = head, middle = head, arr = [head], c1 = 1, c2 = 1, c3 = 0
    while(self.next) {
        c1 ++
        self = self.next
        if ((c1+1)>> 1 > c2) {
            c2 ++
			middle = middle.next
            if (self.next) arr.push(middle)
        }
    }
	while (middle.next) {
        middle = middle.next
        exchangeVal(middle, arr[arr.length-1-c3])
        c3++
    }
    return head
};
