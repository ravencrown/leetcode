// 中序遍历 - 递归
var inorderTraversal = (root) => {
  let result = []
  var inorderTraversal = (node) => {
      if(node) {
          // 先遍历左子树
          inorderTraversal(node.left)
         // 再根节点
          result.push(node.val)
          // 最后遍历右子树
          inorderTraversal(node.right)
      }
  }
  inorderTraversal(root)
  return result
};

// 非递归
const inorderTraversal = (root) => {
  const stack = [], res = []
  let node = root
  while(node || stack.length) {
      while(node) {
          stack.push(node)
          node = node.left
      }

      node = stack.pop()
      res.push(node.val)
      node = node.right
  }
  return res
}















