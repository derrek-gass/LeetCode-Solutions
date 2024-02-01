/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  return dfs(candidates, target);
};

// dfs function needs base case first, then
function dfs(candidates, target, index = 0, set = [[]]) {}
// @lc code=end
