/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let numIslands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        numIslands++;
        explore(grid, row, col);
      }
    }
  }

  function explore(grid, row, col) {
    // check if we went out of bounds
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[row].length ||
      grid[row][col] == '0'
    ) {
      return;
    }
    // otherwise we continue to explore
    grid[row][col] = '0';

    explore(grid, row - 1, col);
    explore(grid, row + 1, col);
    explore(grid, row, col - 1);
    explore(grid, row, col + 1);
  }

  return numIslands;
};
// @lc code=end
