/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
    function check(left, right) {
        if (left && !right || right && !left) return false
        if (!left && !right) return true
        // 左右左右左
        if (left.val === right.val) return check(left.left, right.right) && check(left.right, right.left)
        return false
    }
    return check(root, root)
};


