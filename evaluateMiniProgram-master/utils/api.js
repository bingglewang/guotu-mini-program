//let serverPath = 'https://s.360gujia.com/guotu/'
let serverPath = 'https://s.360gujia.com/guotu/'
 //let serverPath = 'http://127.0.0.1:8082/guotu/'
export function post (url,body) {
  return new Promise((resolve,reject) => {
    uni.request({
      url: serverPath + url,
      data: body,
      method: 'POST',
      header: {
        'content-type':'application/x-www-form-urlencoded'
      },
      success (res) {
        resolve(res.data)
      },
      fail (ret) {
        reject(ret)
      }
    })
  })
}

export function post1 (url,body) {
  return new Promise((resolve,reject) => {
    uni.request({
      url: serverPath + url,
      data: body,
      method: 'POST',
      header: {
        'content-type':'application/json'
      },
      success (res) {
        resolve(res.data)
      },
      fail (ret) {
        reject(ret)
      }
    })
  })
}
