import Route from '@ember/routing/route';

export default Route.extend({
  // BEGIN-SNIPPET names.js
  model() {
    return {
      names: ['Lil Sebastian', 'Lesley Knope', 'Andy Dwyer']
    }
    // END-SNIPPET
  }
});