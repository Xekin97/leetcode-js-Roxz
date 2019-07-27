/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    /**
     * node: {
     *   val: val,
     *   left: null,
     *   right: null
     * }
     */
    var state = false
    function untie(node, bcSum=0) {
        if (!node || state) return 
        var value = node.val + bcSum
        if (node.left) {
            untie(node.left, value) 
        }
        if (node.right) {
            untie(node.right, value)
        }
        if (!node.left && !node.right && value == sum) state = true
    }
    untie(root)
    return state
};

