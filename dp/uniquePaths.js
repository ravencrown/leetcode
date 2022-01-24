//https://leetcode-cn.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  const dp = Array.from({length: m}, function() {
      return Array(n).fill(0)
  })

  for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          if (i == 0 || j == 0) {
              dp[i][j] = 1
          } else {
              dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
          }
      }
  }
  
  return dp[m-1][n-1]

};