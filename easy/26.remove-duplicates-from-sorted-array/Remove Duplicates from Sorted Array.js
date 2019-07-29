/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var set = new Set()
    var l = 0
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            nums[l] = nums[i]
            l ++
        }
        set.add(nums[i])        
    }
    
    return l
};

