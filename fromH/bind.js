Function.prototype.bind = Function.prototype.bind || function (context, ...args1) {
  if (this === Function.prototype) {
    throw new TypeError('Error')
  }

  const _this = this
  return function F(...args2) {
    // 判断是否用于构造函数
    if (this instanceof F) {
      return new _this(...args1, ...args2)
    }
    return _this.apply(context, args1.concat(args2))
  }

}


// https://www.cnblogs.com/echolun/p/12178655.html
Function.prototype.bind_ = function (obj) {
  if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  };
  var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;
  //创建中介函数
  var fn_ = function () {};
  var bound = function () {
      var params = Array.prototype.slice.call(arguments);
      //通过constructor判断调用方式，为true this指向实例，否则为obj
      fn.apply(this.constructor === fn ? this : obj, args.concat(params));
      console.log(this);
  };
  fn_.prototype = fn.prototype;
  bound.prototype = new fn_();
  return bound;
};