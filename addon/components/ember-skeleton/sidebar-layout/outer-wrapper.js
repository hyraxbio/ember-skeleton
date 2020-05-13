import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/outer-wrapper';
import { computed } from '@ember/object';


export default Component.extend({
  layout,
  emberSkeleton: service(),
  tagName: 'div',
  classNames: ['wrapper', 'sidebar-layout'],
  classNameBindings: ['emberSkeleton.hideContent:hide-content:show-content', 'contentHeader:content-header', 'emberSkeleton.navFrozen:nav-frozen', 'emberSkeleton.appNamespace'],
  attributeBindings: ['dataTestId:data-test-id'],
  dataTestId: 'ember-skeleton-sidebar-layout',

  headerComponent: computed('emberSkeleton.settings.headerComponent', function() {
    return this.get('emberSkeleton.settings.headerComponent');
  }),

  actions: {
    toggleSidebarExpanded() {
      console.log('toggle')
      this.toggleProperty('emberSkeleton.sidebarCollapsed');
      localStorage.setItem('userSidebarCollapsed', this.get('emberSkeleton.sidebarCollapsed'));
      this.set('emberSkeleton.sidebarToggled', true);
    }
  }
});