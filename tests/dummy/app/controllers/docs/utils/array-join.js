// BEGIN-SNIPPET array-join-util.js
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import arrayJoinUtil from 'ember-skeleton/utils/array-join';

export default Controller.extend({
  sentence: computed('model', function() {
    return `My favourte characters are ${arrayJoinUtil(this.get('model.names'), ', ', {finalJoinString: ' and '})}.`;
  })
});
//END-SNIPPET
