// 防抖 （debounce） ：多次触发，只在最后一次触发时，执行目标函数。


// first: 时间戳
function debounce3(fn, wait) {
  
  var context, args;
  var previous = 0
  
  return function() {
    var args = arguments
    context = this
    var now = new Date()
    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}

// second: 定时器
function debounce(fn ,wait) {
  var timeout

  return function(fn, wait) {
    var context =  this
    var args = arguments
    if (timeout) {
      timeout = setTimeout(function() {
        timeout = null
        fn.apply(context, args)
      }, wait)
    }
  }
}

// third
function debounce2(fn, delay) {
  let timer = null
  let startTime = Date.now()

  return function() {
    let curTime = Date.now()
    let remaining = dalay - (curTime - startTime)
    const context = this
    const args = arguments

    clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(context, args)
      startTime = Date.now()
    } else {
      timer = setTimeout(func, remaining)
    }
  }
}

function debounce4(fn, wait, immediate) {
  var timeout

  return function() {
    var context = this;
    var args = arguments

    if (timeout) clearTimeout(timeout)
    
    if (immediate) {
      var callNow = !timeout

      timeout = setTimeout(function() {
        timeout = null
      }, wait)

      if (callNow) fn.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        fn.apply(context, args)
      }, wait)
    }
  }

}










