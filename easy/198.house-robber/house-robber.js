/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums.length) return 0
    var prePrice = 0
    var curPrice = 0
    for (var i = 0,l = nums.length; i < l; i++) {
        var temp = curPrice
        curPrice = Math.max(prePrice + nums[i], curPrice)
        prePrice = temp
    }
    return curPrice
};

// optimzed hash
var rob = function(nums) {
	var hash = {};
	hash[nums.length] = 0;
	hash[nums.length-1] = nums[nums.length-1];
	for (var i=nums.length-2; i>=0; i--) {
		hash[i] = Math.max(nums[i] + hash[i + 2], hash[i+1]);
	}
	return hash[0];
};