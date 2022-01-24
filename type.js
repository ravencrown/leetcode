function type(val) {
  let type = typeof val
  if (type === 'object') {
    let typeStr = Object.prototype.toString.call(val)
    typeStr = typeStr.split(' ')[1]
    type = type.substring(0, typeStr.length - 1)
  }
  return type
}

















