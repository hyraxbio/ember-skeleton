import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/material-card';
import { computed } from '@ember/object';
import themeColorStringUtil from 'ember-skeleton/utils/theme-color-string';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: "",
  layout,

  // classNameBindings: ['borderColor', 'shadowLevel'],
  emberSkeleton: service(),

  borderColor: computed('borderColorProp', function() {
    if (!this.get('borderColorProp')) {
      return;
    }
    return `border-${themeColorStringUtil(this.get('borderColorProp'), this.get('themeColorStringHash'))}`;
  }),

  shadowLevel: computed('depth', function() {
    if (!this.get('depth')) { return; }
    return `card-box-shadow-level-${this.get('depth')}`;
  })
});