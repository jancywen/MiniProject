// pages/store/cert/cert.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgTextStyle: 'dark',
    scrollTop: '200rpx',
    bgColor: '#ff0000',
    bgColorTop: '#00ff00',
    bgColorBottom: '#0000ff',
    nbTitle: '标题',
    nbLoading: false,
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',

    bannerList: [
      {
        id:1,
        src:'/images/tab_mine_selected.png',
        title: "待办事项",
        url: "/pages/action/action"
      },
      {
        id:2,
        src:'/images/tab_mine_selected.png',
        title: "新增商品",
        url: "/pages/action/action"
      },
      {
        id:3,
        src:'/images/tab_mine_selected.png',
        title: "商品管理",
        url: "/pages/action/action"
      },
      {
        id:4,
        src:'/images/tab_mine_selected.png',
        title: "处方登记",
        url: "/pages/action/action"
      },
      {
        id:5,
        src:'/images/tab_mine_selected.png',
        title: "采购收获",
        url: "/pages/action/action"
      },
      {
        id:5,
        src:'/images/tab_mine_selected.png',
        title: "分析数据",
        url: "/pages/action/action"
      },
    ]
  },


nav: function(env) {
  console.log(env.currentTarget.dataset)
  wx.showToast({
    title: env.currentTarget.dataset.url,
    icon: "none"
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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