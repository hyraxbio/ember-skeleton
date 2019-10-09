import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.themeColorStringDefaults = [{
      returnString: 'success',
      matchStrings: ['complete', 'completed', 'passed', 'active', 'accepted']
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
    }];
  },

  headerComponent: 'ember-skeleton/header',
  loadingComponent: 'ember-skeleton/loading-page',
  footerComponent: 'ember-skeleton/footer',
  mainNavItemsComponent: 'main-nav-items',
  sidebarComponent: 'ember-skeleton/sidebar-layout/sidebar',
  defaultThemeColorString: 'gray-medium',
  
});
