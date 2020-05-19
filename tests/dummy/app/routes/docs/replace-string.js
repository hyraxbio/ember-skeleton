import Route from '@ember/routing/route';

export default Route.extend({
  // BEGIN-SNIPPET names-and-status-numbers.js
  model() {
    return [{
      name: 'Lesley Knope',
      status: '1'
    }, {
      name: 'Andy Dwyer',
      status: '0'
    }, {
      name: 'Lil Sebastian',
      status: '-1'
    }];
    // END-SNIPPET
  }
});