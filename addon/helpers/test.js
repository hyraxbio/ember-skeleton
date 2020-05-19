import { helper } from '@ember/component/helper';
// import ENV from '../../config/environment';
import naturalSort from '../utils/ember-skeleton/natural-sort';

export function test(params/*, hash*/) {
  return naturalSort(['one', 'two']);
}

export default helper(test);
