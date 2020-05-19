import Route from '@ember/routing/route';

export default Route.extend({
  // BEGIN-SNIPPET employee-levels.js
  model() {
    var seniorEmployees = ['Ron Swanson', 'Lesley Knope'];
    var juniorEmployees = ['Lil Sebastian', 'Andy Dwyer'];
    var interns = ['April Ludgate'];
    return {
      seniorEmployees: seniorEmployees,
      juniorEmployees: juniorEmployees,
      interns: interns,
      all: seniorEmployees.concat(juniorEmployees).concat(interns)
    };
    // END-SNIPPET
  }
});