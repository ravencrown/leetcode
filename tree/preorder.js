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
 * @return {number[]}
 */

// 递归方式
var preorderTraversal = function(root) {
  const res = []
  
  var traverse = (root) => {
      if (!root) return null
      res.push(root.val)
      root.left && traverse(root.left)
      root.right && traverse(root.right)
  }

  traverse(root)
  return res
  
};

// 二叉树前序遍历的非递归实现 -- 迭代方式
function preorderTraverse(root) {
  const stack = [], res = []

  // 当根节点不为空的时候，将根节点入栈
  root && stack.push(root)

  while(stack.length) {

    // 第一步的时候，先访问的是根节点
    const cur = stack.pop()
    res.push(cur.val) 

    // 我们先打印左子树，然后右子树
    // 所以先加入栈的是右子树，然后左子树
    cur.right && stack.push(cur.right) 
    cur.left && stack.push(cur.left) 
  }

  return res
}

