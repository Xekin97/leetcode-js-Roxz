/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var l = Math.max(a.length, b.length)
    var carry = 0
    var ret = []
    for (var i = 0; i < l; i++) {
        var add = a[a.length - i - 1] || 0
        var added = b[b.length - i - 1] || 0
        var sum = +add - (-added) + carry
        if (sum >= 2) {
            carry = 1
            sum -= 2
        }
        else carry = 0
        ret.unshift(sum)
    }
    if (carry !== 0) ret.unshift(carry)
    return ret.join('')
};

