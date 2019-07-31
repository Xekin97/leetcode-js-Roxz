/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target > nums[nums.length-1]) return nums.length
    if (target == nums[nums.length-1]) return nums.length - 1
    if (target < nums[0]) return 0
    var idx = 0
    nums.some((num, i) => {
        if (target >= num && target < nums[i + 1]) {
            idx = target == num ? i : i + 1
            return true
        }
    })
    return idx
};

