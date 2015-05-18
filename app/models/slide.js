import DS from 'ember-data';
import fixtures from '../_content/slides';

const slideModel = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  footer: DS.attr('string'),
  color: DS.attr('string', {defaultValue: 'white'}),
  backgroundColor: DS.attr('string', {defaultValue: 'black'}),
  imgLeft: DS.attr('string'),
  imgRight: DS.attr('string'),
  imgFull: DS.attr('string')
});

slideModel.reopenClass({
  FIXTURES: fixtures
})

export default slideModel;
