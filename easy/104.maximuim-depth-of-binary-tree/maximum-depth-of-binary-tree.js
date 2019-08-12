/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    function next (node, depth) {
        if (!node) return depth
        if (!node.left && !node.right) return depth+1
        return Math.max(next(node.left, depth + 1), next(node.right, depth + 1))
    }
    return next(root, 0)

};

