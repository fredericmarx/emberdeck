import Ember from 'ember';
import moment from 'npm:moment';

export function myDate() {
  return moment(this.get('date')).format('dddd, MMM Do YYYY');
}

export default Ember.HTMLBars.makeBoundHelper(myDate);
