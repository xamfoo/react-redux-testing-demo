import NestedList from './nested-list';
import NestedListInput, {
  __RewireAPI__ as NestedListInputRewire,
} from './nested-list-input';

import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { identity } from 'underscore';
import mockStore from '../../lib/testing/mock-store';
import withStore from '../../lib/with-store';

describe('<NestedList/>', () => {
  const setup = (opts = {}) => {
    const store = mockStore(opts.storeState || {
      nestedList: []
    });
    const Component = withStore(store)(NestedList);
    const wrapper = mount(<Component />);

    return { store, wrapper };
  };

  describe('should render with data', () => {
    const assertData = (data) => {
      const { wrapper } = setup({
        storeState: { nestedList: data }
      });

      expect(
        wrapper.find(NestedList.WrappedComponent)
      ).to.have.prop('data').deep.equals(data);
    };

    it('when data is an array', () => assertData([1, {}, null]));
    it('when data is an object', () => assertData({ a: 1, b: {}, c: null }));
    it('when data is a number', () => assertData(42));
    it('when data is a string', () => assertData("abc"));
    it('when data is null', () => assertData(null));
  });

  // Demonstrating integration testing with children components connected to
  // redux
  describe('<NestedListInput />', () => {
    before(() => {
      // Mock debounce() so we don't have to fake timers
      NestedListInputRewire.__Rewire__('debounce', identity);
    });

    after(() => {
      NestedListInputRewire.__ResetDependency__('debounce');
    });

    it('updates data', (done) => {
      const { store, wrapper } = setup({ returnStore: true });
      const data = { a: 1, b: [2, 3], c: null, d: { e: 4 } };

      // Simulate event on children component to dispatch redux action
      wrapper.find(NestedListInput.WrappedComponent)
        .find('textarea')
        .simulate('change', {
          target: { value: JSON.stringify(data) }
        });

      const unsubscribe = store.subscribe(() => {
        // Assert prop asynchronously updated from redux state
        expect(
          wrapper.find(NestedList.WrappedComponent)
        ).to.have.prop('data').deep.equals(data);
        unsubscribe();
        done();
      });
    });
  });
});
