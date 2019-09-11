/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Jump Game
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 压栈
var inorderTraversal = function (root) {
    if (!root) return [];
    var ret = []
    var stack = []
    stack.push(root)
    while (stack.length > 0) {
        while (root.left) {
            stack.push(root.left)
            root = root.left
        }
        var top = stack.pop()
        ret.push(top.val)
        if (top.right) {
            stack.push(top.right)
            if (top.right.left) {
                var templeft = top.right.left
                stack.push(templeft)
                while (templeft.left) {
                    stack.push(templeft.left)
                    templeft = templeft.left
                }
            }
        }
    }
    return ret
};