const bubble = (arr) => {
  const len = arr.length
  let flag = false
  
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      }
    }
    if (!flag) return arr
  }
  
  return arr
}

const ary = [1,4,6,2,3,1,8,1]
console.log(bubble(ary))