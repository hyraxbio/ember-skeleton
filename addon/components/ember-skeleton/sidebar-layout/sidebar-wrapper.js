import { layout as templateLayout, tagName } from '@ember-decorators/component';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from '../../../templates/components/ember-skeleton/sidebar-layout/sidebar-wrapper';

@tagName('')
@templateLayout(layout)
export default class SidebarWrapper extends Component {
  @service
  emberSkeleton;
}
