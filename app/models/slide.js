import DS from 'ember-data';
import slides from '../_content/slides';

const slideModel = DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  main: DS.attr('string'),
  tweet: DS.attr('string'),
  code: DS.attr('string'),
  giphy: DS.attr('string'),
  example: DS.attr('string'),
  color: DS.attr('string'),
  backgroundColor: DS.attr('string'),
  img: DS.attr('string')
});

slideModel.reopenClass({
  FIXTURES: slides
});

export default slideModel;
