import Component from '@ember/component';
import layout from '../../templates/components/layouts/content-wrapper';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['container', 'section-padding-x', 'section-padding-y'],
});