import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/outer-wrapper';

@templateLayout(layout)
@tagName('')
export default class OuterWrapper extends Component {
  @service
  emberSkeleton;

  dataTestId = 'ember-skeleton-sidebar-layout';

  @computed('emberSkeleton.settings.headerComponent')
  get headerComponent() {
    return this.emberSkeleton.settings.headerComponent;
  }
}
