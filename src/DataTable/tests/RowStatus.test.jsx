import React from 'react';
import { mount } from 'enzyme';

import RowStatus from '../RowStatus';
import DataTableContext from '../TableContext';

const statusProps = {
  itemCount: 30,
  className: 'rowClass',
};

// eslint-disable-next-line react/prop-types
const RowStatusWrapper = ({ value = {}, props = statusProps }) => (
  <DataTableContext.Provider value={value}><RowStatus {...props} /></DataTableContext.Provider>);

describe('<RowStatus />', () => {
  it('returns null if there is no pageSize', () => {
    const wrapper = mount(<RowStatusWrapper />);
    expect(wrapper).toEqual({});
  });
  it('displays the row status with pagination', () => {
    const pageSize = 10;
    const wrapper = mount(<RowStatusWrapper value={{ page: Array(pageSize) }} />);
    expect(wrapper.text()).toEqual(`Showing ${pageSize} of ${statusProps.itemCount}`);
  });
  it('displays the row status without pagination', () => {
    const pageSize = 10;
    const wrapper = mount(<RowStatusWrapper value={{ rows: Array(pageSize) }} />);
    expect(wrapper.text()).toEqual(`Showing ${pageSize} of ${statusProps.itemCount}`);
  });
  it('sets class names on the parent', () => {
    const wrapper = mount(<RowStatusWrapper value={{ page: Array(15) }} />);
    expect(wrapper.find('div').props().className).toEqual(statusProps.className);
  });
});
