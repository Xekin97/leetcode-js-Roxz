/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let coefficient = x >= 0 ? 1 : -1
    let str = Math.abs(x) + ''
    let ret = coefficient * (str.split('').reverse().join('') - 0)
    return Math.abs(ret) > Math.pow(2, 31) ? 0 : ret
};

