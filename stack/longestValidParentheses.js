/**
 * https://leetcode-cn.com/problems/longest-valid-parentheses/
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * 最长有效括号
 * 
  示例 1：
  输入：s = "(()"
  输出：2
  解释：最长有效括号子串是 "()"

  示例 2：
  输入：s = ")()())"
  输出：4
  解释：最长有效括号子串是 "()()"

  示例 3：
  输入：s = ""
  输出：0
   

  提示：
  0 <= s.length <= 3 * 104
  s[i] 为 '(' 或 ')'
 * 
 */

/**
 * @param {string} s
 * @return {number}
 * 思路分析
 * 1. 只包含 '(', ')', if-else 处理
 * 2. 格式正确且连续: 闭合，且连续
 * 3. 起始必须是 '('， 下一位必须是 ')'
 * 4. 入栈的 '(' 看起来需要存个index， {index: 1, value: '('}
 * 5. 需要记录存了几对
 * 6. 需要知道当前匹配的currentIndex
 * 7. ()())))()()()(), 这种断续的
 */

var longestValidParentheses1 = function(s) {
  const stack = []
  const map = new Map([
    [')', '(']
  ])
  let currentIndex = -1
  let pair = 0
  const pairAry = []
  const len = s.length

  for ([index, c] of s.split('').entries()) {
    // 左括号
    if (!map.has(c)) {
      stack.push(index)
      if (currentIndex != index - 1) {
        currentIndex = -1
        pairAry.push(pair)
        pair = 0
      }
    } else if (stack.length) {
      const top = stack.pop()
      if (top === (index-1) && c === ')') {
        currentIndex = index
        pair +=2
        pairAry.push(pair)
      }
    }
  }

  const result = pairAry.sort((b, a) =>{
    return b - a > 0
  }).reverse()[0]
  return result ? result : 0
};

var longestValidParentheses = function(s){
  var arr = [-1];
  var maxLen = 0;
  for(let i=0; i<s.length; i++){
      if(s[i]=='('){
          arr.push(i);
      }else{
          const left = arr.pop();
          if(arr.length > 0){
              maxLen = Math.max(maxLen, i - arr[arr.length-1])
          }else{
              arr.push(i);
          }
      }
  }
  return maxLen;
}

function lengthOfLongestSubstring(s) {
  var right= 0, left = 0, res = 0;
  let map = {}
  while(right < s.length) {
      const c = s[right]
      right++
      if (map[c]) {
          map[c]++
      } else {
          map[c] = 1
      }
      while(map[c] > 1) {
          const d = s[left]
          left ++
           map[d]--
      }
      res = Math.max(res, right - left)
  }
  return res
}


console.log(longestValidParentheses('()((())'))  // 返回居然是6
// console.log(longestValidParentheses(')()())()()()'))
// console.log(longestValidParentheses('('))
// console.log(longestValidParentheses('(()'))
// console.log(longestValidParentheses('()()'))
// console.log(longestValidParentheses('()()'))
// console.log(longestValidParentheses('()())))()()()()'))

console.log(longestValidParentheses('()(())'))  // 返回居然是6
console.log(longestValidParentheses('()((())'))  // 返回居然是6

var longestValidParentheses = function(s) {
  const stack = []
  const map = new Map([
    [')', '(']
  ])
  let currentIndex = -1
  let pair = 0
  const pairAry = []
  const len = s.length
  
  for([index, c] of s.split('').entries()) {
    if (map.hac(c)) {

    }
  }



}










