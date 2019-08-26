/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if (!board || !board[0].length) return []
    var rlen = board.length
    var clen = board[0].length
    var ret = []
    function checkLiveNumCellAround(m, n) {
        var l = board[m][n-1] || 0
        var r = board[m][n+1] || 0
        var t = board[m-1] ? board[m-1][n] : 0
        var b = board[m+1] ? board[m+1][n] : 0
        var l_t = board[m][n-1] == undefined || board[m-1] == undefined ? 0 : board[m-1][n-1]
        var r_t = board[m][n+1] == undefined || board[m-1] == undefined ? 0 : board[m-1][n+1]
        var l_b = board[m][n-1] == undefined || board[m+1] == undefined ? 0 : board[m+1][n-1]
        var r_b = board[m][n+1] == undefined || board[m+1] == undefined ? 0 : board[m+1][n+1]
        return l + r + t + b + l_t + r_t + l_b + r_b
    }
    
    for (var i = 0; i < rlen; i ++) {
        ret[i] = []
        for (var j = 0; j < clen; j ++) {
            var liveNum = checkLiveNumCellAround(i, j)
            if (liveNum - 2 < 0) ret[i][j] = 0
            else if (liveNum === 2) ret[i][j] = board[i][j]
            else if (liveNum === 3) ret[i][j] = 1
            else if (liveNum - 3 > 0) ret[i][j] = 0
        }
    }
    for (var i = 0; i < rlen; i ++) {
        for (var j = 0; j < clen; j ++) {
            board[i][j] = ret[i][j]
        }
    }
};