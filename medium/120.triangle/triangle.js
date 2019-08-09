/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // 0 => 0 ,1 | 1 => 1, 2 adjacent
    if (!triangle.length) return 0
    for (var i = triangle.length - 2; i >= 0; i--) {
        for (var j = 0, l = triangle[i].length; j < l; j++ ) {
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
        }
    }
    return triangle[0][0]

};

