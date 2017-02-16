import List from './list';
import ListInput from './list-input';

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('<List/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List/>);
  });

  describe('<ListInput/> - onSubmit()', () => {
    it('adds an item to end of the list', () => {
      const item1 = 'item1';
      const item2 = 'item2';

      [item1, item2].forEach((item) => {
        wrapper.find(ListInput).prop('onSubmit')(item);
      });

      expect(wrapper).to.have.state('items').deep.equal([item1, item2]);
    });
  });

  describe('<button/> - onClick()', () => {
    it('clears all items', () => {
      const initialState = ['item1', 'item2'];

      wrapper.setState({ items: initialState });

      expect(wrapper).to.have.state('items').deep.equal(initialState);

      wrapper.find('button').simulate('click');

      expect(wrapper).to.have.state('items').deep.equal([]);
    });
  });
});
