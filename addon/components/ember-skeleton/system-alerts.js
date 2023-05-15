import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-skeleton/system-alerts';

export default Component.extend({
  layout,
  tagName: "",
  dismissible: true,

  alertTypeClass: computed('systemAlert.type', function() {
    return `alert-${this.systemAlert.type}`;
  }),

  actions: {
    dismissMessage: function() {
      this.set('systemAlert', null);
    }
  }
});