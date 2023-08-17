import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/material-card';
import themeColorStringUtil from 'ember-skeleton/utils/theme-color-string';

@tagName('')
@templateLayout(layout)
export default class MaterialCard extends Component {
  init() {
    super.init(...arguments);
    this.classes = ' border rounded padding-lg card-box-shadow';
  }

  // classNameBindings: ['borderColor', 'shadowLevel'],
  @service
  emberSkeleton;

  @computed('borderColorProp')
  get borderColor() {
    if (!this.borderColorProp) {
      return;
    }
    return `border-${themeColorStringUtil(
      this.borderColorProp,
      this.themeColorStringHash
    )}`;
  }

  @computed('depth')
  get shadowLevel() {
    if (!this.depth) {
      return;
    }
    return `card-box-shadow-level-${this.depth}`;
  }
}
