// BEGIN-SNIPPET theme-icon-app-defaults.js
let ENV = {
  //...
  emberSkeletonOptions: {
    // ...
    themeIconDefaults: [
      {
        returnString: 'svg/icons/icon-alert',
        matchStrings: ['danger', 'failed'],
      },
      {
        returnString: 'svg/icons/icon-tick',
        matchStrings: ['success', 'passed'],
        default: true,
      },
    ],
  },
};
// END-SNIPPET
