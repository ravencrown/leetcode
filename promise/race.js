Promise.race = function(promises) {
  promises = promises.map(promise => {
    promise => promise instanceof Promise ? promise : Promise.resolve(item)
  })

  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
        promise.then(val => {
            resolve(val)
          }, err => {
            reject(err)
          })
      })
  })
}

Promise.race = function(promises) {
  return new Promise(function(resolve, reject) {
      if (!promises || typeof promises[Symbol.iterator] !== 'function') {
          reject(TypeError());
      }
      for (let i = 0; i < promises.length; i++) {
          Promise.resolve(promises[i]).then(function(data) {
              resolve(data);
          }, function(error) {
              reject(error);
          });
      }
  });
}
