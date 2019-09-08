/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */

 // dfs
var binaryTreePaths = function(root) {
    function getPath(n) {
        if (!n) return
        pre.push(n.val);
        if (!n.left && !n.right) {
            ret.push(pre.join('->'));
        } else {
            getPath(n.left);
            getPath(n.right);
        }
        // -1
        pre.pop();
    }
    if (!root) return []
    var ret = [];
    var pre = [];
    getPath(root);
    return ret;
};

// bfs
var binaryTreePaths = function(root) {
    if (!root) return []
    var queue = [[root, []]];
    var ret = [];
    while (queue.length) {
        var [node, path] = queue.shift();
        if (!node.left && !node.right) {
            ret.push(path.concat([node.val]).join('->'));
            continue;
        } 
        if (node.left) queue.push([node.left, path.concat([node.val])]);   
        if (node.right) queue.push([node.right, path.concat([node.val])]);   
    }
    return ret;
};