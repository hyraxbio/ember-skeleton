import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SidebarWrapper extends Component {
  @service
  emberSkeleton;

  @action
  checkToggled() {
    if (localStorage.getItem('userSidebarCollapsed')) {
      this.emberSkeleton.sidebarCollapsed = true;
    }
  }
}
