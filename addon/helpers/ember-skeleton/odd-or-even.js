import { helper } from '@ember/component/helper';
import oddOrEvenUtil from 'ember-skeleton/utils/odd-or-even';

export function oddOrEven([num]) {
  return oddOrEvenUtil(num);
}

export default helper(oddOrEven);
