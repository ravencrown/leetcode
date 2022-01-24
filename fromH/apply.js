Function.prototype.apply = function(context, arr) {
  var context = Object(this) || window
  context.fn = this
  var result

  if (!arr) {
    result = context.fn()
  } else {
    var args = []
    for (var i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result
}

Function.prototype.apply2 = function(obj, arr) {
  obj = obj ? Object(obj) : window
  obj.fn = this

  let result;
  if (!arr) {
    result = obj.fn()
  } else {
    result = obj.fn(...arr)
  }

  delete obj.fn
  return result

}

  // 获取argument对象 类数组对象 不能调用数组方法
  function test1() {
    console.log('获取argument对象 类数组对象 不能调用数组方法', arguments);
  }

  // 获取参数数组  可以调用数组方法
  function test2(...args) {
    console.log('获取参数数组  可以调用数组方法', args);
  }

  // 获取除第一个参数的剩余参数数组
  function test3(first, ...args) {
    console.log('获取argument对象 类数组对象 不能调用数组方法', args);
  }

  // 透传参数
  function test4(first, ...args) {
    fn(...args);
    fn(...arguments);
  }

  function fn() {
    console.log('透传', ...arguments);
  }

  test1(1, 2, 3);
  test2(1, 2, 3);
  test3(1, 2, 3);
  test4(1, 2, 3);