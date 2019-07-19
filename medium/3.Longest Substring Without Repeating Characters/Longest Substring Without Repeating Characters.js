/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var cache = new Set()
    var strArr = s.split('')
    var l = strArr.length
    var state = false
    var start = 0
    var i = 0
    var maxSize = 0
    if (l === 0) return 0
    while (!state) {
        if (cache.has(strArr[i])) {
            if (cache.size > maxSize) maxSize = cache.size
            cache.clear()
            start++
            i = start
        }
        cache.add(strArr[i])
        if (i === l - 1) {
            if (cache.size > maxSize) maxSize = cache.size
            state = true
        }
        i++
    }
    return maxSize
};

