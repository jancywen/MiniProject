
/**
 * 网络请求
 * @param {*} options 入参参考 wx.request
 */
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
/**
 * 选择图片
 * @param {*} options 
 */
function chooseImage(options = {}) {
  return new Promise((resolve, reject) => {
    wx.chooseImage(Object.assign(
      {}, 
      options,
      {
        success(res){
          resolve(res.tempFilePaths)
        },
        fail(error) {
          reject({
            title: '上传失败',
            icon:'none'
          })
        }
      }
    ))
  })
}
/**
 * 上传文件
 * @param {*} options 
 */
function uploadFile(options={}) {
  console.log('uploadFile \n', options)
  return new Promise((resolve, reject)=> {
    wx.uploadFile(Object.assign(
      {},
      options,
      {
        success(res) {
          let data = JSON.parse(res.data)
          console.log('data \n', data)
          if (data.Code === 0 ){
            resolve(data.Data.Url)
          }else{
            reject({
              title: data.Data.Message,
            })
          }
        },
        fail(){
          reject({
            title: '上传失败',
            icon:'none'
          })
        }
      }
    ))
  })
}
/**
 * 上传图片
 * @param {} count 
 */
function uploadImage(count) {
  return this.chooseImage({
      count: count,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
  }).then((list) => {
    console.log('选中的图片path', list)
    return Promise.all(list.map(url => {
      return this.uploadFile({
        filePath: url,
        name: 'Upload',
        url: 'https://store.gmtshenzhen.cn/api/app/v1/store/upload/upload_pic'})
    }))
  })
}

module.exports = {
  request: request,
  chooseImage: chooseImage,
  uploadFile: uploadFile,
  uploadImage: uploadImage,
}