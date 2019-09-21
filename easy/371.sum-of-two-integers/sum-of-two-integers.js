/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    // 递归到 0 为止
    if (!b) return a;
    return getSum(a ^ b, (a & b) * 2);
  };