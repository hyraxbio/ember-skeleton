import Service from '@ember/service';
import EmberSkeletonOptions from 'ember-skeleton/utils/ember-skeleton-options';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.options = EmberSkeletonOptions();
  }
  
});
