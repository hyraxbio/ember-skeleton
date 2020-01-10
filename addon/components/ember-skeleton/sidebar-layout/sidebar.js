import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/sidebar';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,
  classNameBindings: ['emberSkeleton.sidebarCollapsed:sidebar-collapsed', 'emberSkeleton.sidebarToggled:sidebar-toggled'],
  emberSkeleton: service(),
});
