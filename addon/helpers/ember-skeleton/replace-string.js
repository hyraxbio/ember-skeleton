import { helper } from '@ember/component/helper';

export function replaceString(params) {
  if (!params[0]) { return; }
  return params[0].replace(params[1], params[2]);
}

export default helper(replaceString);
