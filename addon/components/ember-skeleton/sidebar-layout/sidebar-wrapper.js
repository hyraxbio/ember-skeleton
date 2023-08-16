import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/sidebar-wrapper';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',
  layout,
  emberSkeleton: service(),
});
