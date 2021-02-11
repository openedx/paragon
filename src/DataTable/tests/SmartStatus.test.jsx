import React from 'react';
import { mount } from 'enzyme';

import SmartStatus from '../SmartStatus';
import SelectionState from '../SelectionStatus';
import DataTableContext from '../DataTableContext';

const filters = [{ id: 'name' }, { id: 'age' }];
const filterNames = ['name', 'age'];
const itemCount = 101;
const instance = {
  state: {},
  selectedFlatRows: [],
  page: Array(3),
  // FilterStatus uses this as a proxy for filterability
  setAllFilters: () => {},
  toggleAllRowsSelected: () => {},
};

// eslint-disable-next-line react/prop-types
const SmartStatusWrapper = ({ value, props }) => (
  <DataTableContext.Provider value={value}><SmartStatus {...props} /></DataTableContext.Provider>);

describe('<SmartStatus />', () => {
  it('Shows the selection status if rows are selected', () => {
    const wrapper = mount(
      <SmartStatusWrapper value={{ ...instance, state: {}, selectedFlatRows: Array(5) }} props={{ itemCount: 101 }} />,
    );
    expect(wrapper.find(SelectionState)).toHaveLength(1);
  });
  it('Shows the filter state with selection turned off', () => {
    const wrapper = mount(<SmartStatusWrapper value={{ ...instance, state: { filters } }} props={{ itemCount }} />);
    const status = wrapper.find(SmartStatus);
    expect(status.text()).toContain(filterNames.join(', '));
  });
  it('Shows the filter state when there are no selected rows', () => {
    const wrapper = mount(
      <SmartStatusWrapper value={{ ...instance, state: { filters }, selectedFlatRows: [] }} props={{ itemCount }} />,
    );
    const status = wrapper.find(SmartStatus);
    expect(status.text()).toContain(filterNames.join(', '));
  });
  it('Shows the number of items on the page if the there are no selected rows and no filters', () => {
    const wrapper = mount(
      <SmartStatusWrapper value={instance} props={{ itemCount }} />,
    );
    const status = wrapper.find(SmartStatus);
    expect(status.text()).toContain(`Showing ${instance.page.length} of ${itemCount}`);
  });
  it('Shows the number of items on the page if selection is off and there are no filters', () => {
    const wrapper = mount(
      <SmartStatusWrapper value={instance} props={{ itemCount }} />,
    );
    const status = wrapper.find(SmartStatus);
    expect(status.text()).toContain(`Showing ${instance.page.length} of ${itemCount}`);
  });
});
