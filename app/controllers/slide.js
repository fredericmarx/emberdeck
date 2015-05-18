import Ember from 'ember';

export default Ember.Controller.extend({
  slidesCount: function() {
    return this.get('model.slides').get('length');
  }.property('model.slides'),
  currentSlide: function() {
    let slide = this.get('model.slide');
    let slides = this.get('model.slides');
    return slides.indexOf(slide) + 1;
  }.property('model.slides', 'model.slide'),
  actions: {
    nextSlide: function() {
      let slide = this.get('model.slide');
      let slides = this.get('model.slides');
      let nextSlide = slides.indexOf(slide) + 1;
      if(slides.objectAt(nextSlide)) {
        this.transitionToRoute('slide', slides.objectAt(nextSlide).get('id'))
      }
    },
    previousSlide: function() {
      let slide = this.get('model.slide');
      let slides = this.get('model.slides');
      let previousSlide = slides.indexOf(slide) - 1;
      if(slides.objectAt(previousSlide)) {
        this.transitionToRoute('slide', slides.objectAt(previousSlide).get('id'))
      }
    }
  }
});