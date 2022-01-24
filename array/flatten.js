const flatten = (arr) => {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

const flattem = (arr) => {
  let result = []
  let len = arr.length
  for (let i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }

  return result
}




