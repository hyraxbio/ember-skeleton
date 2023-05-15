import Controller from '@ember/controller';
import { computed } from '@ember/object';
// BEGIN-SNIPPET import-odd-or-even-util.js
import oddOrEvenUtil from 'ember-skeleton/utils/odd-or-even';
//END-SNIPPET
export default Controller.extend({
  // BEGIN-SNIPPET odd-or-even-util.js
  oddOrEvenVotes: computed('model', function() {
    return this.model.map(person => {
      return `${person.name} has an ${oddOrEvenUtil(person.votes)} number of votes.`
    });
  }),
  //END-SNIPPET
});
