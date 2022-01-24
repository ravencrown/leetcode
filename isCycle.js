const isCyclic = (obj) => {
  let stackSet = new Set()
  let detected = false

  const detect = (obj) => {
    if (obj && typeof obj != 'object') {
      return
    }

    if (stackSet.has(obj)) {
      return detected = true
    }

    stackSet.add(obj)

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        detect(obj[key])
      }
    }

    stackSet.delete(obj)
  }

  detect(obj)

  return detected
}


function isCycle(obj) {

  let hasCycle = false
  const map = new Map()

  const loop = (obj) => {
    const keys = Object.keys(obj)

    keys.forEach(key => {
      const value = obj[key]
      if (value && typeof value == 'object') {
        if (map.has(value)) {
          hasCycle = true
          return 
        } else {
          map.set(value)
          loop(value)
        }
      }
    })
  }

  loop(obj)
  return hasCycle
}