// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    store: {
      avatar:"",
      StoreName:"同仁堂大药房",
      Status:"init"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#007aff'
    })
    wx.setNavigationBarTitle({
      title: '同仁堂大药房',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  storeManage: function (envent) {
    console.log("storeMange")
    wx.navigateTo({
      url: '/pages/store/manage/manage',
    })
    
  },
  certStore: function() {
    wx.navigateTo({
      url: '/pages/store/cert/cert',
    })
  }
})