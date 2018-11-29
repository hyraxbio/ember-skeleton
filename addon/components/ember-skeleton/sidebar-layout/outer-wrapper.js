import Component from '@ember/component';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';
import { inject as service } from '@ember/service';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/outer-wrapper';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['wrapper', 'sidebar-layout'],
  classNameBindings: ['classes', 'basicLayoutControls.navCollapsed:nav-collapsed', 'basicLayoutControls.navToggled:nav-toggled', 'basicLayoutControls.userUiState.freezeNavigation:nav-frozen', 'basicLayoutControls.hideContent:hide-content:show-content'],
  basicLayoutControls: service(),

  willRender: function() {
    once(this, function() {
      this.set('basicLayoutControls.navCollapsed', JSON.parse(localStorage.getItem('userNavCollapsed')));
    });
  },

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

  turnOffInitialLoad: observer('session.hideContent', function() {
    if (this.get('basicLayoutControls.hideContent') === false) {
      this.set('initialLoad', false);
    }
  }),
});