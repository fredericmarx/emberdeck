import DS from 'ember-data';
import fixtures from '../_content/slides';

const slideModel = DS.Model.extend({
  title: DS.attr('string'),
  main: DS.attr('string'),
  aside: DS.attr('string'),
  footer: DS.attr('string'),
  color: DS.attr('string'),
  backgroundColor: DS.attr('string'),
  img: DS.attr('string')
});

slideModel.reopenClass({
  FIXTURES: fixtures
})

export default slideModel;
