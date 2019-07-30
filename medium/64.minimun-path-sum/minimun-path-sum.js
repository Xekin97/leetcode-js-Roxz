/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    /**
     * [
     *  [7,6,3],
     *  [8,7,2],
     *  [7,3,1]
     * ]
     */
    var m = grid.length - 1, n = grid[0].length - 1
    for (var i = m; i >= 0; i--) {
        for (var j = n ; j >= 0; j--) {
            if (i == m && j == n) continue
            var temp = grid[i][j]
            if (i == m) {
                grid[i][j] = grid[i][j + 1] + temp
            } else if (j == n) {
                grid[i][j] = grid[i+1][j] + temp
            } else {
                grid[i][j] = Math.min(grid[i+1][j], grid[i][j+1]) + temp
            }
        }
    }
    return grid[0][0]
};

