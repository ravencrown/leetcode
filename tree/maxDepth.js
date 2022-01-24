/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  if (!root) return 0
  let res = 1
  const dep = (root, depth) => {
      if (!root) return 
      if (depth > res) res = depth
      root.left && dep(root.left, depth + 1)
      root.right && dep(root.right, depth + 1)
  }
  dep(root, 1)
  return res

};























