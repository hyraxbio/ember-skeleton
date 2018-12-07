export default function hyraxEmberAssetsThemeColorString(string) {
  var stringObjects = [
    {
      returnString: 'success',
      matchStrings: ['completed', 'passed', 'active']
    },
    {
      returnString: 'warning',
      matchStrings: ['action_required', 'absent']
    },
    {
      returnString: 'danger',
      matchStrings: ['failed', 'error']
    },
    {
      returnString: 'primary',
      matchStrings: ['pending']
    }
  ];
  var themeColor;
  stringObjects.forEach(stringObject => {
    if (stringObject.matchStrings.indexOf(string) > -1) {
      themeColor = stringObject.returnString;
    }
  });
  return themeColor;
}
