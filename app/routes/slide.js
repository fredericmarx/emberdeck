import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      slide: this.store.find('slide', params.slide_id),
      slides: this.store.find('slide')
    });
  },
  renderTemplate: function(params) {
    const template = params.get('model.slide').get('template');
    if (template) {
      this.render('test');
    } else {
      this.render('slide');
    }
  }
});
