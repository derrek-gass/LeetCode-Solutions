/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let visited = {};

  const dfs = (node) => {
    if (!node) return null;
    if (visited[node.val] !== undefined) return visited[node.val]; // it exists and we've seen it

    const newNode = new Node(node.val); // it doesn't exist so create a new node
    visited[node.val] = newNode; // add it to the map

    for (let neighbor of node.neighbors) {
      newNode.neighbors.push(dfs(neighbor)); // push the neighbors into the node
    }
    return newNode;
  };

  return dfs(node);
};
// @lc code=end
