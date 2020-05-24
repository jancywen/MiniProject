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
    },
    a1src:'../../images/tab_mine_selected.png',
    todayData: [
      {
        id:1,
        Item:"销售额（元）",
        Value: 1200
      },
      {
        id:2,
        Item:"支付订单",
        Value: 188
      },
      {
        id:3,
        Item:"客单价（元）",
        Value: 99
      },
      {
        id:4,
        Item:"客品次",
        Value: 1200
      },
      {
        id:5,
        Item:"新增会员数",
        Value: 188
      },
      {
        id:5,
        Item:"上架商品次数",
        Value: 99
      },
    ],
    bannerList: [
      {
        id:1,
        src:'../../images/tab_mine_selected.png',
        title: "待办事项",
        url: "/pages/action/action"
      },
      {
        id:2,
        src:'../../images/tab_mine_selected.png',
        title: "新增商品",
        url: "/pages/action/action"
      },
      {
        id:3,
        src:'../../images/tab_mine_selected.png',
        title: "商品管理",
        url: "/pages/action/action"
      },
      {
        id:4,
        src:'../../images/tab_mine_selected.png',
        title: "处方登记",
        url: "/pages/action/action"
      },
      {
        id:5,
        src:'../../images/tab_mine_selected.png',
        title: "采购收获",
        url: "/pages/action/action"
      },
      {
        id:5,
        src:'../../images/tab_mine_selected.png',
        title: "分析数据",
        url: "/pages/action/action"
      },
    ]
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