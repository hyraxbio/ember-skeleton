export default function themeColorString(string, hash) {
  if (!string) { return; }
  string = string.toLowerCase();
  var stringObjects = [
    {
      returnString: 'success',
      matchStrings: ['completed', 'passed', 'active', 'accepted']
    },
    {
      returnString: 'warning',
      matchStrings: ['action_required', 'absent']
    },
    {
      returnString: 'danger',
      matchStrings: ['failed', 'error', 'revoked', 'rejected']
    },
    {
      returnString: 'gray-medium',
      matchStrings: ['pending', 'processing']
    }
  ];
  for (var key in hash) {
    stringObjects.forEach(stringObject => {
      if (stringObject.matchStrings.indexOf(key) > -1) {
        stringObject.matchStrings.splice(stringObject.matchStrings.indexOf(key));
      }
    });
    var currentObject = stringObjects.find(stringObject => {
      return stringObject.returnString === hash[key];
    });
    currentObject.matchStrings = currentObject.matchStrings.concat([key]);
  }
  var themeColor;
  stringObjects.forEach(stringObject => {
    if (stringObject.matchStrings.indexOf(string) > -1) {
      themeColor = stringObject.returnString;
    }
  });
  return themeColor;
}
