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
 * @return {number[][]}
 */

// 深度优先
 var levelOrderBottom = function(root) {
  const res = []
  const dep = (root, depth) => {
      if (!root) return null
      res[depth] = res[depth] || []
      res[depth].push(root.val)
      dep(root.left, depth +1)
      dep(root.right, depth +1)
  }
  dep(root, 0)
  return res.reverse()
};

// 广度优先
var levelOrderBottom =  function(root) {
  if (!root) return []
  const res = []
  let queue = [root]

  while(queue.length) {
    let cur = [], tmp = []
    while(queue.length) {
        const node = queue.shift()
        cur.push(node.val)
        node.left && tmp.push(node.left)
        node.left && tmp.push(node.right)
    }
    res.push(cur)
    queue = tmp
  }
  return res.reverse()
}















