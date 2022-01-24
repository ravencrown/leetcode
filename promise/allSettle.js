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

