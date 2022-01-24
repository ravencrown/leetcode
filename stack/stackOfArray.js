/**
 * 1. 用数组实现一个顺序栈
 * 2. 用链表实现一个链式栈
 * 3. 编程模拟实现一个浏览器的前进、后退功能
 */

/**
 * 栈的方法，pop, push, size, empty
 */

class Stack {
  constructor() {
    this.list = []
  }

  push(item) {
    this.list.push(item)
  }

  pop() {
    return this.list.pop()
  }

  peek() {
    return this.list[this.list.length - 1]
  }

  size() {
    return this.list.length
  }

  isEmpty() {
    return this.list.length === 0
  }

  clear() {
    this.list = []
  }

}





