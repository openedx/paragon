import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ControlledSelectHeader from '../ControlledSelectHeader';
import DataTable from '../..';
import DataTableContext from '../../DataTableContext';
import * as selectActions from '../data/actions';
import { getRowIds } from '../data/helpers';

function DataTableContextChild() {
  const contextValue = useContext(DataTableContext);
  return (
    <div className="context-value" data-contextvalue={contextValue} />
  );
}

// eslint-disable-next-line react/prop-types
function ControlledSelectHeaderWrapper({ tableProps, selectProps, ...rest }) {
  return (
    <DataTable {...tableProps}>
      <ControlledSelectHeader {...selectProps} {...rest} />
      <DataTableContextChild />
    </DataTable>
  );
}

const mockToggleAllPageRowsSelectedProps = jest.fn();
const rows = [{ id: 1 }, { id: 2 }];
const tableProps = {
  columns: [],
  data: [],
  itemCount: 2,
  getToggleAllPageRowsSelectedProps: mockToggleAllPageRowsSelectedProps,
  state: {
    selectedRowIds: [],
  },
};

describe('<ControlledSelectHeader />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('correctly selects all page rows', () => {
    const isChecked = true;
    mockToggleAllPageRowsSelectedProps.mockReturnValue({
      checked: isChecked,
      indeterminate: false,
    });
    const spy = jest.spyOn(selectActions, 'setSelectedRowsAction');
    const selectProps = { rows };
    render(<ControlledSelectHeaderWrapper tableProps={tableProps} selectProps={selectProps} />);

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(rows, tableProps.itemCount);
  });

  it('correctly unselects all page rows', () => {
    const spy = jest.spyOn(selectActions, 'clearPageSelectionAction');
    mockToggleAllPageRowsSelectedProps.mockReturnValue({
      checked: false,
      indeterminate: false,
    });
    const selectProps = { rows };
    const selectedRowIds = {};
    rows.forEach((row) => {
      selectedRowIds[row.id] = true;
    });
    const newTableProps = {
      ...tableProps,
      state: { selectedRowIds },
      isAllPageRowsSelected: true,
    };
    render(<ControlledSelectHeaderWrapper tableProps={newTableProps} selectProps={selectProps} />);

    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    expect(spy).toHaveBeenCalledTimes(1);
    const rowIds = getRowIds(rows).map(id => id.toString());
    expect(spy).toHaveBeenCalledWith(rowIds);
  });

  it('correctly shows indeterminate checkbox when some page rows (not all) are selected', () => {
    const isIndeterminate = true;
    mockToggleAllPageRowsSelectedProps.mockReturnValue({
      indeterminate: isIndeterminate,
    });
    const selectProps = { rows };
    const newTableProps = {
      ...tableProps,
      state: {
        selectedRowIds: {
          [rows[0].id]: true,
        },
      },
    };
    render(<ControlledSelectHeaderWrapper tableProps={newTableProps} selectProps={selectProps} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.indeterminate).toEqual(isIndeterminate);
  });
});
