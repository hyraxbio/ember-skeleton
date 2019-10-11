import Controller from '@ember/controller';
import { themeColorString } from 'ember-skeleton/helpers/ember-skeleton/theme-color-string';
import { inject as service } from '@ember/service';

export default Controller.extend({
  emberSkeleton: service(),
  init() {
    this._super(...arguments);
    this.fallBackOption = themeColorString(["active"]);
    this.defaultAssociations = themeColorString(["active"], {defaultAssociations: this.get('emberSkeleton.themeColorStringDefaults')});
    this.hashIncluded = themeColorString(["foo"], {foo:'warning'});
    this.hashOverridesDefaults = themeColorString(["active"], {defaultAssociations: this.get('emberSkeleton.themeColorStringDefaults'), active:'warning'});
  }
});
