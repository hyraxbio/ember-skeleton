import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/material-card';
import { computed } from '@ember/object';
import themeColorStringUtil from 'ember-skeleton/utils/theme-color-string';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',
  layout,

  init() {
    this._super(...arguments);
    this.classes = ' border rounded padding-lg card-box-shadow';
  },
  // classNameBindings: ['borderColor', 'shadowLevel'],
  emberSkeleton: service(),

  borderColor: computed('borderColorProp', function () {
    if (!this.borderColorProp) {
      return;
    }
    return `border-${themeColorStringUtil(
      this.borderColorProp,
      this.themeColorStringHash
    )}`;
  }),

  shadowLevel: computed('depth', function () {
    if (!this.depth) {
      return;
    }
    return `card-box-shadow-level-${this.depth}`;
  }),
});
