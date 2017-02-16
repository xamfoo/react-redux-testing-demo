import defaultTo from './defaultTo';

import assert from 'assert';

describe('defaultTo()', () => {
  describe('should return original value', () => {
    it('when value is a string', () => {
      const value = 'a string';
      const result = defaultTo(value, null);

      assert.equal(result, value);
    });

    it('when value is boolean', () => {
      assert.equal(defaultTo(true, null), true);
      assert.equal(defaultTo(false, null), false);
    });
  });
});
