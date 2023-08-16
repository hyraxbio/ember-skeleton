// BEGIN-SNIPPET hide-content-explicit.js
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  emberSkeleton: service(),

  actions: {
    sumbitForm(data) {
      this.set('emberSkeleton.hideContent', true);
      this.submitForm(data)
        .then((response) => {
          this.set('emberSkeleton.hideContent', false);
          // Handle success
        })
        .catch((err) => {
          this.set('emberSkeleton.hideContent', false);
          // Handle err
        });
    },
  },
});
// END-SNIPPET
