import { add, minus, isNegative, isEven } from './math';

import assert from 'assert';

describe('math', () => {
  describe('add()', () => {
    it('should add 2 numbers', () => {
      const a = Math.random();
      const b = Math.random();
      const result = add(a, b);

      assert.equal(result, a + b);
    });
  });

  describe('isNegative()', () => {
    it('should return true for negative numbers', () => {
      const a = Math.random() - 1;
      const b = Math.random() - 1;

      assert.equal(isNegative(a), true);
      assert.equal(isNegative(b), true);
    });
  });

  describe('isEven()', () => {
    it('should return true for even numbers', () => {
      const a = 2;
      const b = a * Math.floor(Math.random() * 100);

      assert.equal(isEven(), true);
      assert.equal(isEven(), true);
    });
  });
});
