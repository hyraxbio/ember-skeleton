import Controller from '@ember/controller';
import { computed } from '@ember/object';
// BEGIN-SNIPPET import-readable-file-size-util.js
import readableFileSizeUtil from 'ember-skeleton/utils/readable-file-size';
//END-SNIPPET
export default Controller.extend({
  // BEGIN-SNIPPET readable-file-size-util.js
  fileSizes: computed('model', function() {
   return this.model.map(item => {
     return readableFileSizeUtil(item);
   });
  }),
  //END-SNIPPET
});