/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    function binarySearchInsert(arr, value) {
        if (!value) return 0
        var low = 0, high = arr.length - 1
        while (low <= high) {
            var middle = Math.floor((low + high) / 2)
            if (arr[middle] == value) {
                return middle
            } else if (arr[middle] < value) {
                low = middle + 1
            } else {
                high = middle - 1
            }
        }
        return low - 1
    }
    for (var i = 0, l = nums2.length; i < l; i++) {
        let index = binarySearchInsert(nums1, nums2[i])
        nums1.splice(index+1, 0, nums2[i])
    }    
    var l1 = nums1.length
    if (l1 % 2 === 0) return (nums1[l1/2-1]+nums1[l1/2])/2
    else return nums1[Math.floor(l1/2)]
};