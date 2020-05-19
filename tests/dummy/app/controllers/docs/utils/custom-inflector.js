import Controller from '@ember/controller';
import { computed } from '@ember/object';
// BEGIN-SNIPPET import-custom-inflector-util.js
import customInflectorUtil from 'ember-skeleton/utils/custom-inflector';
//END-SNIPPET
export default Controller.extend({
  // BEGIN-SNIPPET custom-inflector-util-default-plural.js
  defaultPlural: computed('model', function() {
    return this.get('model').map(person => {
      return `${person.name} got ${person.votes} ${customInflectorUtil(person.votes, {singular: 'vote'})}.`
    });
  }),
  //END-SNIPPET

  // BEGIN-SNIPPET custom-inflector-util-custom-plural.js
   customPlural: computed('model', function() {
    return this.get('model').map(person => {
      return `${person.name} has been voted for  ${person.votes} ${customInflectorUtil(person.votes, {singular: 'once', plural: 'several times'})}.`
    });
  })
  //END-SNIPPET
});

