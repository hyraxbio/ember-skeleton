import { helper } from '@ember/component/helper';
import robotiseStringUtil from 'ember-skeleton/utils/robotise-string';

export function robotiseString([string, casing]) {
  return robotiseStringUtil(string, casing);
}

export default helper(robotiseString);