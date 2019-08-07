/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 1 2 3 5 8 13 21
    if (n == 1 || n == 2 || n == 3 ||!n) return n
    else {
        var ll = 2
        var l = 3
        var sum = 5
        for (let i = 4; i < n; i++) {
            ll = l
            l = sum
            sum = ll + l
        }
        return sum
    }
};

