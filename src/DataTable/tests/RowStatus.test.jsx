import React from 'react';
import { mount } from 'enzyme';

import RowStatus from '../RowStatus';

const props = {
  pageSize: 10,
  itemCount: 30,
  className: 'rowClass',
};

describe('<RowStatus />', () => {
  it('displays the row status', () => {
    const wrapper = mount(<RowStatus {...props} />);
    expect(wrapper.text()).toEqual(`Showing ${props.pageSize} of ${props.itemCount}`);
  });
  it('sets class names on the parent', () => {
    const wrapper = mount(<RowStatus {...props} />);
    expect(wrapper.props().className).toEqual(props.className);
  });
});
