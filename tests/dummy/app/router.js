import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() { 
    /* Your docs routes go here */ 
    this.route('not-found', { path: '/*path' });
    this.route('helpers');
    this.route('styles');
    this.route('layout-components');
    this.route('utility-components');
    this.route('ember-skeleton-service');
  });

});

export default Router;
