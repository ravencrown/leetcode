/**
 * 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的
 * 输入：输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4 
*/

function mergeTwoList (l1, l2) {
  const head = new ListNode()
  let cur = head
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }

  cur.next = l1 !== null ? l1 : l2
  return head.next

}

// 二叉树结点的构造函数
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 链表构造函数
function ListNode(val) {
  this.val = val;
  this.next = null;
}


