import { tracked } from '@glimmer/tracking';
import Service from '@ember/service';
import emberSkeletonOptions from 'ember-skeleton/utils/ember-skeleton-options';

export default class EmberSkeletonService extends Service {
  layoutType = 'main';

  @tracked layoutType;
  @tracked isLoading;

  get options() {
    return emberSkeletonOptions();
  }

  get hideMainContent() {
    return this.layoutType !== 'main' || this.isLoading;
  }

  toggleSidebarExpanded() {
    this.toggleProperty('sidebarCollapsed');
    localStorage.setItem(
      'userSidebarCollapsed',
      this.emberSkeleton.sidebarCollapsed
    );
    this.set('sidebarToggled', true);
  }
}
