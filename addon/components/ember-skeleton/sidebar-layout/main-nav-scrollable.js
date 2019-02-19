import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/main-nav-scrollable';
import { PerfectScrollbarMixin } from 'ember-perfect-scrollbar';

export default Component.extend(PerfectScrollbarMixin, {
  layout,
  classNames: ['bottom-row'],

  init() {
    this._super(...arguments);
    this.perfectScrollbarOptions = {
      suppressScrollX: true,
      maxScrollbarLength: 200,
      wheelPropagation: true,
      swipePropagation: true,
    };
  },
});
