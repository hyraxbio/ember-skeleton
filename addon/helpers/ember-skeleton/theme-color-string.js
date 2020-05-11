import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export function themeColorString(params, hash, defaultAssociations) {
  var string = params[0];
  if (!string && !hash) { return; }
  hash = hash || {};

  var defaultFallBack = (defaultAssociations ||[]).find(item => {
    return item.fallback;
  });
  var fallBackColor = hash.default || defaultFallBack;

  if (!string) { return fallBackColor; }
  string = string.toLowerCase();
  defaultAssociations = defaultAssociations || hash.defaultAssociations || [];
  var hashAssociations = [];
  for (var key in hash) {
    var existingAssociation = hashAssociations.find(item => {
      return item.returnString === hash[key];
    });
    if (existingAssociation) {
      existingAssociation.matchStrings.push(key);
    } else {
      hashAssociations.push({
        returnString: hash[key],
        matchStrings: [key]
      });
    }
  }
  if (findReturnString(hashAssociations, string)) {
    return findReturnString(hashAssociations, string);
  } else if (findReturnString(defaultAssociations, string)) {
   return findReturnString(defaultAssociations, string);
  } else {
    if (!fallBackColor) {
      console.warn('[ember-skeleton/theme-color-string] You did not pass a fallback colour to the helper, and you do not have a fallback option set in the themeColorStringDefaults array in ember-skeleton.');
    }
    return fallBackColor;
  }
}

function findReturnString(array, string) {
  return (array.find(item => {
    return item.matchStrings.indexOf(string) > -1;
  }) || {}).returnString;
}

export default Helper.extend({
  emberSkeleton: service(),

  compute(params, hash) {
    var defaultAssociations = this.get('emberSkeleton.themeColorStringDefaults');
    return themeColorString(params, hash, defaultAssociations);
  }
});