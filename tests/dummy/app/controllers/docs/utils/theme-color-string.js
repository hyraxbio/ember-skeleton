import Controller from '@ember/controller';
import { computed } from '@ember/object';
// BEGIN-SNIPPET import-theme-color-string-util.js
import ThemeColorStringUtil from 'ember-skeleton/utils/theme-color-string';
//END-SNIPPET
export default Controller.extend({
  init() {
    this._super(...arguments);
    // BEGIN-SNIPPET theme-color-string-util-fallback.js
    this.set('statusClassFallback', ThemeColorStringUtil('missing', {fallback: 'primary'}));
    //END-SNIPPET
    // BEGIN-SNIPPET theme-color-string-util-no-matches.js
    this.set('statusClassNoMatches', ThemeColorStringUtil('info'));
    //END-SNIPPET
  },

  // BEGIN-SNIPPET theme-color-string-util-basic.js
  parsedBasic: computed('model', function() {
   return this.get('model').map(person => {
    person.set('statusClass', ThemeColorStringUtil(person.status, {complete: 'success', absent: 'warning', failed: 'danger'}));
    return person;
   });
  }),
  //END-SNIPPET

  // BEGIN-SNIPPET theme-color-string-util-defaults.js
  parsedDefaults: computed('model', function() {
    return this.get('model').map(person => {
    person.set('statusClassDefault', ThemeColorStringUtil(person.status));
    return person;
    });
  }),
  //END-SNIPPET

  // BEGIN-SNIPPET theme-color-string-util-default-overridden.js
  defaultOverriden: computed('model', function() {
    return this.get('model').map(person => {
    person.set('statusClassDefaultOverridden', ThemeColorStringUtil(person.status, {absent: 'info'}));
    return person;
    });
  }),
  //END-SNIPPET



   
});
