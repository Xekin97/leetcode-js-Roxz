/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Jump Game
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root
    var quene = [root]
    var nowLength = 0
    while (quene.length) {
        var len = quene.length
        if (!nowLength) nowLength = len
        var node = quene[len - 1]
        node.next = nowLength === 1 ? null : quene[len - 2]
        if (node.left) quene.unshift(node.right, node.left)
        nowLength --
        quene.pop()
    }
    return root
};