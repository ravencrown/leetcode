const allSettled = (promises) => {

  if (!promises.length) return Promise.resolve([])

  promises = promises.map(promise => {
    promise => promise instanceof Promise ? promise : Promise.resolve(item)
  }) 

  let res = [], len = promises.length

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(value => {
        res[index] = {
          status: 'fulfilled',
          value
        }
        len-- 
        if (len === 0) {
          resolve(res)
        }
      }, err => {
        res[index] = {
          status: 'rejected',
          err
        }
        len-- 
        if (len === 0) {
          resolve(res)
        }
      })
    });

  })
}

MyPromise.allSettled = function(values) {
  let promises = [].slice.call(values)
  return new MyPromise((resolve, reject) => {
    let result = [], count = 0
    promises.forEach(promise => {
      MyPromise.resolve(promise).then(value=>{
        result.push({status: FULFILLED, value})
      }).catch(err=>{
        result.push({status: REJECTED, value: err})
      }).finally(()=>{
        if(++count === promise.length) {
          resolve(result)
        }
      })
    })
  })
}