/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root, top=Infinity, bottom=-Infinity) {
    if (!root) return true
    if (root.val >= top || root.val <= bottom) return false
    // 左边节点不能超过当前 top 值 右边节点不能低于当前 bottom 值
    var t = Math.min(root.val, top)
    var b = Math.max(root.val, bottom)
    
    return isValidBST(root.left, t, bottom) && isValidBST(root.right, top, b)
};

