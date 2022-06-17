import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import SmartStatus from '../SmartStatus';
import DataTableContext from '../DataTableContext';
import FilterStatus from '../FilterStatus';
import RowStatus from '../RowStatus';
import SelectionStatus from '../selection/SelectionStatus';

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
  itemCount,
  SelectionStatusComponent: SelectionStatus,
  FilterStatusComponent: FilterStatus,
  RowStatusComponent: RowStatus,
};

// eslint-disable-next-line react/prop-types
const SmartStatusWrapper = ({ value, props }) => (
  <IntlProvider locale="en" messages={{}}>
    <DataTableContext.Provider value={value}>
      <SmartStatus {...props} />
    </DataTableContext.Provider>
  </IntlProvider>
);

describe('<SmartStatus />', () => {
  it('Shows the selection status if rows are selected', () => {
    const wrapper = mount(
      <SmartStatusWrapper value={{ ...instance, state: {}, selectedFlatRows: Array(5) }} />,
    );
    expect(wrapper.find(SelectionStatus)).toHaveLength(1);
  });
  it('Shows the filter state with selection turned off', () => {
    const wrapper = mount(<SmartStatusWrapper value={{ ...instance, state: { filters } }} />);
    const status = wrapper.find(SmartStatus);
    expect(status.text()).toContain(filterNames.join(', '));
  });
  it('Shows the filter state when there are no selected rows', () => {
    const wrapper = mount(
      <SmartStatusWrapper value={{ ...instance, state: { filters }, selectedFlatRows: [] }} />,
    );
    const status = wrapper.find(SmartStatus);
    expect(status.text()).toContain(filterNames.join(', '));
  });
  it('Shows the number of items on the page if the there are no selected rows and no filters', () => {
    const wrapper = mount(
      <SmartStatusWrapper value={instance} />,
    );
    const status = wrapper.find(SmartStatus);
    expect(status.text()).toContain(`Showing ${instance.page.length} of ${itemCount}`);
  });
  it('Shows the number of items on the page if selection is off and there are no filters', () => {
    const wrapper = mount(
      <SmartStatusWrapper value={instance} />,
    );
    const status = wrapper.find(SmartStatus);
    expect(status.text()).toContain(`Showing ${instance.page.length} of ${itemCount}`);
  });
  it('shows an alternate selection status', () => {
    const altStatusText = 'horses R cool';
    const AltStatus = () => <div>{altStatusText}</div>;
    const wrapper = mount(<SmartStatusWrapper
      value={{
        ...instance, SelectionStatusComponent: AltStatus, state: {}, selectedFlatRows: Array(5),
      }}
    />);
    expect(wrapper.text()).toContain(altStatusText);
  });
  it('shows an alternate row status', () => {
    const altStatusText = 'horses R cool';
    const AltStatus = () => <div>{altStatusText}</div>;
    const wrapper = mount(<SmartStatusWrapper
      value={{ ...instance, RowStatusComponent: AltStatus }}
    />);
    expect(wrapper.text()).toContain(altStatusText);
  });
  it('shows an alternate filter status', () => {
    const altStatusText = 'horses R cool';
    const AltStatus = () => <div>{altStatusText}</div>;
    const wrapper = mount(<SmartStatusWrapper
      value={{ ...instance, FilterStatusComponent: AltStatus, state: { filters } }}
    />);
    expect(wrapper.text()).toContain(altStatusText);
  });
});
