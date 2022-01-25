function MyPromise (fn) {
  const that = this;              // 代码可能异步执行，用于正确找到this
  that.value = null;              // 用于保存resolve、reject传入的值
  that.state = PENDING;
  that.resolvedCallbacks = [];    // 保存then中的回调，promise执行完后state的状态可能还是PENDING，
  that.rejectedCallbacks = [];    // 因此要把回调函数保存起来，等待state状态改变时执行
  
  // 实现resolve
  function resolve (value) {
      if (value instanceof MyPromise) {
          return value.then(resolve, reject);
      }
      setTimeout(() => {
          if (that.state === PENDING) {   // 只有PENDING状态才可以改变状态
              that.state = RESOLVED;
              that.value = value;
              that.resolvedCallbacks.forEach(cb => cb(that.value));   // 执行回调
          }
      }, 0)
  }
  
  // 实现reject
  function reject (value) {
      setTimeout(() => {
          if (that.state === PENDING) {
              that.state = REJECTED;
              that.value = value;
              that.rejectedCallbacks.forEach(cb => cb(that.value));
          }
      }, 0)
  }
  
  // 执行函数fn
  try {
      fn(resolve, reject);
  } catch (e) {
      reject(e);
  }
}


MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this;
  // 参数为可选参数，首先判断两个参数是否为函数，如果不是函数，创建一个函数赋值给对应参数
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : v => { throw v };
  // 如果状态还是PENDING时，往回调函数中push函数，否则执行函数
  if (that.state === PENDING) {
      that.resolvedCallbacks.push(onFulfilled);
      that.rejectedCallbacks.push(onRejected);
  }
  if (that.state === RESOLVED) {
      onFulfilled(that.value);
  }
  if (that.state === REJECTED) {
      onRejected(that.value);
  }
}
























