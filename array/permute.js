const permute = (nums) => { 
  const res = []
  
  const recursion = (path = []) => {
    if (path.length === nums.length) {
      res.push(path)
      return 
    }

    nums.forEach(n => {
      if (path.includes(n))return
      recursion(path.concat(n))
    }) 
  }

  recursion()
  return res
}






console.log(permute([1,2,3]))









