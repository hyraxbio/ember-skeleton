import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-skeleton/system-alerts';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['alert'],
  classNameBindings: ['dismissible:alert-dismissible', 'alertTypeClass'],
  attributeBindings: ['data-test-id'],
  dismissible: true,

  alertTypeClass: computed('systemAlert.type', function() {
    return `alert-${this.get('systemAlert.type')}`;
  }),

  actions: {
    dismissMessage: function() {
      this.set('systemAlert', null);
    }
  }
});