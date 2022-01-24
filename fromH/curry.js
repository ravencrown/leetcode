function curry(fn, currArgs) {
  return function() {
    let args = [].slice.call(arguments)

    if (currArgs !== undefined) {
      args = args.concat(currArgs)
    }

    if (args.length < fn.length) {
      return curry(fn, args)
    }

    return fn.apply(null, args)
  }
}

function curry(fn) {
  return function currify() {
    const args = Array.prototype.slice.call(arguments);
    return args.length >= fn.length ? fn.apply(null, args) : currify.bind(null, ...args);
  }
}

function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  } else {
    return (...args2) => currying(fn, ...args, ...args2);
  }
}


const curry = (fn, argArr = []) => (...args) => (
  (arg) => args.length === 0 ? fn(...arg) : curry(fn, arg)
)([...argArr, ...args]);