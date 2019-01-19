export default function themeColorString(string) {
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
  var themeColor;
  stringObjects.forEach(stringObject => {
    if (stringObject.matchStrings.indexOf(string) > -1) {
      themeColor = stringObject.returnString;
    }
  });
  return themeColor;
}
