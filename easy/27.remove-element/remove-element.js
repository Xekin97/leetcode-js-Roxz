/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var set = new Set()
    var l = 0
    var len = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            if (!set.has(nums[i])) {
                nums[l] = nums[i]
                l++
            }
        } else len --
    }
    return len
};

