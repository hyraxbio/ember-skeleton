import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { computed } from '@ember/object';
import Component from '@ember/component';
import contrastColour from 'ember-skeleton/utils/contrast-colour';
import layout from '../../templates/components/ember-skeleton/dynamic-colour-badge';
import { htmlSafe } from '@ember/template';

@tagName('')
@templateLayout(layout)
export default class DynamicColourBadge extends Component {
  @computed('background')
  get textClass() {
    return this.background ? `text-${contrastColour(this.background)}` : null;
  }

  @computed('background')
  get style() {
    return this.background
      ? { background: `#${this.background}`.replace('##', '#') }
      : null;
  }
}
