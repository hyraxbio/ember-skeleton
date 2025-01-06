import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import contrastColour from 'ember-skeleton/utils/contrast-colour';

export default class DynamicColourBadge extends Component {
  @tracked background;
  get textClass() {
    return this.background ? `text-${contrastColour(this.background)}` : null;
  }

  get style() {
    return this.background
      ? { background: `#${this.background}`.replace('##', '#') }
      : null;
  }
}
