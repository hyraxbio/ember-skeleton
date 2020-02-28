import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export function emberSkeletonThemeIcon(params, hash, defaultAssociations) {
  var string = params[0];
  if (!string && !hash) { return; }
  hash = hash || {};
  var defaultValue = hash.default || 'svg-repo/icons/icon-info';
  if (!string) { return defaultValue; }
  string = string.toLowerCase();
  var stringObjects = defaultAssociations || hash.defaultAssociations || [];
  for (var key in hash) {
    stringObjects.forEach(stringObject => {
      if (stringObject.matchStrings.indexOf(key) > -1) {
        stringObject.matchStrings.splice(stringObject.matchStrings.indexOf(key));
      }
    });
    var currentObject = stringObjects.find(stringObject => {
      return stringObject.returnString === hash[key];
    });
    if (currentObject) {
      currentObject.matchStrings = currentObject.matchStrings.concat([key]);
    } else {
      stringObjects.push({
        returnString: hash[key],
        matchStrings: [key]
      });
    }
  }
  var themeIcon;
  stringObjects.forEach(stringObject => {
    stringObject.matchStrings = stringObject.matchStrings.map(string => {
      return string.toLowerCase();
    });
    if (stringObject.matchStrings.indexOf(string) > -1) {
      themeIcon = stringObject.returnString;
    }
  });
  themeIcon = themeIcon || defaultValue;
  return themeIcon;
}

export default Helper.extend({
  emberSkeleton: service(),

  compute(params, hash) {
    var defaultAssociations = this.get('emberSkeleton.themeIconDefaults');
    return emberSkeletonThemeIcon(params, hash, defaultAssociations);
  }
});
