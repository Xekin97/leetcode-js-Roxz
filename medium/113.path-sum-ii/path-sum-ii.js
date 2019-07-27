/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    /**
     * node: {
     *   val: val,
     *   left: null,
     *   right: null
     * }
     */
    var ret = []
    function untie(node, bcSum=0, bcStr='') {
        if (!node) return
        var value = node.val + bcSum
        var str = bcStr == '' ? '' + node.val : bcStr + ',' + node.val
        
        if (node.left) {
            untie(node.left, value, str) 
        }
        if (node.right) {
            untie(node.right, value, str)
        }
        if (!node.left && !node.right && value == sum) ret.push(str.split(',').map(item => item-0))
    }
    untie(root, 0)
    return ret
};

