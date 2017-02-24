import { clearData, updateData, updateDataAsync } from './nested-list';

import { expect } from 'chai';
import sinon from 'sinon';
import { forEach } from 'underscore';

describe('nested list actions', () => {
  describe('updateData()', () => {
    it('returns action', () => {
      const data = { a: Math.random() };
      const action = sinon.match({
        type: sinon.match.string,
        payload: data
      });

      expect(updateData(data)).to.satisfy(action.test);
    });
  });

  describe('updateDataAsync()', () => {
    const spies = {
      dispatch: sinon.spy(),
      updateData: sinon.spy(),
    };

    afterEach(() => {
      forEach(spies, (spy) => spy.reset());
    });

    it('dispatches data', () => {
      const data = { b: Math.random() };

      return updateDataAsync(data)(spies.dispatch)
        .then(() => {
          expect(spies.dispatch).to.have.been.calledWith(updateData(data));
        });
    });
  });

  describe('clearData()', () => {
    it('returns action', () => {
      const action = sinon.match({ type: sinon.match.string });

      expect(clearData()).to.satisfy(action.test);
    });
  });
});
