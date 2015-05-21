import Ember from 'ember';
import Showdown from 'npm:showdown';

console.log(Showdown)

const converter = new Showdown.Converter();

export function myMarkdown() {
  return converter.makeHtml(this.get('text'));
}

export default Ember.HTMLBars.makeBoundHelper(myMarkdown);
