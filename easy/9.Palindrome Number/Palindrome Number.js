/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var arr = (x+'').split('')
    var state = true
    arr.some((item, index) => {
        state = item === arr[arr.length - 1 - index]
        if (index+1 > (arr.length) / 2 || state === false) return true
    })
    return state
};

