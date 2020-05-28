// pages/inhand/purchase/detail/detail.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    // screen_height:0,
    // screen_width: 0,
    purchaseId: "",
    purchaseDetail:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '对账详情',
    })
    this.setData({
      purchaseId: options.id,
    })

    // wx.getSystemInfo({
    //   complete: (res) => {
    //     console.log(res.windowHeight)
    //     that.setData({
    //       screen_width:res.windowWidth,
    //       screen_height:res.windowHeight
    //     })
    //   },
    // })

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
    this.queryDetail(this.data.purchaseId)
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


  /**
   * 请求对账详情
   */
  queryDetail: function(id) {
    var that = this
    let info = {
      purchaseId: '01010',
      supplier:'三九制药',
      drugs: 
      [
        {
          genericName:'感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒感冒灵颗粒',
          spec:'120g/包',
          price:3.5,
          count:3,
          icon:'',
          id:'123'
        },
        {
          genericName:'感冒灵颗粒',
          spec:'120g/包',
          price:3.5,
          count:3,
          icon:'',
          id:'124'
        },
      ],
      count: 3,
      amount:25.60,
      state: 2,
      creator:"",
      creattime:"2020-05-07",
      coldchain: {

      },
    }

    this.setData({
      purchaseDetail:info,
    })

    console.log(this.data.purchaseDetail)
  }
})