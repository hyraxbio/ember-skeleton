import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sidebar-layout', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sidebar-layout');
    assert.ok(route);
  });
});
