/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    var map = {};
    for (var i = 0, l = nums.length; i < l; i++) {
        map[nums[i]] = map[nums[i]] || 0;
        map[nums[i]] += 1;
        if (map[nums[i]] >= nums.length / 2) return nums[i];
      }
    return null;
}; 