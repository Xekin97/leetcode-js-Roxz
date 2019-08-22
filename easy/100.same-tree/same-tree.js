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

// dfs
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

// bfs
var isSameTree = function(p, q) {
    if (!p && !q) return true
    if (p && q) {
        if (p.val !== q.val) return false
        if (p.left && q.left && p.left.val !== q.left.val) return false
        if (p.right && q.right && p.right.val !== q.right.val) return false
    }else return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

