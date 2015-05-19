import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      slide: this.store.find('slide', params.slide_id),
      slides: this.store.find('slide')
    });
  }
});
