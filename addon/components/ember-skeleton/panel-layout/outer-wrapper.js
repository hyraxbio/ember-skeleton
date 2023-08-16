import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/panel-layout/outer-wrapper';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',
  layout,
  emberSkeleton: service(),
  dataTestId: 'ember-skeleton-panel-layout',
});
