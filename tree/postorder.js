// 后序遍历 - 递归
var postorderTraversal = function(root) {
  let result = []
  var postorderTraversalNode = (node) => {
      if(node) {
          // 先遍历左子树
          postorderTraversalNode(node.left)
          // 再遍历右子树
          postorderTraversalNode(node.right)
          // 最后根节点
          result.push(node.val)
      }
  }
  postorderTraversalNode(root)
  return result
};

// 非递归
const postorderTraverse = (root) => {
  const stack = [], res = []
  if (root) stack.push(root)

  while(stack.length) {
    const node = stack.pop()
    res.unshift(node.val)

    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }
  return res
}

var postorderTraversal = function(root) {
  if(!root) return []
  let res = []
  let stack = [root]
  while(stack.length) {
      let cur = stack.pop()
      res.push(cur.val)
      cur.left && stack.push(cur.left)
      cur.right && stack.push(cur.right)
  }
  return res.reverse()
}








