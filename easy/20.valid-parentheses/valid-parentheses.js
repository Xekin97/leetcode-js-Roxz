/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // ( [ ) ]
    // { ( ) } 
    
    var StackArr = []
    for (var i = 0, l = s.length; i < l; i++) {
        switch (s[i]) {
            case '(':
                StackArr.push(')')
                break;
            case '[':
                StackArr.push(']')
                break;
            case '{':
                StackArr.push('}')
                break;
            default: 
                if (StackArr.length == 0 || StackArr.pop() !== s[i]) return false
        }
    }
    return StackArr.length == 0
};

