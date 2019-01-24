import { helper } from '@ember/component/helper';
import themeColorStringUtil from 'ember-skeleton/utils/ember-skeleton/theme-color-string';

export function hyraxEmberAssetsThemeColorString(params, hash) {
  return themeColorStringUtil(params[0], hash);
}

export default helper(hyraxEmberAssetsThemeColorString);
