/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    function entie(node) {
        if(!node) return ''
        var str = '' + node.val
        if (node.left !== undefined) {
            str += 'l' + entie(node.left)
        }
        if (node.right !== undefined) {
            str += 'r' + entie(node.right)
        } 
        return str
    }
    return entie(p) == entie(q)
};

