import React, { useContext } from 'react';
import { mount } from 'enzyme';

import ControlledSelectHeader from '../ControlledSelectHeader';
import DataTable from '../..';
import { CheckboxControl } from '../../../Form';
import DataTableContext from '../../DataTableContext';
import * as selectActions from '../data/actions';
import { toggleCheckbox } from './utils';
import { getRowIds } from '../data/helpers';

// eslint-disable-next-line react/prop-types
function ControlledSelectHeaderWrapper({ tableProps, selectProps }) {
  return (
    <DataTable {...tableProps}>
      <ControlledSelectHeader {...selectProps} />
      <DataTableContextChild />
    </DataTable>
  );
}

function DataTableContextChild() {
  const contextValue = useContext(DataTableContext);
  return (
    <div className="context-value" data-contextvalue={contextValue} />
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
    const wrapper = mount(
      <ControlledSelectHeaderWrapper tableProps={tableProps} selectProps={selectProps} />,
    );
    toggleCheckbox({ isChecked, wrapper });
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
    const wrapper = mount(
      <ControlledSelectHeaderWrapper tableProps={newTableProps} selectProps={selectProps} />,
    );
    toggleCheckbox({ isChecked: false, wrapper });
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
    const wrapper = mount(
      <ControlledSelectHeaderWrapper tableProps={newTableProps} selectProps={selectProps} />,
    );

    const actualIsIndeterminate = wrapper.find(CheckboxControl).prop('isIndeterminate');
    expect(actualIsIndeterminate).toEqual(isIndeterminate);
  });
});
