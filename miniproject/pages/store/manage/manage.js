// pages/store/manage/manage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todayData: 
    [
      {
        Category: "销售数据",
        Description: "",
        Id: "69ARX6VHkJ7sEmChkKqFpP",
        Metric: "销售额(元)",
        State: "",
        Value: "0.00",
      },
    ],
    switchList: []
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
    this.querySwitchList()
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
   * 
   */
  showDescription: function(env) {
    wx.showToast({
      title: env.currentTarget.dataset.description,
      icon:'none'
    })
  },

  /**
   * 请求数据类型列表
   */
  querySwitchList:function() {
    console.log("请求数据类型列表")
    var me = this
    wx.request({
      url: 'https://store.gmtshenzhen.cn/api/app/v1/storage/dataview/get_shop_switch_list?_trace=fITAM1I53hPiFkv5xdf0yjwkh7gd7CEl&_version=1.0.0&_platform=IOS&_uid=QLjLgTMHLwFh7rMJV3wfDA&_storeId=62m3hM98kfQtgsRD95g2NU&_token=7a384896179e7caf42319f261fcac365&_device=DB72456F-B3CA-4EC6-B56A-8BE5059C2773&_time=1590460671&_sequence=2',
      data: {},
      header:{'content-type': 'application/json'},
      method:"POST",
      success(response) {
        console.log(response)
        if (response.statusCode === 200) {
          if (response.data.Code === 0 ){
            var list = response.data.Data.List
            var tempList = new Array()
            for (var index in list ) {
              var item = list[index]
              // console.log(index, item)
              for (var sub_index in item.List) {
                var sub_item = item.List[sub_index]
                if (sub_item.State === "On") {
                  tempList.push(sub_item)
                }
              }
            }
            me.setData({
              todayData: tempList,
              switchList: list
            })
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
   * 
   * @param {*} envent 
   */
  changeSwitchState: function(envent) {
    let id = envent.currentTarget.dataset.id
    let state = envent.currentTarget.dataset.state
    let newState = state === "On" ? "Off" : "On"
    if (this.data.todayData.length == 6 && newState === "On") {
      wx.showToast({
        title: '最多只能选中6个',
        icon:'none'
      })
      this.onShow()
      return
    }
    if (this.data.todayData.length == 1 && newState === "Off") {
      wx.showToast({
        title: '最少要选中1个',
        icon:'none'
      })
      this.onShow()
      return
    }

    var me = this
    wx.request({
      url: 'https://store.gmtshenzhen.cn/api/app/v1/storage/dataview/modify_shop_switch?_trace=fITAM1I53hPiFkv5xdf0yjwkh7gd7CEl&_version=1.0.0&_platform=IOS&_uid=QLjLgTMHLwFh7rMJV3wfDA&_storeId=62m3hM98kfQtgsRD95g2NU&_token=7a384896179e7caf42319f261fcac365&_device=DB72456F-B3CA-4EC6-B56A-8BE5059C2773&_time=1590460671&_sequence=2',
      data:{"Id":id, "NewState": newState},
      timeout:6000,
      method:"POST",
      
      success(response) {
        console.log(response)
        if (response.data.Code === 0) {
          me.querySwitchList()
        }
      },
      fail(error) {
        console.log(error.errMsg)
      },
      complete(result) {
        console.log(result)
      }
    })
  }

})