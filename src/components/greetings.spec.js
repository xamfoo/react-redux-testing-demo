import Greetings from './greetings';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Greetings />', () => {
  it('should greet with provided name', () => {
    const name = 'name';
    const wrapper = shallow(<Greetings name={ name } />);

    expect(wrapper).to.have.text(`Hello ${name}!`);
  });
});
