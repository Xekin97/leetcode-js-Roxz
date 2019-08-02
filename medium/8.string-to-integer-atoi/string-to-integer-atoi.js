/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var pre = 1
    var limit = Math.pow(2, 31) - 1
    var ret = str.replace(/\s*/, '')
    if (ret[0] != '-' && ret[0] != '+' && !/\d/.test(ret[0])) return 0
    if ((ret[0] == '-' || ret[0] == '+') && !/\d/.test(ret[1])) return 0
    if (ret[0] == '-') {
        pre = -1
        limit ++
    }
    ret = ret.match(/\d+/)
    if (!ret) return 0
    return Math.abs(ret - 0) > limit ? pre * limit : (ret - 0) * pre
};

