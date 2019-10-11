import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // Routes for tests
  this.route('simple-layout');
  this.route('sidebar-layout');
  this.route('theme-color-string-acceptance');
});

export default Router;
