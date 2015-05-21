import Ember from 'ember';
import Showdown from 'npm:showdown';

const converter = new Showdown.Converter();

export function myMarkdown() {
  return converter.makeHtml(this.get('text'));
}

export default Ember.HTMLBars.makeBoundHelper(myMarkdown);
