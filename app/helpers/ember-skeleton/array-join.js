import Ember from 'ember';

export function arrayJoin(params/*, hash*/) {
  return params[0].join(params[1]);
}

export default Ember.Helper.helper(arrayJoin);
