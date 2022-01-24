const deepClone = (obj) => {
  if (typeof obj !== 'object') return obj
  const newObj = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }

  return newObj
}

const deepCopy2 = (obj, map = new Map()) => {
  if (typeof obj !== 'object') return obj
  const newObj = Array.isArray(obj) ? [] : {}

  if (map.get(obj)) return obj
  map.set(obj, newObj)

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy2(obj[key], map) : obj[key]
    }
  }

  return newObj
}

var a = {}
var b = {a:a}
a.b = b;
console.log(deepCopy2(a))

// 如何处理循环引用
// https://segmentfault.com/a/1190000020255831



