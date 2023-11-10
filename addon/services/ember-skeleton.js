import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import Service from '@ember/service';
import emberSkeletonOptions from 'ember-skeleton/utils/ember-skeleton-options';

export default class EmberSkeletonService extends Service {
  layoutType = 'main';

  @tracked layoutType;
  @tracked isLoading;
  @tracked sidebarCollapsed;

  get options() {
    return emberSkeletonOptions();
  }

  get hideMainContent() {
    return this.layoutType !== 'main' || this.isLoading;
  }

  @action
  toggleSidebarExpanded() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    localStorage.setItem('userSidebarCollapsed', this.sidebarCollapsed);
  }
}
