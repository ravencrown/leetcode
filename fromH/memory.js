function memoizeFunction(func) {
  const cache = {};
  return function() {
      let key = arguments[0];
      if (cache[key]) {
          return cache[key];
      } else {
          const val = func.apply(null, arguments);
          cache[key] = val;
          return val;
      }
  };
}

const memoize = (func, content) => {
  const cache = new Map()
  content = content || this

  return (...key) => {
    if (!cache.get(key)) {
      cache[key] = func.apply(content, key)
    }
    return cache[key]
  }
}
