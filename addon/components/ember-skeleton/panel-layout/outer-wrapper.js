import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/panel-layout/outer-wrapper';

export default Component.extend({
  layout,
  classNames: ['wrapper', 'panel-layout'],
  classNameBindings: ['classes', 'session.placeholdersSupported:placeholders'],
});