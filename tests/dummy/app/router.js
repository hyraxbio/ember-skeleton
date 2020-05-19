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
    this.route('default-options');
    this.route('page-layouts');
    this.route('layout-components');
    this.route('styles');
    this.route('utility-components');
    this.route('page-loading-state');
    this.route('theme-icon');
    this.route('theme-color-string');
    this.route('humanise-string');
    this.route('custom-inflector');
    this.route('replace-string');
    this.route('readable-file-size');
  });


});

export default Router;
