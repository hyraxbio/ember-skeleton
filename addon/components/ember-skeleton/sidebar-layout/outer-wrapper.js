import Component from '@ember/component';
import { observer } from '@ember/object';
import { inject as service } from '@ember/service';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/outer-wrapper';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  emberSkeleton: service(),
  tagName: 'div',
  classNames: ['wrapper', 'sidebar-layout'],
  classNameBindings: ['classes', 'emberSkeleton.hideContent:hide-content:show-content', 'contentHeader:content-header', 'emberSkeleton.navFrozen:nav-frozen'],
  attributeBindings: ['dataTestId:data-test-id'],
  dataTestId: 'ember-skeleton-sidebar-layout',

  didInsertElement: function() {
    var self = this;
    this.set('initialLoad', true);
    if (this.get('emberSkeleton.hideContent')) {
      setTimeout(function() {
        if (self.get('initialLoad')) {
          self.set('emberSkeleton.hideContent', false);
        }
      }, 20000);
    }
  },

  headerComponent: computed('emberSkeleton.settings.headerComponent', function() {
    return this.get('emberSkeleton.settings.headerComponent');
  }),

  turnOffInitialLoad: observer('emberSkeleton.hideContent', function() {
    if (this.get('emberSkeleton.hideContent') === false) {
      this.set('initialLoad', false);
    }
  }),
});