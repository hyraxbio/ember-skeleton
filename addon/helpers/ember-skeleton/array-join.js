import { helper } from '@ember/component/helper';

export function arrayJoin(params/*, hash*/) {
  if (!params[0].isArray) { return; }
  return params[0].join(params[1]);
}

export default helper(arrayJoin);
