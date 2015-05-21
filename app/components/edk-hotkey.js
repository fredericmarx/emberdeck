import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    const that = this;
    const key = parseInt(this.get('key'));
    document.addEventListener('keydown', function(event) {
      if(event.keyCode === key) {
        that.sendAction();
      }
    });
  }
});
