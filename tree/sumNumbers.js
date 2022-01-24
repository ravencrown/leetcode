/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
  * 
  * @param root TreeNode类 
  * @return int整型
  */
 function sumNumbers( root ) {
  // write code here
  let res = 0
  if (!root) return 0
  
  const traverse = (root, curSum) => {
      if (!root) return
      curSum += root.val
      if (!root.left && !root.right) {
          res += parseInt(curSum)
      }
      traverse(root.left, curSum)
      traverse(root.right, curSum)
  }
  traverse(root, '')
  
  return res
}

function sumNumbers( root ) {
  if (!root) return 0
  let res = 0
  
  const dfs = (root, sum) => {
      if (!root) return
      sum = sum * 10 + root.val
      if (!root.left && !root.right) res += sum
      dfs(root.left, sum)
      dfs(root.right, sum)
  }

  dfs(root, 0)
  return res
}

























