import Component from '@ember/component';
import layout from '../../templates/components/layouts/loading-graphic';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['loader'],
});