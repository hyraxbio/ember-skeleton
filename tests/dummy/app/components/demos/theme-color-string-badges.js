import Component from '@ember/component';
import layout from '../../templates/components/demos/theme-color-string-badges';
import { themeColorString } from 'ember-skeleton/helpers/ember-skeleton/theme-color-string';
import { inject as service } from '@ember/service';

export default Component.extend({
  layout,
  emberSkeleton: service(),
  init() {
    this._super(...arguments);
    this.one = themeColorString(['ok'], null, this.emberSkeleton.themeColorStringDefaults);
    this.two = themeColorString(['ok'], {ok:'danger'}, this.emberSkeleton.themeColorStringDefaults);
    this.three = themeColorString(['missing'], null, this.emberSkeleton.themeColorStringDefaults);
    this.four = themeColorString(['missing'], {missing: 'secondary'}, this.emberSkeleton.themeColorStringDefaults);
    this.five = themeColorString(['missing'], {fallback: 'info'}, this.emberSkeleton.themeColorStringDefaults);
  }
});
