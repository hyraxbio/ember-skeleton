import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/main-nav';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['main-nav'],
  classNameBindings: ['emberSkeleton.navCollapsed:nav-collapsed', 'emberSkeleton.navToggled:nav-toggled'],
  emberSkeleton: service(),

  actions: {
    toggleFullNav: function() {
      this.toggleProperty('emberSkeleton.navCollapsed');
      localStorage.setItem('userNavCollapsed', this.get('emberSkeleton.navCollapsed'));
      this.set('emberSkeleton.navToggled', true);
    },
  }
});