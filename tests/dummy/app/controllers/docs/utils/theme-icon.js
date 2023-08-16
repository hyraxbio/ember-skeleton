import Controller from '@ember/controller';
import { computed } from '@ember/object';
// BEGIN-SNIPPET import-theme-icon-util.js
import ThemeIconUtil from 'ember-skeleton/utils/theme-icon';
//END-SNIPPET
export default Controller.extend({
  init() {
    this._super(...arguments);
    // BEGIN-SNIPPET theme-icon-util-fallback.js
    this.set(
      'statusIconFallback',
      ThemeIconUtil('missing', { fallback: 'svg/icons/icon-info' })
    );
    //END-SNIPPET
    // BEGIN-SNIPPET theme-icon-util-no-matches.js
    this.set('statusIconNoMatches', ThemeIconUtil('info'));
    //END-SNIPPET
  },

  basicThemeIcon: computed('model', function () {
    return this.model.map((person) => {
      person.set(
        'statusIcon',
        ThemeIconUtil(person.status, {
          passed: 'svg/icons/icon-tick',
          failed: 'svg/icons/icon-alert',
        })
      );
      return person;
    });
  }),

  // BEGIN-SNIPPET theme-icon-util-defaults.js
  defaultThemeIcons: computed('model', function () {
    return this.model.map((person) => {
      person.set('statusIconDefault', ThemeIconUtil(person.status));
      return person;
    });
  }),
  //END-SNIPPET

  // BEGIN-SNIPPET theme-icon-util-default-overridden.js
  themeIconsDefaultsOverriden: computed('model', function () {
    return this.model.map((person) => {
      person.set(
        'statusIconDefaultsOverriden',
        ThemeIconUtil(person.status, { failed: 'svg/icons/icon-info' })
      );
      return person;
    });
  }),
  //END-SNIPPET
});
