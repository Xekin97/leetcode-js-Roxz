/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var flag = nums.length - 1
    for (var i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= flag) flag = i
    }
    return flag === 0
};

// [3, 2, 1, 0, 4]
