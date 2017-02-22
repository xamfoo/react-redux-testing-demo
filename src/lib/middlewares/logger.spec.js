import logger, { __RewireAPI__ } from './logger';

import { expect } from 'chai';
import sinon from 'sinon';
import { forEach, noop } from 'underscore';
import mockStore from '../testing/mock-store';
import middlewares from '../middlewares';

describe('logger middleware', () => {
  const spies = {
    log: sinon.spy(),
  };

  beforeEach(() => {
    __RewireAPI__.__Rewire__('log', spies.log);
  });

  afterEach(() => {
    __RewireAPI__.__ResetDependency__('log');
  });

  it('logs action and state', () => {
    const store = mockStore({}, [...middlewares, logger]);
    const action = {
      type: 'actionType',
      payload: 'payload',
    };

    store.dispatch(action);

    expect(spies.log.args[0]).to.deep.equal(['dispatching', action]);
    expect(spies.log.args[1][0]).to.equal('next state');
    expect(spies.log.args[1][1]).to.equal(store.getState());
  });
});
