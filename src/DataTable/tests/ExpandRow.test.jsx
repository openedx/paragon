import React from 'react';
import { shallow } from 'enzyme';
import ExpandRow from '../ExpandRow';
import { Add, Remove } from '../../../icons';

const row = {
  isExpanded: false,
  getToggleRowExpandedProps: () => {},
};

describe('<ExpandRow />', () => {
  it('renders expand row element if rows is not expanded', () => {
    const wrapper = shallow(<ExpandRow row={row} />);
    const labelWrapper = wrapper.find('span');
    expect(labelWrapper.exists()).toEqual(true);
    expect(wrapper.find(Add).exists()).toEqual(true);
  });
  it('renders collapse row element if row is expanded', () => {
    const wrapper = shallow(<ExpandRow row={{ ...row, isExpanded: true }} />);
    const labelWrapper = wrapper.find('span');
    expect(labelWrapper.exists()).toEqual(true);
    expect(wrapper.find(Remove).exists()).toEqual(true);
  });
});
