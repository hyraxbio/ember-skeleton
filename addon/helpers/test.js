import { helper } from '@ember/component/helper';

export function test(params/*, hash*/) {
  console.log(params[0])
  return params[0];
}

export default helper(test);
