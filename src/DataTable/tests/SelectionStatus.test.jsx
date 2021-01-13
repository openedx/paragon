import React from 'react';
import { mount } from 'enzyme';

import SelectionStatus, { SELECT_ALL_TEST_ID, CLEAR_SELECTION_TEST_ID } from '../SelectionStatus';

const props = {
  numberOfSelectedRows: 4,
  toggleAllRowsSelected: () => {},
  itemCount: 101,
};

describe('<SelectionStatus />', () => {
  it('Shows the number of rows selected', () => {
    const wrapper = mount(<SelectionStatus {...props} />);
    expect(wrapper.text()).toContain(props.numberOfSelectedRows);
  });
  it('Shows that all rows are selected', () => {
    const wrapper = mount(<SelectionStatus {...props} numberOfSelectedRows={101} />);
    expect(wrapper.text()).toContain('All 101');
  });
  it('does not show select all button if all rows are selected', () => {
    const wrapper = mount(<SelectionStatus {...props} numberOfSelectedRows={101} />);
    const button = wrapper.find(`button.${SELECT_ALL_TEST_ID}`);
    expect(button.length).toEqual(0);
  });
  it('toggles select all on select all button click', () => {
    const toggleAllRowsSpy = jest.fn();
    const wrapper = mount(<SelectionStatus {...props} toggleAllRowsSelected={toggleAllRowsSpy} />);
    const button = wrapper.find(`button.${SELECT_ALL_TEST_ID}`);
    button.simulate('click');
    expect(toggleAllRowsSpy).toHaveBeenCalledTimes(1);
    expect(toggleAllRowsSpy).toHaveBeenCalledWith(true);
  });
  it('does not render the clear selection button if there are no selected rows', () => {
    const wrapper = mount(<SelectionStatus {...props} numberOfSelectedRows={0} />);
    expect(wrapper.find(CLEAR_SELECTION_TEST_ID).length).toEqual(0);
  });
  it('toggles select all on clear all button click', () => {
    const toggleAllRowsSpy = jest.fn();
    const wrapper = mount(<SelectionStatus {...props} toggleAllRowsSelected={toggleAllRowsSpy} />);
    const button = wrapper.find(`button.${CLEAR_SELECTION_TEST_ID}`);
    button.simulate('click');
    expect(toggleAllRowsSpy).toHaveBeenCalledTimes(1);
    expect(toggleAllRowsSpy).toHaveBeenCalledWith(false);
  });
});
