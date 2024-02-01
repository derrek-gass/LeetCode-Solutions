/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// first initiate a result array that is made of arrays
// then have an inner function for assembling the solution tree of subsets
// base case is when the index is equal to the length of the input array
// then we push the current set into the result array
// then we iterate through the input array and call the inner function recursively
// var subsetsWithDup = function (nums) {
//   nums.sort((a, b) => a - b);

//   return bfs(nums);
// };

// function bfs(nums, subsets = [[]]) {
//   let levels = subsets.length - 1;

//   for (let i = 0; i < nums.length; i++) {
//     const isPrevSame = i > 0 && nums[i] === nums[i - 1];
//     const start = isPrevSame ? levels + 1 : 0;

//     levels = subsets.length - 1;

//     for (let level = start; level < levels + 1; level++) {
//       const newSubset = [...subsets[level], nums[i]];
//       subsets.push(newSubset);
//     }
//   }
//   return subsets;
// }

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  return dfs(nums);
};

function dfs(nums, index = 0, set = [], subset = []) {
  subset.push(set.slice());

  for (let i = index; i < nums.length; i++) {
    const isDuplicate = i > index && nums[i] === nums[i - 1];
    if (isDuplicate) continue;
    // otherwise
    backTrack(nums, i, set, subset);
  }
  return subset;
}

const backTrack = (nums, index, set, subset) => {
  set.push(nums[index]);
  dfs(nums, index + 1, set, subset);
  set.pop();
};
// @lc code=end
