/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var l = digits.length
    digits[l-1] ++
    for (var i = l-1; i >= 0; i--) {
        if (digits[i] == 10) {
            digits[i] = 0
            digits[i-1] ? digits[i-1] ++ : digits.unshift(1)
        }
    }
    return digits
};

