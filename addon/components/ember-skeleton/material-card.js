import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../../templates/components/ember-skeleton/material-card';
import themeColorStringUtil from 'ember-skeleton/utils/theme-color-string';

@tagName('')
@templateLayout(layout)
export default class MaterialCard extends Component {
  classes = ' border rounded padding-lg card-box-shadow ';
  @service
  emberSkeleton;

  @tracked borderColorProp;
  @tracked depth;

  get borderColor() {
    if (!this.borderColorProp) {
      return;
    }
    return `border-${themeColorStringUtil(
      this.borderColorProp,
      this.themeColorStringHash
    )}`;
  }

  get shadowLevel() {
    if (!this.depth) {
      return;
    }
    return `card-box-shadow-level-${this.depth}`;
  }
}
