// BEGIN-SNIPPET theme-color-string-app-defaults.js
let ENV = {
  //...
  emberSkeletonOptions: {
    // ...
    themeColorStringDefaults: [{
      returnString: 'success',
      matchStrings: ['ok', 'passed', 'active']
    },
    {
      returnString: 'warning',
      matchStrings: ['absent']
    },
    {
      returnString: 'danger',
      matchStrings: ['failed', 'error']
    },
    {
      returnString: 'gray-medium',
      matchStrings: ['pending']
    }],
  }
};
// END-SNIPPET