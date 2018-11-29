import Component from '@ember/component';
import { computed } from '@ember/object';
import { once } from '@ember/runloop';
import layout from '../../../templates/components/ember-skeleton/header/header-bar';

export default Component.extend({
  layout,
  tagName: 'header',
  classNameBindings: ['systemAlert:system-alert-active', 'systemAlert.type'],
});