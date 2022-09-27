import React from 'react';
import { mount } from 'enzyme';

import ControlledSelect from '../ControlledSelect';
import DataTable from '../..';
import * as selectActions from '../data/actions';
import { toggleCheckbox } from './utils';

// eslint-disable-next-line react/prop-types
function ControlledSelectWrapper({ tableProps, selectProps }) {
  return (
    <DataTable {...tableProps}>
      <ControlledSelect {...selectProps} />
    </DataTable>
  );
}

const mockGetToggleRowSelectedProps = jest.fn();
const baseRow = {
  id: 1,
  getToggleRowSelectedProps: mockGetToggleRowSelectedProps,
};
const tableProps = {
  columns: [],
  data: [],
  itemCount: 2,
};

describe('<ControlledSelect />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('correctly selects a row', () => {
    const isChecked = true;
    mockGetToggleRowSelectedProps.mockReturnValue({ checked: isChecked });
    const spy = jest.spyOn(selectActions, 'addSelectedRowAction');
    const row = { ...baseRow, isSelected: false };
    const selectProps = { row };
    const wrapper = mount(
      <ControlledSelectWrapper tableProps={tableProps} selectProps={selectProps} />,
    );
    toggleCheckbox({ isChecked, wrapper });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(row, tableProps.itemCount);
  });
  it('correctly unselects a row', () => {
    const isChecked = false;
    mockGetToggleRowSelectedProps.mockReturnValue({ checked: isChecked });
    const spy = jest.spyOn(selectActions, 'deleteSelectedRowAction');
    const row = { ...baseRow, isSelected: true };
    const selectProps = { row };
    const wrapper = mount(
      <ControlledSelectWrapper tableProps={tableProps} selectProps={selectProps} />,
    );
    toggleCheckbox({ isChecked, wrapper });
    expect(spy).toHaveBeenCalledWith(row.id);
  });
});
