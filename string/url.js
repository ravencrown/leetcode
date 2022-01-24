// function getUrlParam(sUrl, sKey) {
//   if (!sUrl) return []
//   let path = sUrl.split('?')[1]
//   debugger
//   path = path.split('#')[0]
//   const kv = path?.split('&') 
//   const obj = {}
//   const map = new Map()

//   kv.forEach(item => {
//       item = item.split('=')
//       if (!map.has(item[0])) {
//           obj[item[0]] = [item[1]]
//       } else {
//           obj[item[0]].push(item[1])
//       }
//       map.set(item[0], item[1])
//   })
  
//   if (!sKey) {
//       return obj
//   } else {
//       return obj[sKey]
//   }
// }

function getUrlParam(sUrl, sKey) {
  let res = {};
  // let params = sUrl.split('?')[1].split('#')[0].split('&');
  let params = surl.split('?')[1].split('#')[0].split('&')
  /* 提取键值对存到对象 */
  params.forEach(v => {
      let [key, val] = v.split('=');
      if (res[key])
          res[key] = [...res[key], val];
      else
          res[key] = val;
  })
  /* sKey为空直接返回对象 */
  if (sKey === undefined) return res;
  else {
      if (res[sKey] === undefined) return '';
      else return res[sKey];
  }
}

getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', '')



function getUrlParams(url) {
    const urlParams = new URL(url)
    const params = urlParams.searchParams
    console.log('params: ', params);
    const obj = {}
    //使用forEach map只能循环数组吗？？？
    params.forEach((item,index)=>obj[index] = item)
    return obj
}



