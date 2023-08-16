// BEGIN-SNIPPET loading-state-application-route.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  emberSkeleton: service(),

  actions: {
    loading(transition) {
      this.set('emberSkeleton.hideContent', true);
      transition.promise.finally(() => {
        this.set('emberSkeleton.hideContent', false);
      });
    },
  },
});
// END-SNIPPET
