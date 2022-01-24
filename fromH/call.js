Function.prototype.call = function(context) {
  var context = this || window
  context.fn = this
  var args = []
  for(var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result

}

Function.prototype.call2 = function(obj) {
  obj = obj ? Object(obj) : window
  obj.fn = this

  let args = [...arguments].slice(1)
  let result = obj.fn(...args)
  
  delete obj.fn
  return result
}