/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */
/**
 * @param {string} s
 * @return {boolean}
 */

 // JS 流氓隐式转换解法
var isNumber = function(s) {
    var str = s.replace(/(^\s*)|(\s*$)/g, "")
    if (!str) return false
    var content = str - 1
    if (!content && content !== 0) return false
    return true
};

// 大佬的 有限状态机 DFA 解法
var isNumber = function(s) {
    let state = 0, 
        // 状态的对应 9 种输出值
        finals = [0,0,0,1,0,1,1,0,1],
        // 状态值 空值 +/- 0-9 . e other
        transfer = [[ 0, 1, 6, 2,-1,-1],
                    [-1,-1, 6, 2,-1,-1],
                    [-1,-1, 3,-1,-1,-1],
                    [ 8,-1, 3,-1, 4,-1],
                    [-1, 7, 5,-1,-1,-1],
                    [ 8,-1, 5,-1,-1,-1],
                    [ 8,-1, 6, 3, 4,-1],
                    [-1,-1, 5,-1,-1,-1],
                    [ 8,-1,-1,-1,-1,-1]], 
        // 管理
        make = c => {
            switch(c) {
                case " ": return 0;
                case "+":
                case "-": return 1;
                case ".": return 3;
                case "e": return 4;
                default:
                    let code = c.charCodeAt();
                    if(code >= 48 && code <= 57) {
                        return 2;
                    } else {
                        return 5;
                    }
            }
        };
    for(let i=0; i < s.length; ++i) {
        // 递进状态值 进入不同状态
        state = transfer[state][make(s[i])];
        if (state < 0) return false;
    }
    return finals[state];
};