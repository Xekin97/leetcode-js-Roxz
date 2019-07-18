/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0, l = nums.length; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            if (target - nums[i] === nums[j]) return [i, j]
        }
    }
};

