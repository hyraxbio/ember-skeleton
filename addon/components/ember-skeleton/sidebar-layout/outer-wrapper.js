import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/outer-wrapper';

@templateLayout(layout)
@tagName('')
export default class OuterWrapper extends Component {
  @service
  emberSkeleton;

  dataTestId = 'ember-skeleton-sidebar-layout';
}
