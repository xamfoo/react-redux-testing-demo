import { clearNestedListData, updateNestedListData } from './nested-list';

import { expect } from 'chai';
import sinon from 'sinon';
import { forEach } from 'underscore';

describe('nested list actions', () => {

  // Example of testing async action
  describe('updateNestedListData()', () => {
    const spies = {
      dispatch: sinon.spy(),
    };

    afterEach(() => {
      forEach(spies, (spy) => spy.reset());
    });

    it('dispatches data', (done) => {
      const data = { a: 42 };
      const action = sinon.match({
        type: sinon.match.string,
        payload: data,
      });

      updateNestedListData(data)(spies.dispatch)
        .then(() => {
          expect(spies.dispatch).to.have.been.calledWith(action);
          done();
        })
        .catch(done);
    });
  });

  describe('clearNestedListData()', () => {
    it('returns action', () => {
      const action = sinon.match({ type: sinon.match.string });

      expect(clearNestedListData()).to.satisfy(action.test);
    });
  });
});
