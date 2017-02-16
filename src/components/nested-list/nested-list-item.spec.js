import NestedListItem from './nested-list-item';

import { mount } from 'enzyme';
import React from 'react';
import { expect } from 'chai';

describe('<NestedListItem />', () => {
  const mountWithData = (data) => mount(<NestedListItem data={data} />);
  const assertText = (data, text) => {
    const wrapper = mountWithData(data);

    expect(wrapper).to.have.text(text);
  };

  it('renders true', () => assertText(true, 'true'));
  it('renders false', () => assertText(false, 'false'));
  it('renders null', () => assertText(null, 'null'));
  it('renders string', () => assertText('abc', 'abc'));
  it('renders number', () => assertText(1.2, '1.2'));

  it('renders an nested array', () => {
    const wrapper = mountWithData([
      1,
      [2, 3, 4],
      { a: 5, },
      null,
      'abc'
    ]);

    expect(wrapper.childAt(0)).to.have.text('1');

    const innerArray = wrapper.childAt(1).find('.nested-list-item--array');

    expect(innerArray.childAt(0)).to.have.text('2');
    expect(innerArray.childAt(1)).to.have.text('3');
    expect(innerArray.childAt(2)).to.have.text('4');

    const innerObject = wrapper.childAt(2).find('.nested-list-item--object');

    expect(innerObject.childAt(0)).to.have.text('a: 5');

    expect(wrapper.childAt(3)).to.have.text('null');
    expect(wrapper.childAt(4)).to.have.text('abc');
  });

  it('renders a nested object', () => {
    const wrapper = mountWithData({
      a: 1,
      b: [2, 3, 4],
      c: { d: 5 },
      e: 'abc',
      f: null,
    });

    expect(wrapper.childAt(0)).to.have.text('a: 1');

    const innerArray = wrapper.childAt(1).find('.nested-list-item--array');

    expect(innerArray.childAt(0)).to.have.text('2');
    expect(innerArray.childAt(1)).to.have.text('3');
    expect(innerArray.childAt(2)).to.have.text('4');

    const innerObject = wrapper.childAt(2).find('.nested-list-item--object');

    expect(innerObject).to.have.text('d: 5');

    expect(wrapper.childAt(3)).to.have.text('e: abc');
    expect(wrapper.childAt(4)).to.have.text('f: null');
  });
});
