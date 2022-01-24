function traverse (node) {
  if (node == null) return;
  /* 前序遍历代码位置 */
  traverse(root.left);
  /* 中序遍历代码位置 */
  traverse(root.right);
  /* 后序遍历代码位置 */
}

/**
  function traverse(root) {
    if (root === null) return
    while (...) {
      if (...) {
        // 前序遍历代码位置
      }
      if (...) {
        // 中序遍历代码位置 
      }
      if (...) {
        // 后序遍历代码位置 
      }
  }
*/


// 二叉树前序遍历的非递归实现
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


// 二叉树的中序遍历的非递归实现
function inorderTraverse(root) {
  const stack = [], res = []
  let node = root
  
  while(node && stack.length) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      res.push(node.val)
      node = node.right
    }
  }

  return res
}


// 二叉树的后序遍历的非递归实现
function postOrderTraverse1(root) {
  const stack = [], res = []

  while (root && stack.length) {
    if (root.left) {
      stack.push(root)
      root = root.left
    } else if (root.right) {
      stack.push(root)
      root = root.right 
    } else {
      res.push(root.val)
      root = stack.pop()
      if (root && root.left) root.left = null
      else if (root && root.right) root.right = null
    }
  }

  return res
}


// 二叉树的后序遍历的非递归实现
function postOrderTraverse1(root) {
  const state = [], res = []
  root && stack.push(root)

  while(stack.length) {
    let cur = stack.pop()
    res.push(cur.val)

    cur.left && stack.push(cur.left)
    cur.right && stack.push(cur.right)
  }

  return res.reverse()
}


















