import Service from '@ember/service';
import emberSkeletonOptions from 'ember-skeleton/utils/ember-skeleton-options';
import { computed } from '@ember/object';

export default Service.extend({
  layoutType: 'main',
  init() {
    this._super(...arguments);
    this.options = emberSkeletonOptions();
  },

  hideMainContent: computed('layoutType', 'isLoading', function () {
    return this.layoutType !== 'main' || this.isLoading;
  }),

  toggleSidebarExpanded() {
    this.toggleProperty('sidebarCollapsed');
    localStorage.setItem(
      'userSidebarCollapsed',
      this.emberSkeleton.sidebarCollapsed
    );
    this.set('sidebarToggled', true);
  },
});
