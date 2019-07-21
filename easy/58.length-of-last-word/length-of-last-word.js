/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var str = s
    str = str.replace(/ +$/g, '')
    str = str.replace(/^ +/g, '')
    var arr = str.split(' ')
    return arr[arr.length-1].length
};

