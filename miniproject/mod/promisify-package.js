


function request(options={}) {
  return new Promise((resolve, reject)=>{
    wx.request(Object.assign(
      {},
      options,
      {
        success(res) {
          if (res.statusCode === 200 && res.data.Code === 0) {
              resolve(res.data.Data)
          }else {
            reject({Message:res.data.Message})
          }
        },
        fail(error) {
          reject({Message:'网络请求失败'})
        },
      }
    ))
  })
}


module.exports = {
  request: request
}