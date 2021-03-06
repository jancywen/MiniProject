// pages/goods/add/add.js
var common = require('../../../mod/promisify-package.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品类型
    goods_types:["非拆零商品","拆零商品"],
    goods_type_index: 0,
    /// 拆零商品
    drugs:[
      {
        drug_id: 1,
        drug_name: '双黄连'
      },
      {
        drug_id: 2,
        drug_name: '感冒灵'
      },
      {
        drug_id: 3,
        drug_name: '21金维他'
      }
    ],
    drug_index: 0,
    // 二维码
    bar_code:'',
    // 国家标准
    government_standard:
    [
      "批准文号",
      "注册账号",
      "无"
    ],
    government_standard_index:0,
    // 批准文号
    approve_number:'',
    // 通用名
    general_name: '',
    // 图片
    image_list:[],
    // 贮藏
    store_types: ["密封","干燥","冷藏"],
    store_index:0,
    // 
    mutual_types:["否", "是"],
    // 外用
    external_use:0,
    // 医保
    medical_insurance: 0,
    // 库存单位
    storage_units:["盒", "瓶", "罐"],
    storage_index:0,
    // 规格
    spec:'',
    // 生产qiye
    companys:["","杭州天宇制药","贵州百灵","仁和制药","生物制药"],
    company_index:0,

    // 产地
    origin:'',
    //地址
    address:'',
    // 电话
    tel:null,
    //GSP
    gsp_list:['', '进口药', '中药饮片'],
    gsp_index:0,
    // 类别
    category_list:['','处方药','含麻黄碱'],
    category_index: 0,
    // 分类
    sort_list:['','中药饮片'],
    sort_index: 0,

    price:null,
    member_price:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '新建商品',
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
  formSubmit: function(e) {
    console.log(e.detail)
  },
  /**
   * 商品类型
   * @param  e 
   */
  goodsTypeChange: function(e) {
    this.setData({
      goods_type_index: e.detail.value
    })
    console.log(this.data.goods_type_index)
  },
  /**
   * 拆零商品
   * @param {*} e 
   */
  drugChange:function(e) {
    this.setData({
      drug_index:e.detail.value
    })
  },
  /**
   * 扫描
   */
  scan: function() {
    var that = this
    wx.scanCode({
      onlyFromCamera: true,
      scanType:['barCode'],
      success: (res) => {
        console.log(res)
        this.setData({
          bar_code:res.result
        })
      },
    })
  },
/**
 * 国家标准
 */
  government_standard_change: function(e) {
    this.setData({
      government_standard_index:e.detail.value
    })
  }, 
  /**
   * 匹配商品
   * @param {*} e 
   */
  match_drug: function(e) {
    console.log('匹配')
  },
  /**
  * 展示 / 添加图片
  */
  show_image: function(e) {
    const that = this
    console.log(e.currentTarget.dataset)
    console.log(that.data.image_list)
    let index = e.currentTarget.dataset.index
    let url = e.currentTarget.dataset.url
    if (index < this.data.image_list.length) {
      wx.previewImage({
        urls: that.data.image_list,
        current:url,
      })
    }else {
      console.log('去选择图片')
      common.uploadImage(5-that.data.image_list.length)
      .then((list)=> {
        console.log('图片上传成功')
        console.log(list)
        var images = that.data.image_list
        that.setData({
          image_list: images.concat(list)
        })
      })
    }
  },
  /**
   * 删除图片
   * @param {} e 
   */
  remove_image: function(e){
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    var list = this.data.image_list
    list.splice(index, 1)
    this.setData({
      image_list:list
    })
  },
  /**
   * 贮藏条件
   */
  store_type_change: function(e) {
    this.setData({
      store_index: e.detail.value
    })
  },
  external_use_change: function(e) {
    this.setData({
      external_use:e.detail.value
    })
  },
  medical_insurance_change: function(e) {
    this.setData({
      medical_insurance:e.detail.value
    })
  },
  storage_unit_change: function(e) {
    this.setData({
      storage_index:e.detail.value
    })
  },
  company_unit_change: function(e) {
    this.setData({
      company_index:e.detail.value
    })
  },
  gsp_change: function(e) {
    this.setData({
      gsp_index: e.detail.value
    })
  },
  category_change: function(e) {
    this.setData({
      category_index: e.detail.value
    })
  },
  sort_change: function(e) {
    this.setData({
      sort_index: e.detail.value
    })
  }
})