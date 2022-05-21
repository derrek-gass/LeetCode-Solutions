/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString();

    while (y.length > 1 && (y[0] === y[y.length - 1])) {
        y = y.slice(1, y.length - 1);
    }

    return (y.length > 1) ? false : true;
};
// @lc code=end

