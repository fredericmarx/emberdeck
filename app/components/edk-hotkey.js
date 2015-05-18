import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    let that = this;
    let key = this.get('key')
    document.addEventListener('keydown', function(event) {
      if(event.keyCode == key) {
        that.sendAction();
      }
    })
  }
});
