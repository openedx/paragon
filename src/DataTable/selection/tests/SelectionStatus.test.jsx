import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import SelectionStatus from '../SelectionStatus';
import DataTableContext from '../../DataTableContext';
import {
  SELECT_ALL_TEST_ID,
  CLEAR_SELECTION_TEST_ID,
  CLEAR_SELECTION_TEXT,
} from '../data/constants';

const instance = {
  selectedFlatRows: [1, 2, 3, 4],
  toggleAllRowsSelected: () => {},
  itemCount: 101,
};

// eslint-disable-next-line react/prop-types
const SelectionStatusWrapper = ({ value, props = {} }) => (
  <IntlProvider locale="en" messages={{}}>
    <DataTableContext.Provider value={value}>
      <SelectionStatus {...props} />
    </DataTableContext.Provider>
  </IntlProvider>
);

describe('<SelectionStatus />', () => {
  it('Shows the number of rows selected', () => {
    const wrapper = mount(<SelectionStatusWrapper value={instance} />);
    expect(wrapper.text()).toContain(instance.selectedFlatRows.length);
  });
  it('Shows that all rows are selected', () => {
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, selectedFlatRows: Array(101) }} />,
    );
    expect(wrapper.text()).toContain('All 101');
  });
  it('does not show select all button if all rows are selected', () => {
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, selectedFlatRows: Array(101) }} />,
    );
    const button = wrapper.find(`button.${SELECT_ALL_TEST_ID}`);
    expect(button.length).toEqual(0);
  });
  it('toggles select all on select all button click', () => {
    const toggleAllRowsSpy = jest.fn();
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, toggleAllRowsSelected: toggleAllRowsSpy }} />,
    );
    const button = wrapper.find(`button.${SELECT_ALL_TEST_ID}`);
    button.simulate('click');
    expect(toggleAllRowsSpy).toHaveBeenCalledTimes(1);
    expect(toggleAllRowsSpy).toHaveBeenCalledWith(true);
  });
  it('does not render the clear selection button if there are no selected rows', () => {
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, selectedFlatRows: [] }} />,
    );
    expect(wrapper.find(CLEAR_SELECTION_TEST_ID).length).toEqual(0);
  });
  it('toggles select all on clear all button click', () => {
    const toggleAllRowsSpy = jest.fn();
    const wrapper = mount(
      <SelectionStatusWrapper value={{ ...instance, toggleAllRowsSelected: toggleAllRowsSpy }} />,
    );
    const button = wrapper.find(`button.${CLEAR_SELECTION_TEST_ID}`);
    button.simulate('click');
    expect(toggleAllRowsSpy).toHaveBeenCalledTimes(1);
    expect(toggleAllRowsSpy).toHaveBeenCalledWith(false);
  });
  it('renders default selection text', () => {
    const wrapper = mount(<SelectionStatusWrapper value={instance} />);
    expect(wrapper.text()).toContain(CLEAR_SELECTION_TEXT);
  });
  it('can accept clear selection text as a prop', () => {
    const customText = 'CLEAR ME';
    const wrapper = mount(<SelectionStatusWrapper value={instance} props={{ clearSelectionText: customText }} />);
    expect(wrapper.text()).toContain(customText);
    expect(wrapper.text()).not.toContain(CLEAR_SELECTION_TEXT);
  });
  it('accepts a class name', () => {
    const customClassName = 'classy';
    const wrapper = mount(<SelectionStatusWrapper value={instance} props={{ className: customClassName }} />);
    expect(wrapper.find(SelectionStatus).props().className).toEqual(customClassName);
  });
});
