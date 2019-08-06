/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
// 通过移位运算符 二进制最快
var mySqrt1 = function(x) {
    let i = 0, j = Math.floor(x >>> 1) + 1
    
    while (i < j) {
        let mid = Math.floor((i + j) >>> 1)
        if (mid * mid > x ) {
            j = mid
        } else if (mid * mid < x) {
            i = mid + 1
        } else {
            return mid
        }
    }
    return i - 1 === 0 ? 1 : i - 1
};
// 通过数学方法 最垃圾
// 方法
// 1方 = 1
// 2方 = 1 + 3
// 3方 = 1 + 3 + 5
// n方 = 1 + 3 + 5 + 7 + 9 + ... + 2n - 1
var mySqrt2 = function(x) {
    var sum = 0
	var idx = 1
	var state = true
	while(state) {
		sum += 2*idx-1
		if (sum > x) state = false
		else idx ++
	} 
	return idx - 1
};
// 通过API 一般般
var mySqrt3 = function(x) {
    return ~~(Math.sqrt(x))
};

