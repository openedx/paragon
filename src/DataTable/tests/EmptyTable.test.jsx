import React from 'react';
import { mount } from 'enzyme';

import EmptyTableContent from '../EmptyTableContent';

const props = {
  className: 'foo',
  content: 'Nothing here',
};

describe('<EmptyTableContent />', () => {
  const wrapper = mount(<EmptyTableContent {...props} />);
  it('displays the content', () => {
    expect(wrapper.text()).toEqual(props.content);
  });
  it('adds props to the div', () => {
    const cell = wrapper.find('div');
    expect(cell.props().className).toEqual(`pgn__data-table-empty ${props.className}`);
  });
});
