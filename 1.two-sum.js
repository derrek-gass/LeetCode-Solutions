/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let length = nums.length;
    for (i = 0; i < length; i++) {
      for (j = i+1; j < length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
       }
    }
};
// @lc code=end
// test
