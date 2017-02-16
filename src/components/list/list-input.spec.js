import ListInput from './list-input';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

describe('<ListInput/>', () => {
  let wrapper;

  const spies = {
    onSubmit: sinon.spy(),
  };

  beforeEach(() => {
    const props = { onSubmit: spies.onSubmit };

    wrapper = shallow(<ListInput { ...props }/>);
  })

  it('should render', () => {
    expect(wrapper).to.not.be.blank();
  });

  describe('<input/>', () => {
    it('should update the state on change', () => {
      const newValue = 'new value';

      expect(wrapper).to.have.state('value').equals('');

      wrapper.find('input')
        .simulate('change', { target: { value: newValue } });

      expect(wrapper).to.have.state('value').equals(newValue);
    });
  });
});
