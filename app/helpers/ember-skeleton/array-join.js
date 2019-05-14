import Ember from 'ember';

export function arrayJoin(params/*, hash*/) {
  if (!params[0].isArray) { return; }
  return params[0].join(params[1]);
}

export default Ember.Helper.helper(arrayJoin);
