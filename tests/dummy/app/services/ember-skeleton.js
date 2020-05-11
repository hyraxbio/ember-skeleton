import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);
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
  },
  headerComponent: 'ember-skeleton/header',
  loadingComponent: 'ember-skeleton/loading-page',
  footerComponent: 'ember-skeleton/footer',
  mainNavItemsComponent: 'main-nav-items',
  sidebarComponent: 'ember-skeleton/sidebar-layout/sidebar',
  fallbackThemeColor: 'gray-dark',
});
