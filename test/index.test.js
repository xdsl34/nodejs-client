
import assert from 'assert';
import {three} from "./../src/index.js";
describe('Index', function() {
  describe('three()', function() {
    it('should return 3', async function() {
      const result = await three()
      assert.strictEqual(result,3);
    });
  });
});