import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/panel-layout/outer-wrapper';

@tagName('')
@templateLayout(layout)
export default class OuterWrapper extends Component {
  @service
  emberSkeleton;

  dataTestId = 'ember-skeleton-panel-layout';
}
