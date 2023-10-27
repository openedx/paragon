import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ControlledSelect from '../ControlledSelect';
import DataTable from '../..';
import * as selectActions from '../data/actions';

// eslint-disable-next-line react/prop-types
function ControlledSelectWrapper({ tableProps, selectProps, ...rest }) {
  return (
    <DataTable {...tableProps}>
      <ControlledSelect {...selectProps} {...rest} />
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

  it('correctly selects a row', async () => {
    const isChecked = true;
    mockGetToggleRowSelectedProps.mockReturnValue({ checked: isChecked });
    const spy = jest.spyOn(selectActions, 'addSelectedRowAction');
    const row = { ...baseRow, isSelected: false };
    const selectProps = { row };
    render(<ControlledSelectWrapper tableProps={tableProps} selectProps={selectProps} />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(row, tableProps.itemCount);
  });

  it('correctly unselects a row', async () => {
    const isChecked = false;
    mockGetToggleRowSelectedProps.mockReturnValue({ checked: isChecked });
    const spy = jest.spyOn(selectActions, 'deleteSelectedRowAction');
    const row = { ...baseRow, isSelected: true };
    const selectProps = { row };
    render(<ControlledSelectWrapper tableProps={tableProps} selectProps={selectProps} />);

    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    expect(spy).toHaveBeenCalledWith(row.id);
  });
});
