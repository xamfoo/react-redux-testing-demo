import Root from './root';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Root />', () => {
  it('should render', () => {
    const wrapper = shallow(<Root.WrappedComponent />);

    expect(wrapper).to.not.be.blank();
  });
});
