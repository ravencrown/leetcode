/**
 * 将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
 * add(1,2,3,4)  =>  add(1)(2)(3)(4)
 */

 const curry = (fn, argArr = []) => (...args) => (
  (arg) => args.length === 0 ? fn(...arg) : curry(fn, arg)
)([...argArr, ...args]);


const curry = (fn, argArr = []) => (...args) => (
  [...argArr, ...args].length === 0 ? fn(...arg) : curry(fn, arg)
)

// curryTest = curry(test)
function curry(fn, argArr = []) {
  const step_1 = function(...args) {
    const exec = function(arg) {
      if (arg.length === fn.length) {
        return fn.apply(null, arg);
      }
      return curry(fn, arg);
    };
    const step_2 = (exec)([...argArr, ...args]);
    return step_2;
  }

  return step_1;
}


(function(arg) {

  if (arg.length === fn.length) {
    return fn.apply(null, arg);
  }

  return curry(fn, arg);
})([...[], 1])


const curry = (fn, argArr = []) => (...args) => (
  (arg) => arg.length === fn.length ? fn(...arg) : curry(fn, arg)
)([...argArr, ...args]);


