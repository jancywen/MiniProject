//app.js

import {promisifyAll, promisify} from 'miniprogram-api-promise'
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    // 获取基本信息
    wx.getSystemInfo({
      complete: (res) => {
        this.globalData.screen_height = res.windowHeight
        this.globalData.screen_width = res.windowWidth
      },
    })

    const wxp = {}
    promisifyAll(wx, wxp)
    wxp.getSystemInfo().then(promisify(this.someMethod)).then(console.log).then((res) => {
      console.log("你猜回打印出来啥", res)
    })

  },
  someMethod: function(res) {
    return "someMethod 返回的参数： something"
  },


  
  globalData: {
    userInfo: null,
    screen_width:0,
    screen_height:0,
  }
})