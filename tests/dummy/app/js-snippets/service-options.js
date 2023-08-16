// BEGIN-SNIPPET options-in-service.js
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  emberSkeleton: service(),
  didInsertElement() {
    console.log(this.emberSkeleton.options);
  },
});
// END-SNIPPET
