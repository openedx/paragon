import React from 'react';
import { mount } from 'enzyme';
import ExpandAll from '../ExpandAll';

describe('<ExpandAll />', () => {
  it('renders expand all element if not all rows are expanded', () => {
    const wrapper = mount(<ExpandAll getToggleAllRowsExpandedProps={() => {}} isAllRowsExpanded={false} />);
    const labelWrapper = wrapper.find('span');
    expect(labelWrapper.exists()).toEqual(true);
    const collapseButton = wrapper.find('button');
    expect(collapseButton.exists()).toEqual(true);
    expect(collapseButton.text()).toContain('Expand all');
  });
  it('renders collapse all element if all rows are expanded', () => {
    const wrapper = mount(<ExpandAll getToggleAllRowsExpandedProps={() => {}} isAllRowsExpanded />);
    const labelWrapper = wrapper.find('span');
    expect(labelWrapper.exists()).toEqual(true);
    const collapseButton = wrapper.find('button');
    expect(collapseButton.exists()).toEqual(true);
    expect(collapseButton.text()).toContain('Collapse all');
  });
});
