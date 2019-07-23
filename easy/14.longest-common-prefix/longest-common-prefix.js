/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((acc, cur, index) => {
        if (index === 0) acc = cur
        else {
            var res = ""
            cur.split('').some((word, index) => {
                if (word === acc[index]) res += word
                else return true
            })
            acc = res
        }
        return acc
    }, "")
};

