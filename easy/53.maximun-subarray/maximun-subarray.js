/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums.length) return -2147483648
    else if (nums.length === 1) return nums[0]
    var max = nums[0], // 上一次的 max 值
        ret = nums[0]  // 最大的 max 值
    for (var i = 1; i < nums.length; i++) {
        max = max > 0 ? max + nums[i] : nums[i]
        ret = Math.max(max, ret)
    }
    return ret
};

