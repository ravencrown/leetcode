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

// 平行光照射二叉树
var rightSideView = function(root) {
  let res = []
  var dep = function (node, depth){
      if(!node) return
      res[depth] = res[depth]||[]
      res[depth].push(node.val)
      dep(node.left, depth + 1)
      dep(node.right, depth + 1)
  }
  
  dep(root, 0)
  
  return res.map(item => item[item.length - 1])
};


var rightSideView = function(root) {
  let res = []
  if(!root) return res
  var dfs = function (node, depth){
      if (!node) return 
      res[depth] = res[depth]||[]
      res[depth].push(node.val)
      dfs(node.right, depth + 1)
      dfs(node.left, depth + 1)
  }
  dfs(root, 0)
  return res.map(item => item[0])
};

var rightSideView = function(root) {
  let res = []
  if(!root) return res
  var dfs = function (node, depth){
      if (!node) return 
      if (res.length === depth) res.push(node.val)
      // res[depth] = res[depth]||[]
      // res[depth].push(node.val)
      dfs(node.right, depth + 1)
      dfs(node.left, depth + 1)
  }
  dfs(root, 0)
  return res
  // return res.map(item => item[0])
};


// https://leetcode-cn.com/problems/binary-tree-right-side-view/submissions/