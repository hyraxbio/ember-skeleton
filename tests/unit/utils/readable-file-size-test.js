import readableFileSize from 'dummy/utils/readable-file-size';
import { module, test } from 'qunit';

module('Unit | Utility | readable-file-size', function(hooks) {

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = readableFileSize();
    assert.ok(result);
  });
});
