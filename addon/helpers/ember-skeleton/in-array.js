import { helper } from '@ember/component/helper';

export function inArray(params /*, hash*/) {
  if (!params[0] || !params[1]) {
    return false;
  }
  return params[0].indexOf(params[1]) > -1;
}

export default helper(inArray);
