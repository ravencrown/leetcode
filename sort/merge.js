const merge = (arr) => {
  const len = arr.length

  if (len <= 1) return arr

  const mid = Math.floor(len / 2)
  const leftArr = merge(arr.slice(0,mid))
  const rightArr = merge(arr.slice(mid,len))
  arr = mergeArr(leftArr, rightArr)

  return arr
}

const mergeArr = (arr1, arr2) => {
  let i = 0, j = 0
  const res = []
  const len1 = arr1.length
  const len2 = arr2.length

  while(i < len1 && j < len2) {
    if (arr[i] < arr[j]) {
      res.push(arr[i])
      i++
    } else {
      res.push(arr[j])
      j++
    }
  }

  if (i<len1) {
    return res.concat(arr.slice(i))
  } else {
    return res.concat(arr.slice(j))
  }

}
