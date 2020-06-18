import { helper } from '@ember/component/helper';

export function emberSkeletonStringSplit(params/*, hash*/) {
  var string = params[0];
  if (!string) {
    return;
  }
  var splitChar = params[1] || ',';
  return string.split(splitChar);
}

export default helper(emberSkeletonStringSplit);
