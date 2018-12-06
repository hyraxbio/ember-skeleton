import Ember from 'ember';

export function drugCall(params/*, hash*/) {
  var drugCall = params[0];
  var drugName = params[1];
  if (drugName === "EFV" || drugName === "NVP") {
    if (drugCall === "LC") {
      return "S";
    }
  }
  if (drugCall === "LC") {
    return "NC";
  }
  return drugCall;
}

export default Ember.Helper.helper(drugCall);
