import React from 'react';
import { mount } from 'enzyme';
import { ExpandLess, ExpandMore } from 'icons';
import ExpandRow from '../ExpandRow';
import { IconButton } from '../..';

const row = {
  isExpanded: false,
  getToggleRowExpandedProps: () => {},
};

describe('<ExpandRow />', () => {
  it('renders expand row element if rows is not expanded', () => {
    const wrapper = mount(<ExpandRow row={row} />);
    const labelWrapper = wrapper.find('span');
    expect(labelWrapper.exists()).toEqual(true);
    const iconButton = wrapper.find(IconButton);
    expect(iconButton.prop('src')).toEqual(ExpandMore);
    expect(iconButton.prop('alt')).toEqual('Expand row');
  });
  it('renders collapse row element if row is expanded', () => {
    const wrapper = mount(<ExpandRow row={{ ...row, isExpanded: true }} />);
    const labelWrapper = wrapper.find('span');
    expect(labelWrapper.exists()).toEqual(true);
    const iconButton = wrapper.find(IconButton);
    expect(iconButton.prop('src')).toEqual(ExpandLess);
    expect(iconButton.prop('alt')).toEqual('Collapse row');
  });
});
