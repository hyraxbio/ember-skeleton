import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/material-card';
import { computed } from '@ember/object';
import { themeColorString } from 'ember-skeleton/helpers/ember-skeleton/theme-color-string';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,
  classNames: ['border', 'rounded', 'padding-lg', 'card-box-shadow'],
  classNameBindings: ['borderColor', 'shadowLevel', 'materialCardHoverEffect:card-box-shadow-hover-effect'],
  emberSkeleton: service(),

  borderColor: computed('borderColorProp', function() {
    var themeColorStringCombinedHash = {};
    themeColorStringCombinedHash.default = "gray-light";
    for (var key in this.get('themeColorStringHash')) {
      themeColorStringCombinedHash[key] = this.get('themeColorStringHash')[key];
    }
    themeColorStringCombinedHash.defaultAssociations = this.get('emberSkeleton.themeColorStringDefaults');
    return `border-${themeColorString([this.get('borderColorProp')], themeColorStringCombinedHash)}`;
  }),

  shadowLevel: computed('depth', function() {
    if (!this.get('depth')) { return; }
    return `card-box-shadow-level-${this.get('depth')}`;
  })
});