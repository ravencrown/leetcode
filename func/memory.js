const memoize = (func, content) => {
  let cache = Object.create(null)
  content = content || this
  return (...key) => {
    if (!cache[key]) {
      cache[key] = func.apply(content, key)
    }
    return cache[key]
  }
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

