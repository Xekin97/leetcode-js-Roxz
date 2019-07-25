/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
//babad
var longestPalindrome = function(s) {
    var arr = s.split('')
    return arr.reduce((acc, cur, index) => {
         
        var result = ''
        var odd = 0
        var even = 0
        // odd
        while (arr[index - odd] && arr[index + odd] && arr[index - odd] == arr[index + odd]){
            odd ++
        }
        result = s.slice(index - odd + 1, index + odd)
        if (result.length > acc.length) acc = result
        // even
        while (arr[index - even] && arr[index + 1 + even] && arr[index] == arr[index+1] && arr[index - even] == arr[index + even + 1]) {
            even ++
        }
        result = s.slice(index - even + 1, index + even + 1)
        if (result.length > acc.length) acc = result
        return acc
    }, '')
};

