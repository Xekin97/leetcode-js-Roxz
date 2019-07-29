/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // I II III 1-3
    // IV V VI VII VIII 4-8
    // IX X XI XII XIII XIV XV XVI XVII XVIII XVIV XX 9-20
    // XXI XXII XXIII XXIV XXV XXVI XXVII XXVIII XXVIII XXIX XXX 21-30
    var romanSymbolList = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let arr = s.split('')
    return arr.reduce((acc, cur, index) => {
        var val = romanSymbolList[cur]
        var nextVal = romanSymbolList[arr[index+1]] || 0
        if (val < nextVal) acc -= val
        else acc += val
        return acc
    }, 0)
};

