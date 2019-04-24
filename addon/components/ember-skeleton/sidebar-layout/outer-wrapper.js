import Component from '@ember/component';
import { observer } from '@ember/object';
import { inject as service } from '@ember/service';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/outer-wrapper';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  basicLayoutControls: service(),
  emberSkeleton: service(),
  tagName: 'div',
  classNames: ['wrapper', 'sidebar-layout'],
  classNameBindings: ['classes', 'basicLayoutControls.hideContent:hide-content:show-content', 'contentHeader:content-header'],


  didInsertElement: function() {
    var self = this;
    this.set('initialLoad', true);
    if (this.get('basicLayoutControls.hideContent')) {
      setTimeout(function() {
        if (self.get('initialLoad')) {
          self.set('basicLayoutControls.hideContent', false);
        }
      }, 20000);
    }
  },

  headerComponent: computed('emberSkeleton.settings.headerComponent', function() {
    return this.get('emberSkeleton.settings.headerComponent');
  }),

  turnOffInitialLoad: observer('basicLayoutControls.hideContent', function() {
    if (this.get('basicLayoutControls.hideContent') === false) {
      this.set('initialLoad', false);
    }
  }),
});