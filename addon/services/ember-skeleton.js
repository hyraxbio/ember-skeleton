import Service from '@ember/service';

export default Service.extend({
  headerComponent: 'ember-skeleton/header',
  loadingComponent: 'ember-skeleton/loading-page',
  footerComponent: 'ember-skeleton/footer',
  sidebarContentComponent: 'ember-skeleton/sidebar-content',
  collapseSideBarIconComponent: 'ember-skeleton/svg/icon-collapse-sidebar'
});
