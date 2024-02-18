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
// var combinationSum2 = function (candidates, target) {
//   let res = [];
//   candidates.sort();

//   function backtrack(cur, index, target) {
//     if (target === 0) {
//       res.push(cur.slice());
//     }
//     if (target <= 0) {
//       return;
//     }

//     let prev = -1;

//     for (let i = index; i < candidates.length; i++) {
//       if (prev === candidates[i]) {
//         continue;
//       }
//       cur.push(candidates[i]);
//       backtrack(cur, i + 1, target - candidates[i]);
//       cur.pop();
//       prev = candidates[i];
//     }
//   }

//   backtrack([], 0, target);

//   return res;
// };

var combinationSum2 = function (candidates, target) {
  candidates.sort();
  return dfs(candidates, target);
};

function dfs(candidates, target, index = 0, current = [], combinations = []) {
  const isBaseCase = target < 0;
  if (isBaseCase) return combinations;

  if (target === 0) {
    combinations.push(current.slice());
    return combinations;
  }

  for (let i = index; i < candidates.length; i++) {
    const isDuplicate = i > index && candidates[i] === candidates[i - 1];
    if (isDuplicate) continue;

    backTrack(candidates, target, i, current, combinations);
  }
  return combinations;
}

function backTrack(candidates, target, index, currentCombo, combinations) {
  currentCombo.push(candidates[index]);
  dfs(
    candidates,
    target - candidates[index],
    index + 1,
    currentCombo,
    combinations
  );
  currentCombo.pop();
}

// @lc code=end
