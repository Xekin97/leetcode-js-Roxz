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
    function untieChain (chain) {
        // chain => num
        var sumStr = ''
        function untie (chain) {
            if (chain) {
                sumStr = chain.val + sumStr
                if (chain.next) {
                    untie(chain.next)
                }
            } else return
        }
        untie(chain)
        return sumStr - 0
    }
    function createChain (num) {
        // num => chain
        if (num % 10 === num) return new ListNode(num)
        else {
            var str = num + ''
            var strArr = str.split('').reverse().map(item => item - 0)
            var ret = new ListNode(strArr[0])
            function getNext (aim) {
                return aim.next ? getNext(aim.next) : aim
            }
            for (var i = 1, l = strArr.length; i < l; i++) {
                getNext(ret).next = new ListNode(strArr[i])
            }
            return ret
        }
    }
    var ret = untieChain(l1) + untieChain(l2)
    return createChain(ret)
};

