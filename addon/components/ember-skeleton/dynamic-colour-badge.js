import Component from '@ember/component';
import contrastColour from 'ember-skeleton/utils/contrast-colour';
import { computed } from '@ember/object';
import layout from '../../templates/components/ember-skeleton/dynamic-colour-badge';
import { htmlSafe } from '@ember/template';

export default Component.extend({
  tagName: '',
  layout,

  textClass: computed('background', function () {
    return this.background ? `text-${contrastColour(this.background)}` : null;
  }),

  style: computed('background', function () {
    return this.background
      ? { background: `#${this.background}`.replace('##', '#') }
      : null;
  }),
});
