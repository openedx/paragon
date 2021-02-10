import React from 'react';
import { mount } from 'enzyme';

import SelectionStatus, { SELECT_ALL_TEST_ID, CLEAR_SELECTION_TEST_ID } from '../SelectionStatus';
import DataTableContext from '../TableContext';

const instance = {
  selectedFlatRows: [1, 2, 3, 4],
  toggleAllRowsSelected: () => {},
};

const fakeProps = {
  itemCount: 101,
};

// eslint-disable-next-line react/prop-types
const SelectionStatusWrapper = ({ value, props }) => (
  <DataTableContext.Provider value={value}><SelectionStatus {...props} /></DataTableContext.Provider>
);

describe('<SelectionStatus />', () => {
  it('Shows the number of rows selected', () => {
    const wrapper = mount(<SelectionStatusWrapper value={instance} props={fakeProps} />);
    expect(wrapper.text()).toContain(instance.selectedFlatRows.length);
  });
  it('Shows that all rows are selected', () => {
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, selectedFlatRows: Array(101) }} props={fakeProps} />,
    );
    expect(wrapper.text()).toContain('All 101');
  });
  it('does not show select all button if all rows are selected', () => {
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, selectedFlatRows: Array(101) }} props={fakeProps} />,
    );
    const button = wrapper.find(`button.${SELECT_ALL_TEST_ID}`);
    expect(button.length).toEqual(0);
  });
  it('toggles select all on select all button click', () => {
    const toggleAllRowsSpy = jest.fn();
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, toggleAllRowsSelected: toggleAllRowsSpy }} props={fakeProps} />,
    );
    const button = wrapper.find(`button.${SELECT_ALL_TEST_ID}`);
    button.simulate('click');
    expect(toggleAllRowsSpy).toHaveBeenCalledTimes(1);
    expect(toggleAllRowsSpy).toHaveBeenCalledWith(true);
  });
  it('does not render the clear selection button if there are no selected rows', () => {
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, selectedFlatRows: [] }} props={fakeProps} />,
    );
    expect(wrapper.find(CLEAR_SELECTION_TEST_ID).length).toEqual(0);
  });
  it('toggles select all on clear all button click', () => {
    const toggleAllRowsSpy = jest.fn();
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, toggleAllRowsSelected: toggleAllRowsSpy }} props={fakeProps} />,
    );
    const button = wrapper.find(`button.${CLEAR_SELECTION_TEST_ID}`);
    button.simulate('click');
    expect(toggleAllRowsSpy).toHaveBeenCalledTimes(1);
    expect(toggleAllRowsSpy).toHaveBeenCalledWith(false);
  });
});
