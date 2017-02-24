import nestedList from './nested-list';

import { expect } from 'chai';
import { clearData, updateData } from '../actions/nested-list';

describe('nested list reducer', () => {
  const initialState = nestedList(undefined, {});

  describe('on action CLEAR_NESTED_LIST', () => {
    it('returns initialState', () => {
      expect(nestedList(123, clearData())).to.equals(initialState);
    });
  });

  describe('on action UPDATE_NESTED_LIST', () => {
    it('returns the payload', () => {
      expect(nestedList(initialState, updateData()))
    });
  });
});
