// pages/goods/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    triggered: false,
    screen_height:0,
    screen_width:0,

    swiper_current:0,

    drugInfo:{
      images:
      ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590669378176&di=1980c5e3462682dea1bc520bc514da0a&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590669378176&di=668b1656152ca6498db353c12bcc47cc&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590669378175&di=675c169019880894d828ec32d19aa01f&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3204887199%2C3790688592%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D4610%26h%3D2968'
    ],

    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)

    var appInstance = getApp()
    this.setData({
      screen_width: appInstance.globalData.screen_width,
      screen_height: appInstance.globalData.screen_height
    })
    wx.setNavigationBarTitle({
      title: '商品详情',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // setTimeout(() => {
    //   this.setData({
    //     triggered: true,
    //   })
    // }, 1000)
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

  bindChange: function(e) {
    this.setData({
      swiper_current: e.detail.current
    })
  },
  bindTap: function() {
    // console.log('点中了图片' + this.data.swiper_current)
    wx.previewImage({
      urls: this.data.drugInfo.images,
      current:this.data.drugInfo.images[this.data.swiper_current]
    })
  },

  onPulling(e) {
    // console.log('onPulling:', e)
  },

  onRefresh() {
    if (this._freshing) return
    this._freshing = true
    setTimeout(() => {
      this.setData({
        triggered: false,
      })
      this._freshing = false
    }, 3000)
  },

  onRestore(e) {
    console.log('onRestore:', e)
  },

  onAbort(e) {
    console.log('onAbort', e)
  },
})