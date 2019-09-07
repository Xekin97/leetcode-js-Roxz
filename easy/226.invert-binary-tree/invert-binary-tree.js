/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root
    if (root.left) invertTree (root.left)
    if (root.right) invertTree (root.right)
    var temp = root.left
    root.left = root.right
    root.right = temp
    return root
};


// bfs
var invertTree = function(root) {
    if(!root) return root
    var queue = [root]
    while (queue.length) {
        var now = queue.pop()
        var temp = now.left
        now.left = now.right
        now.right = temp
        if (now.left) queue.push(now.left)
        if (now.right) queue.push(now.right)
    }
    return root
};

// optimzed
var invertTree = function(root) {
    root && ([root.left, root.right] = [invertTree(root.right), invertTree(root.left)])
    return root
};