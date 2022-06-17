import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import FilterStatus from '../FilterStatus';
import { Button } from '../..';
import DataTableContext from '../DataTableContext';

const filterNames = ['color', 'breed', 'discipline'];
const filters = filterNames.map((name) => ({ id: name }));
const instance = { state: { filters }, setAllFilters: () => {} };
const filterProps = {
  buttonClassName: 'buttonClass',
  variant: 'variant',
  size: 'lorge',
  onClick: () => {},
  clearFiltersText: 'CLEAR ME',
  className: 'filterClass',
  showFilteredFields: true,
};
const filterPropsNoFiltered = {
  ...filterProps,
  showFilteredFields: false,
  clearFiltersText: '',
};

// eslint-disable-next-line react/prop-types
const FilterStatusWrapper = ({ value, props }) => (
  <IntlProvider locale="en" messages={{}}>
    <DataTableContext.Provider value={value}>
      <FilterStatus {...props} />
    </DataTableContext.Provider>
  </IntlProvider>
);

describe('<FilterStatus />', () => {
  it('passes props to the button', () => {
    const wrapper = mount(<FilterStatusWrapper value={instance} props={filterProps} />);
    const buttonProps = wrapper.find(Button).props();
    expect(buttonProps.className).toEqual(filterProps.buttonClassName);
    expect(buttonProps.variant).toEqual(filterProps.variant);
    expect(buttonProps.size).toEqual(filterProps.size);
  });
  it('sets the button text', () => {
    const wrapper = mount(<FilterStatusWrapper value={instance} props={filterProps} />);
    expect(wrapper.find(Button).text()).toEqual(filterProps.clearFiltersText);
  });
  it('clears the selection on click', () => {
    const clearSpy = jest.fn();
    const wrapper = mount(<FilterStatusWrapper value={{ ...instance, setAllFilters: clearSpy }} props={filterProps} />);
    wrapper.find(Button).simulate('click');
    expect(clearSpy).toHaveBeenCalledTimes(1);
    expect(clearSpy).toHaveBeenCalledWith([]);
  });
  it('displays the current filter names', () => {
    const wrapper = mount(<FilterStatusWrapper value={instance} props={filterProps} />);
    expect(wrapper.text()).toContain(filterNames.join(', '));
  });
  it('sets class names on the parent', () => {
    const wrapper = mount(<FilterStatusWrapper value={instance} props={filterProps} />);
    const statusDiv = wrapper.find('div');
    expect(statusDiv.props().className).toEqual(filterProps.className);
  });
  it('returns null if setAllFilters is not present (table is not filterable)', () => {
    const wrapper = mount(<FilterStatusWrapper value={{}} props={filterProps} />);
    expect(wrapper.text()).toEqual('');
  });
  it('hides filter text', () => {
    const wrapper = mount(<FilterStatusWrapper value={instance} props={filterPropsNoFiltered} />);
    expect(wrapper.text()).toEqual('');
  });
});
