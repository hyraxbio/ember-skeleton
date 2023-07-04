import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/outer-wrapper';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  emberSkeleton: service(),
  tagName: '',
  dataTestId: 'ember-skeleton-sidebar-layout',

  headerComponent: computed(
    'emberSkeleton.settings.headerComponent',
    function () {
      return this.emberSkeleton.settings.headerComponent;
    }
  ),
});
