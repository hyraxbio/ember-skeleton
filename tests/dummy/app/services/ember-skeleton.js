import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);
    // BEGIN-SNIPPET theme-color-string-defaults.js

    this.themeColorStringDefaults = [{
      returnString: 'success',
      matchStrings: ['success', 'ok', 'passed', 'active']
    },
    {
      returnString: 'warning',
      matchStrings: ['warning', 'absent']
    },
    {
      returnString: 'danger',
      matchStrings: ['danger', 'failed', 'error']
    },
    {
      returnString: 'gray-medium',
      matchStrings: ['pending'],
      fallback: true
    }];
    // END-SNIPPET

    // BEGIN-SNIPPET theme-icon-defaults.js
    this._super(...arguments);
    this.themeIconDefaults = [{
      returnString: 'svg/icons/icon-alert',
      matchStrings: ['danger', 'failed', 'error', 'revoked', 'rejected', 'absent']
    }, {
      returnString: 'svg/icons/icon-tick',
      matchStrings: ['success', 'complete', 'completed', 'passed', 'active', 'accepted', 'ok']
    }];
    // END-SNIPPET
  },
  headerComponent: 'ember-skeleton/header',
  loadingComponent: 'ember-skeleton/loading-page',
  footerComponent: 'ember-skeleton/footer',
  sidebarContentComponent: 'ember-skeleton/sidebar-content',
  fallbackThemeColor: 'gray-dark',
});
