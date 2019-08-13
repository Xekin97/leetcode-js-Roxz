/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var flag = m + n
    for (var i = 0; i < nums1.length; i++) {
        if (i === m) {
            nums1[i] = nums2[i - flag + n];
            m <= flag && m++;
        }
        if (i > flag) return
    }
    nums1.sort((a, b) => a-b)
};

