import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../../../templates/components/layouts/sidebar-layout/main-nav';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['main-nav'],
  classNameBindings: ['basicLayoutControls.navCollapsed:nav-collapsed', 'basicLayoutControls.navToggled:nav-toggled'],
  basicLayoutControls: service(),

  mainMenuItemsComponent: 'main-nav-items',

  actions: {
    toggleFullNav: function() {
      this.toggleProperty('basicLayoutControls.navCollapsed');
      localStorage.setItem('userNavCollapsed', this.get('basicLayoutControls.navCollapsed'));
      this.set('basicLayoutControls.navToggled', true);
    },
  }
});