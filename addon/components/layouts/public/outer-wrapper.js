import Component from '@ember/component';
import layout from '../../../templates/components/layouts/public/outer-wrapper';

export default Component.extend({
  layout,
  classNames: ['wrapper', 'public'],
  classNameBindings: ['classes', 'session.placeholdersSupported:placeholders'],
});