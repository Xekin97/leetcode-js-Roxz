/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // duplicate 4
    if (!n || n === 4) return false
    var ret = ('' + n).split('').reduce((acc, cur) => {
       acc += cur * cur 
       return acc
    }, 0)
    if (ret === 1) return true
    else return isHappy(ret)
};