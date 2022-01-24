/**
 * @param {给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
    示例 1:

    输入: s = "abcabcbb"
    输出: 3 
    解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
    示例 2:

    疑惑：abc,bca,cab, 最终会有这三个

    输入: s = "bbbbb"
    输出: 1
    解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
    示例 3:

    输入: s = "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
    示例 4:

    输入: s = ""
    输出: 0
    
    提示：
    0 <= s.length <= 5 * 104
    s 由英文字母、数字、符号和空格组成
 */


/**
 * @param {string} s
 * @return {number}
 * leetcode链接 https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

var lengthOfLongestSubstring = function(s) {
  let arr = [], max = 0
  for(let i = 0; i < s.length; i++){
      let index = arr.indexOf(s[i])
      if(index !== -1) {
          arr.splice(0, index + 1)
      }
      arr.push(s.charAt(i))
      max = Math.max(arr.length, max)
  }
  return max
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

var lengthOfLongestSubstr = (s) => {
  var arr = [], res = 0;

  for(let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i])
    if (index !== -1) {
      arr.splice(0, index + 1)
    }
    arr.push(s[i])
    res = Math.max(arr.length, res)
  }
  return res
}


// https://juejin.cn/post/6991857797306515470






