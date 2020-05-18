import Route from '@ember/routing/route';

export default Route.extend({
  // BEGIN-SNIPPET names-and-statuses.js
  model() {
    return [{
      name: 'Lesley Knope',
      status: 'passed'
    }, {
      name: 'Andy Dwyer',
      status: 'failed'
    }, {
      name: 'Lil Sebastian',
      status: 'absent'
    }];
    // END-SNIPPET
  }
});