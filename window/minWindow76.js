/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */


 var minWindow = function(s, t) {
  let left = 0, right = 0, valid = 0, start = 0, len = Infinity
  const window = {}, needs = {}
  
  for(const c of t) {
      if (!needs[c]) {
          needs[c] = 1
      } else {
          needs[c] ++
      }
  }

  while(right < s.length) {
      const c = s[right]
      right++
      if (needs[c]) {
          window[c] ? window[c]++  : window[c] = 1
          if (needs[c] === window[c]) {
              valid++
          }
      }

      while (valid === Object.keys(needs).length) {
          if (right - left < len) {
              start = left
              len = right - left
          }

          const d = s[left]
          left++
          
          if (needs[d]) {
              if (needs[d] === window[d]) {
                  valid--
              }
              window[d]--
          }


      }
  }

  return len === Infinity ? '' : s.substr(start, len)


};


/** ---------------------------------- */
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  if (t.length > s.length) return ''
  let map = new Map()
  let right = 0, left = 0, valid = 0, start = 0, gap = 10e5;
  const arr = []
  const need = new Map()
  const window = new Map()
  
  for(const i of t) {
      if (need.has(i)) {
          need.set(i, need.get(i) + 1)
      } else {
          need.set(i, 1)
      }
  }

  while(right < s.length) {
      const c = s[right]
      right++
      if (need.has(c)) {
          if (window.has(c)) {
              window.set(c, window.get(c)+1)
          } else {
              window.set(c, 1)
          }
          if (window.get(c) === need.get(c)) {
              valid++
          }
      }

      while(valid === need.size) {
          if (right - left < gap) {
              start = left
              gap = right - left
              
          }
          const d = s[left]
          left++
          if (need.get(d)) {
              if (window.get(d) === need.get(d)) valid--
              window.set(d, window.get(d) - 1)
          }
      }
  }
  
  return gap === 10e5 ? '' : s.substr(start, gap)
};



















