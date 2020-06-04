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
    todayData: [
      {
        Category: "销售数据",
        Description: "",
        Id: "69ARX6VHkJ7sEmChkKqFpP",
        Metric: "销售额(元)",
        State: "",
        Value: "0.00",
      }
    ],
    entryList:[
      [
        {
          id:1,
          src:'/images/quick-entry/todo.png',
          title: "待办事项",
          url: "/pages/inhand/entry/entry"
        },
        {
          id:2,
          src:'/images/quick-entry/new-goods.png',
          title: "新增商品",
          url: "/pages/goods/add/add"
        },
        {
          id:3,
          src:'/images/quick-entry/goods-manage.png',
          title: "商品管理",
          url: "/pages/custom/form-check-box/form-check-box"
        },
        {
          id:4,
          src:'/images/quick-entry/regist-recipe.png',
          title: "处方登记",
          url: "/pages/custom/custom-component/custom-component"
        },
        {
          id:5,
          src:'/images/quick-entry/migo.png',
          title: "采购收获",
          url: "/pages/action/action"
        },
        {
          id:6,
          src:'/images/quick-entry/data-analyze.png',
          title: "数据分析",
          url: "/pages/action/action"
        },
        {
          id:7,
          src:'/images/quick-entry/yinpian.png',
          title: "中药饮片",
          url: "/pages/action/action"
        },
        {
          id:8,
          src:'/images/quick-entry/check.png',
          title: "盘点任务",
          url: "/pages/action/action"
        },
      ],
      [
        {
        id:9,
        src:'/images/quick-entry/maintenance.png',
        title: "分析数据",
        url: "/pages/action/action"
        },
      ]
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
    this.queryTodayList()
  },
/**
   * 请求今日数据
   */ 
  queryTodayList: function() {
    console.log("请求今日数据")
    var myThis = this
    wx.request({
      url: 'https://store.gmtshenzhen.cn/api/app/v1/storage/dataview/statistics?_trace=fITAM1I53hPiFkv5xdf0yjwkh7gd7CEl&_version=1.0.0&_platform=IOS&_uid=QLjLgTMHLwFh7rMJV3wfDA&_storeId=62m3hM98kfQtgsRD95g2NU&_token=7a384896179e7caf42319f261fcac365&_device=DB72456F-B3CA-4EC6-B56A-8BE5059C2773&_time=1590460671&_sequence=2',
      data: {},
      header:{'content-type': 'application/json'},
      timeout:6000,
      method:"POST",
      success(response) {
        console.log(response)
        if (response.statusCode === 200) {
          if (response.data.Code === 0 ){
            myThis.setData({
              todayData: response.data.Data.List
            })
            console.log(myThis.todayData)
          }
        }
      },
      fail (error) {
        wx.showToast({
          title: error.errMsg,
          icon:'none'
        })
      },
      complete (result) {
      }
    })
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
  },
  

})