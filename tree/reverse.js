

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
 * @return {TreeNode}
 */

var invertTree = function(root) {
  if (root === null) return null
  let tmpNode = root.left
  root.left = root.right
  root.right = tmpNode
  
  invertTree(root.left)
  invertTree(root.right)

  return root
};

var invertTree = function(root) {
  if (root === null) return null
  // let tmpNode = root.left
  // root.left = root.right
  // root.right = tmpNode

  [root.left, root.right] = [root.right, root.left]
  
  invertTree(root.left)
  invertTree(root.right)

  return root
};