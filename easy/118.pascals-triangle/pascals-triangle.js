/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (!numRows) return []
    var ret = [[1]]
    var idx = 1
    function main (arr, idx) {
        if (idx === 1) return [1,1]
        else {
            var res = []
            for (var i = 0; i < arr[idx-1].length-1; i++) {
                res.push(1 * arr[idx-1][i]+ 1 * arr[idx-1][i+1])
            }
            res.unshift(1)
            res.push(1)
            return res
        }
    }
    while (idx < numRows) {
        ret.push(main(ret, idx))
        idx++
    }
    return ret
};

