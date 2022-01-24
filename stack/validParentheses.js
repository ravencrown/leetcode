/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。

  1 <= s.length <= 10^4
  string 仅由括号 '()[]{}' 组成
 */

/**
 * 解题步骤
 * 前提：审题，给定一个只包含括号的字符串，所以不是左括号就是右括号
 * 0. 构建一个map，左括号对应右括号
 *  a. 如何构建?
 * 1. 遇到左边括号入栈，遇到右边括号出栈
 * 2. 最后栈空了就匹配
 * 3. 因为是闭合的，所以只要遇到一个右括号，栈顶就必须是对应的左括号
 *  a. 如果栈顶元素跟遍历到的右括号不是一对，返回false
 *  b. 如果遍历完了，stack不为空，返回false
 *  c. 边界问题，空字符串怎么处理
 *  d. 最后一步，考虑性能，复杂度
 */

function isValid(str) {
  const stack = []
  const left = ['(', '{', '[']
  const right = [')', '}', ']']
  const map = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  // let flag = true

  for(let i = 0; i < str.length; i++) {
    if (left.includes(str[i])) {
      stack.push(str[i])
    }

    if (right.includes(str[i])) {
      const top = stack.pop()
      if (map[top] !== str[i] || top === undefined) {
        flag = false
      }
    }
  }

  if (stack.length) {
    flag = false
  }
  return flag
}

const isValid2 = (s) => {
  const stack = []
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (c of s) {
    if (c in map) {
      stack.push(c)
    } else if (!stack.length || map[stack.pop()] !== c){
      return false
    }
  }

  return !stack.length
}

const isValid3 = (s) => {
  const stack = []
  const map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])

  for (const c of s) {
    if (!map.has(c)) {
      stack.push(c)
    } else if (!stack.length || map.get(c) !== stack.pop()){
      return false
    }
  }

  return !stack.length
}

/**
 * 示例 1：
  输入：s = "()"
  输出：true
  
  示例 2：
  输入：s = "()[]{}"
  输出：true

  示例 3：
  输入：s = "(]"
  输出：false

  示例 4：
  输入：s = "([)]"
  输出：false

  示例 5：
  输入：s = "{[]}"
  输出：true

  示例 6：
  输入：s = "(){}}{"
  输出：false

  示例 7：
  输入：s = "({{{{}}}))"
  输出：false

  示例 8：
  输入：s = "]"
  输出：false

  示例 9：
  输入：s = "))"
  输出：false
 */

// console.log(isValid2('()'))
// console.log(isValid2('()[]{}'))
// console.log(isValid2('(]'))
// console.log(isValid2('([)]'))
// console.log(isValid2('{[]}'))
// console.log(isValid2('(){}}{'))
// console.log(isValid2('({{{{}}}))'))
// console.log(isValid2(']'))
// console.log(isValid2('))'))


// ('({{{{}}}))'))
const testFn = (str) => {
  const stack = []
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])

  for(const p of str) {
    if (!map.has(p)) {
      stack.push(p)
      // 只要stack没被清空 + map有一项不匹配， return false
    } else if (!stack.length || map.get(p) !== stack.pop()) {
      return false
    }
  }

  return !stack.length
}

console.log(testFn('()[]{}'))
console.log(testFn('))'))