import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/panel-layout/outer-wrapper';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,
  emberSkeleton: service(),
  classNames: ['wrapper', 'panel-layout'],
  classNameBindings: ['classes', 'emberSkeleton.hideContent:hide-content:show-content'],
});