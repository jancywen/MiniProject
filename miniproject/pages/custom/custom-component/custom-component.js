// pages/custom/custom-component/custom-component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareMaskData: [
      {
        leftImg:'/images/add_icon.png',
        content:'转发给好友',
        rightImg:'/images/drug_icon.png',
        openType:'share',
        hideLeftImage: false,
        hideRightImage: true,
      },
      {
        leftImg:'/images/add_icon.png',
        content:'转发给好友',
        rightImg:'/images/drug_icon.png',
        openType:'share',
        hideLeftImage: false,
        hideRightImage: true,
      }
    ]
  },

  share: function() {
    this.shareactionsheet=this.selectComponent('#shareactionsheet');
    this.shareactionsheet.show();
  },
  clickActionSheet: function(e) {
    console.log('e.detail: ' + e.detail); 
  },
  alert: function() {
    this.actionalert = this.selectComponent('#alert');
    this.actionalert.show()
  },
  onAlertEvent: function(e) {
    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '自定义组件',
    })
    console.log('on load')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('on ready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('on show')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('on hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('on unload')
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

  }
})