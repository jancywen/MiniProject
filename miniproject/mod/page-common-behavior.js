module.exports = Behavior ({
  attached: function() {
    console.log('Component loaded!')
  },
  detached: function() {
    console.log('Component unloaded!')
  }
})