/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let res = '', s1 = '', s2 = ''

  const palindrome = (s, l, r) => {
      while(l >= 0 && r < s.length && s[l] === s[r]) {
          l--;
          r++;
      }
      return s.substring(l+1, r)
  }

  for(let i = 0; i < s.length; i++) {
      s1 = palindrome(s, i, i)
      s2 = palindrome(s, i, i + 1)
      res = res.length > s1.length ? res : s1
      res = res.length > s2.length ? res : s2
  }

  return res

};