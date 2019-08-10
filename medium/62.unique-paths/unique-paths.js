/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) return 1
    var arr = []
    for (var i = n - 2; i >= 0; i--) {
        arr[i] = []
        for (var j = m - 2; j >= 0; j--) {
            var right = arr[i][j+1] || 1
            var bottom = arr[i+1] ? arr[i+1][j] : 1
            arr[i][j] = right + bottom
        }
    }
    return arr[0][0]
};
