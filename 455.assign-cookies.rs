// each child gets 1 cooke
// each child i has g[i] which is minimum cookie size for i
// each cookie j has size s[j]
// if s[j] > g[j] then cookie j can go to child i
// maximize the number of satisfied children i and return this


// brute force -> greedy: 
// 
impl Solution {
    pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
        let mut max: i32 = 0;
        let mut uncookied_children: Vec<i32> = g.to_vec();
        let mut cookies: Vec<i32> = s.to_vec();
        uncookied_children.sort();
        cookies.sort();
        for i in 0..s.len() {
            // println!("{} {}", uncookied_children.len(), i);
            if (!uncookied_children.is_empty() && uncookied_children[0] <= cookies[i]) {
                uncookied_children.remove(0);
                max += 1;
            }
        }
        

        return max;
    }
}