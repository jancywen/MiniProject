// pages/inhand/entry/entry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entryList: [
      {
        id:"1",
        icon:'/images/inhand/migo.png',
        item: '采购对账',
        url:'/pages/inhand/purchase/list/list'
      },
      {
        id:"2",
        icon:'/images/inhand/check.png',
        item: '盘点任务',
        url:''
      },
      {
        id:"3",
        icon:'/images/inhand/maintain.png',
        item: '养护任务',
        url:''
      },
      {
        id:"4",
        icon:'/images/inhand/yinpian.png',
        item: '中药饮片',
        url:''
      },
      {
        id:"5",
        icon:'/images/inhand/recipe.png',
        item: '处方成（中）药',
        url:''
      },
      {
        id:"6",
        icon:'/images/inhand/special.png',
        item: '特殊药品',
        url:''
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '待办事项',
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

  }
})