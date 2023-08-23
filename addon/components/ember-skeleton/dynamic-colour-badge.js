import { tracked } from '@glimmer/tracking';
import { layout as templateLayout, tagName } from '@ember-decorators/component';
import Component from '@ember/component';
import contrastColour from 'ember-skeleton/utils/contrast-colour';
import layout from '../../templates/components/ember-skeleton/dynamic-colour-badge';

@tagName('')
@templateLayout(layout)
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
