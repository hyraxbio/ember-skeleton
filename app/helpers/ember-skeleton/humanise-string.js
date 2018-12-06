import { helper } from '@ember/component/helper';
import humaniseStringUtil from 'sanger-frontend-version-three/utils/ember-skeleton/humanise-string';

export function emberExtendedFieldsHumaniseString(params/*, hash*/) {
  if (!params[0]) { return params; }
  return humaniseStringUtil(params[0]);
}

export default helper(emberExtendedFieldsHumaniseString);
