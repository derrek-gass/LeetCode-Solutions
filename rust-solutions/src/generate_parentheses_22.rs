/*
 * @lc app=leetcode id=22 lang=rust
 *
 * [22] Generate Parentheses
 */

// @lc code=start
// explain the following code
impl Solution {
    pub fn generate_parenthesis(n: i32) -> Vec<String> {
        let mut result: Vec<String> = Vec::new();
        
        fn backtrack(result: &mut Vec<String>, s: String, open: i32, close: i32, max: i32) {
            if s.len() == (max * 2) as usize {
                result.push(s);
                return;
            }

            if open < max {
                backtrack(result, s.clone() + "(", open + 1, close, max);
            }
            if close < open {
                backtrack(result, s.clone() + ")", open, close + 1, max);
            }
        }

        backtrack(&mut result, "".to_string(), 0, 0, n);
        result
    }
}

// fn main() {
//     let n = 3;
//     let result = generate_parenthesis(n);
//     println!("{:?}", result);
// }
// @lc code=end

