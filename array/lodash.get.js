const get = (obj, path) => {
  const path = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  const result = obj
  for (const p of path) {
    result = Object(result)[p]
    if (result === undefined) return undefined
  }
  return result
}


