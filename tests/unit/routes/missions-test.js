import { module, test } from 'qunit';
import { setupTest } from 'nasa/tests/helpers';

module('Unit | Route | missions', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:missions');
    assert.ok(route);
  });
});
