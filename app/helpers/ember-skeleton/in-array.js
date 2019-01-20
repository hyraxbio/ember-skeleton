import Ember from 'ember';

export function inArray(params/*, hash*/) {
  if (!params[0] || !params[1]) { return; }
  return params[0].indexOf(params[1]) > -1;
}

export default Ember.Helper.helper(inArray);
