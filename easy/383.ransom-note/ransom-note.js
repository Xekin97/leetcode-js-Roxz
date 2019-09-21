/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var wordHash = {}
    for (var i = 0, l = magazine.length; i < l; i ++) {
        var word = magazine[i]
        if (!wordHash[word]) wordHash[word] = 1
        else wordHash[word] ++
        
    }
    for (var j = 0, len = ransomNote.length; j < len; j ++) {
        var nWord = ransomNote[j]
        if (!wordHash[nWord]) return false
        else wordHash[nWord] --
    }
    return true
};