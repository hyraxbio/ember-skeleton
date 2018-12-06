import { helper } from '@ember/component/helper';
import themeColorStringUtil from 'sanger-frontend-version-three/utils/ember-skeleton/theme-color-string';

export function hyraxEmberAssetsThemeColorString(params) {
  return themeColorStringUtil(params[0]);
}

export default helper(hyraxEmberAssetsThemeColorString);
