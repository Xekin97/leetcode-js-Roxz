/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [231] Power of Two
 */
/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function(n) {
    if (!n) return false
    return (Math.log(n) / Math.log(2)) % 1 < 0.000000001
};