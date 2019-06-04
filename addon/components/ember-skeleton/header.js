import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/header';

export default Component.extend({
  layout,
  tagName: 'header',
  classNameBindings: ['systemAlert:system-alert-active', 'systemAlert.type'],
});