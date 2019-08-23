/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    var solution = [];
    for(var i=0; i<matrix.length; ++i){ // step 1
        for(var j=0; j<matrix[i].length; ++j){
            if(matrix[i][j]===0){
                solution.push(i);
                solution.push(j);
            }
        }
    }
    for(var k=0; k<solution.length; ++k){ // step 2
        for(j=0; j<matrix[solution[k]].length; ++j){
            matrix[solution[k]][j] = 0;
        }
        for(i=0; i<matrix.length; ++i){
            matrix[i][solution[k+1]] = 0;
        }
        ++k;
    }
};

// optimzation
var setZeroes = function(matrix) {
    var flag = false
    var l1 = matrix.length
    // 长度不管那行都一致
    var l2 = matrix[0].length
    for (var i = 0; i < l1; i ++) {
        if (matrix[i][0] == 0) flag = true
        for (var j = 1; j < l2; j ++) {
            if (!matrix[i][j]) matrix[i][0] = matrix[0][j] = 0
        }
    }
    for (var i = l1 - 1; i >= 0; i --) {
        for (var j = l2 - 1; j >= 1; j --) {
            if (!matrix[i][0] || !matrix[0][j]) matrix[i][j] = 0
        }
        flag && (matrix[i][0] = 0)
    }
};
