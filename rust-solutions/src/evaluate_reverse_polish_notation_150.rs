use std::collections::VecDeque;
/*
 * @lc app=leetcode id=150 lang=rust
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let mut stack: Vec<i32> = Vec::new();

        for i in tokens {
            let mut val = i.as_str();

            if ["+", "-", "*", "/"].contains(&val) {
                let mut x = stack.pop().unwrap();
                let mut y = stack.pop().unwrap();

                match val {
                    "+" => stack.push(x + y),
                    "-" => stack.push(y - x),
                    "*" => stack.push(x * y),
                    "/" => stack.push(y / x),
                    _ => continue,
                }
            } else {
                stack.push(i.parse::<i32>().unwrap());
            }
        }

        return stack.pop().unwrap();
    }
}
// fn main() {
//     assert_eq!(eval_rpn(vec!["2", "1", "+", "3", "*"].iter().map(|s| s.to_string()).collect()), 9, "Wrong result");
//     assert_eq!(eval_rpn(vec!["2", "1", "+", "3", "*"].iter().map(|s| s.to_string()).collect()), 8, "Wrong result");
// }

// @lc code=end
