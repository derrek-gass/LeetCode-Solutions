/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let result = false;
  function dfs(row, col, i) {
    if (!result) {
      if (row < 0 || col < 0 || row >= board.length || col >= board[0].length)
        return;
      if (board[row][col] !== word[i]) return; // wrong letter
      if (i == word.length - 1) {
        // have a match since we reached the end of the word
        result = true;
        return;
      }
      board[row][col] = null; // mark as visited
      // try all 4 directions looking for next letter
      dfs(row + 1, col, i + 1);
      dfs(row - 1, col, i + 1);
      dfs(row, col + 1, i + 1);
      dfs(row, col - 1, i + 1);
      board[row][col] = word[i]; // reset the board;
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        dfs(row, col, 0);
        if (result) return result;
      }
    }
  }

  return result;
};
// @lc code=end
