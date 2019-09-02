/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * [
 *  [1,   4,  7, 11, 15],
 *  [2,   5,  8, 12, 19],
 *  [3,   6,  9, 16, 22],
 *  [10, 13, 14, 17, 24],
 *  [18, 21, 23, 26, 30]
 * ]
 */
// binary
var searchMatrix = function(matrix, target) {
    function binarySearch(arr, value) {
        for (var low = 0, high=arr.length - 1; low <= high;) {
            var middle = Math.floor((low + high) / 2)
            if (arr[middle] == value) {
                return middle
            } else if (arr[middle] < value) {
                low = middle + 1
            } else {
                high = middle - 1
            }
        }
        return -1
    }
    for (var i = 0, l=matrix.length; i<l; i++) {
        var ret = binarySearch(matrix[i], target)
        if (ret !== -1) return true
    }
    return false
};

// optimized
var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false
    var y = 0;
    var x = matrix[0].length - 1;
    while (y < matrix.length && x >= 0) {
        if (matrix[y][x] == target) return true;
        if (matrix[y][x] < target) y++;
        else x--;
    }
    return false;
};