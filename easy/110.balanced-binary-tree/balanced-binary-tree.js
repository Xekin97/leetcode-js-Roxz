/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Maximum Depth of Binary Tree
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

 // 递归
var isBalanced = function(root) {
    function getHeight(root) {
        if(!root) return 0;
        var left = getHeight(root.left);
        var right = getHeight(root.right);
        if(left == -1 || right == -1 || Math.abs(left - right) > 1) return -1;
        return 1 + Math.max(left, right);
    }
    return getHeight(root) !== -1;
};

// optimzed
var isBalanced = function(root) {
     function getHeight(root){
        if (!root) return 0;
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    };
    return !root || isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) < 2;  
};