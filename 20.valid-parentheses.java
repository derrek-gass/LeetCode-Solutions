/*
 * @lc app=leetcode id=20 lang=java
 *
 * [20] Valid Parentheses
 */

// @lc code=start
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == ')') {
                if (!stack.isEmpty() && stack.peek() == '(') {
                    stack.pop();
                } else
                    return false;
            }
            if (c == ']') {
                if (!stack.isEmpty() && stack.peek() == '[') {
                    stack.pop();
                } else
                    return false;
            }
            if (c == '}') {
                if (!stack.isEmpty() && stack.peek() == '{') {
                    stack.pop();
                } else
                    return false;
            }
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            }
        }
        return !stack.isEmpty() ? false : true;
    }
}
// @lc code=end
