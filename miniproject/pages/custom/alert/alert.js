
Component({
  /**
   * 组件的属性列表
   */
  properties:{

  },

  /**
   * 组件的初始数据
   */
  data: {
    isHiddenMask: true,
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
    }
  }
})