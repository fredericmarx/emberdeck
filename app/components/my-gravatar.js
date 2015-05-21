import Ember from 'ember';
import md5 from 'npm:MD5';

export default Ember.Component.extend({
  size: 300,
  email: 'tomster@emberjs.com',

  gravatarUrl: function() {
    const email = this.get('email'),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size;
  }.property('email', 'size')
});
