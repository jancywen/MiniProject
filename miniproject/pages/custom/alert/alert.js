


var pageComponBehavior = require('../../../mod/page-common-behavior')
Component({
  /**
   * 公共代码段
   */
  behaviors:[
    pageComponBehavior,
    'wx://component-export'
  ],
  export() {
    return {key: 'value'}
  },
  /**
   * 组件的属性列表
   */
  properties:{
    min:{
      type: Number,
      value: 0,
      observer: function(newValue, oldValue) {
        console.log(newValue)
        console.log(oldValue)
      }
    },
    max: {
      type: Number,
      value:100,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHiddenMask: true,
  },

  /**
   * 数据监听
   */
  observers: {
    'min, max': function(min, max) {
      // min 或 max 被设置时触发
    },
    
  },
  /**
   * 生命周期函数
   */
  lifetimes: {
    created: function() {
      // 创建时执行
      console.log('组件被创建')
    },
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log('组件实例进入页面节点树')
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log('组件实例被从页面节点树移除')
    }
  },
  pageLifetimes: {
    show: function() {
      // 组件所在的页面被展示时执行
      console.log("组件所在的页面被展示")
    },
    hide: function() {
      // 组件所在的页面被隐藏时执行
      console.log('组件所在的页面被隐藏')
    },
    resize: function() {
      // 组件所在的页面尺寸变化时执行
      console.log('组件所在的页面尺寸变化')
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    show: function() {
      this.setData({
        isHiddenMask: false
      });
    },
    hide:function() {
      this.setData({
        isHiddenMask: true
      });
    },
    onTap: function() {
      this.triggerEvent('alertEvent', {some:'some',}, {})
    },
    changeMinValue: function() {
      this.setData({
        min: this.data.min + 1
      })
    },
    changeValue: function() {

    },
    
  }
})