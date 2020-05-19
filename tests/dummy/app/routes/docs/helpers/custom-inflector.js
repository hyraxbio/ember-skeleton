import Route from '@ember/routing/route';

export default Route.extend({
  // BEGIN-SNIPPET people-and-votes.js
  model() {
    return [{
      name: 'Lesley Knope',
      votes: 235
    }, {
      name: 'Andy Dwyer',
      votes: 1
    }, {
      name: 'Lil Sebastian',
      votes: 25000
    }];
    // END-SNIPPET
  }
});