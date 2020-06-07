// pages/custom/alert/alert.js
Component({


properties:{
  paramA: Number,
  paramB: String,
},
methods: {
  onLoad: function() {
    console.log(this.data.paramA)
  }
}

})