// pages/custom/actionSheet/actionSheet.js
Component({
  /**
   * 组件的属性列表
   */
  properties:{
    itemData: {
      type: Array,
      value:[{}]
    },
    hideLeftImage: {
      type: Boolean,
      value: false,
    },
    hideRightImage: {
      type: Boolean,
      value: false,
    },
    cancelText: {
      type:String,
      value: "取消"
    }
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
      this.createAnimation(!this.data.isHiddenMask)
    },
    hidden: function() {
      this.createAnimation(!this.data.isHiddenMask)
    },
    clickActionSheet: function(e){
      this.triggerEvent('clickActionSheet', e.currentTarget.dataset.index)
    },
    cancel: function() {
      this.hidden()
    },
    createAnimation: function(state) {
      // 1、创建动画实例
      var animation = wx.createAnimation({
        delay: 1,
        duration: 200,
        timingFunction: "linear"
      });
      // 2、把这个动画实例赋值给当前的动画实例
      this.animation = animation
      // 3、计算高度、并赋值
      let itemHeight = 80;
      let bottomHeight = 80;
      let dividingLineHeight = 10;
      let maskHeight = this.data.itemData.length * itemHeight + bottomHeight + (this.data.itemData.length - 1) * dividingLineHeight;
      animation.translateY(maskHeight).step();

      // 4、导出动画对象赋值给数据对象储存
      if (!state) {
        this.setData({
          animationData: animation.export(),
          isHiddenMask: state
        });
      } else {
        this.setData({
          animationData: animation.export()
        })
      }
      //5、设置定时器 执行第二组动画
      setTimeout(function(){
        animation.translateY(0).step();

        // 显示、关闭抽屉
        if (!state) {
          this.setData({
            animationData: animation.export()
          });
        } else {
          this.setData({
            animationData: animation.export(),
            isHiddenMask: state
          })
        }
      }.bind(this), 200);
    }
  }


})