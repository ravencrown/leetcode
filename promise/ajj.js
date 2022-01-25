const allSettled = (promises) => {

  if (!promises.length) return Promise.resolve([])
  promises = promises.map(promise => {
    promise => promise instanceof Promise ? promise : Promise.resolve(item)
  }) 
  let res = [], count = 0

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(value => {
        res[index] = value
        if(++count === promises.length) {
          resolve(res)
        }
      }, err => {
        reject(err)
      })
    });

  })
}





