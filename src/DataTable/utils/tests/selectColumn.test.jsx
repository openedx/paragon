import React from 'react';
import {
  act, waitFor, render, fireEvent,
} from '@testing-library/react';

import '@testing-library/jest-dom';
import { selectColumn } from '../getVisibleColumns';
import DataTableContext from '../../DataTableContext';

const mockDataTableContextValue = {
  isSelectable: true,
  maxSelectedRows: 1,
  onMaxSelectedRows: jest.fn(),
  state: { selectedRowIds: { 0: true } },
  rows: [
    {
      id: '1',
      index: 0,
      name: 'Name 1',
      isSelected: true,
      getToggleRowSelectedProps: () => ({ indeterminate: false, title: 'Toggle Row Selected' }),
    },
    {
      id: '2',
      name: 'Name 2',
      isSelected: false,
      index: 1,
      getToggleRowSelectedProps: () => ({
        indeterminate: false,
        title: 'Toggle Row Selected',
        checked: true,
        onChange: () => {},
      }),
    },
  ],
  getTableProps: () => {},
  prepareRow: (row) => row,
  visibleColumns: [{
    Header: 'Name',
    accessor: 'name',
  }],
};

// eslint-disable-next-line react/prop-types
function RenderCellWithTestWrapper({ children, contextValue }) {
  return (
    <DataTableContext.Provider value={contextValue}>
      {children}
    </DataTableContext.Provider>
  );
}

describe('selectColumn', () => {
  const { Header, Cell } = selectColumn;

  describe('Header', () => {
    const toggleRowsSelectedProps = {
      indeterminate: false,
      title: 'Toggle All Rows Selected',
      checked: false,
      onChange: jest.fn(),
    };

    const renderWithTestWrapper = (contextValue) => render(

      <DataTableContext.Provider value={contextValue}>
        <Header
          getToggleAllPageRowsSelectedProps={() => toggleRowsSelectedProps}
          getToggleAllRowsSelectedProps={() => toggleRowsSelectedProps}
        />
      </DataTableContext.Provider>,
    );

    it('should render the CheckboxControl when isSelectable is true and maxSelectedRows is not reached', () => {
      const contextValue = {};

      const { container } = renderWithTestWrapper(contextValue);

      const checkbox = container.querySelector(
        '[data-testid="datatable-select-column-checkbox-header"]',
      );

      expect(checkbox).toBeInTheDocument();
    });

    it('should render CheckboxControl when maxSelectedRows has a value and isSelectable is not provided', () => {
      const contextValue = {
        maxSelectedRows: 5,
      };

      const { container } = renderWithTestWrapper(contextValue);
      const checkbox = container.querySelector(
        '[data-testid="datatable-select-column-checkbox-header"]',
      );

      expect(checkbox).toBeInTheDocument();
    });

    it('should render null when isSelectable is and maxSelectedRows are provided', () => {
      const contextValue = {
        isSelectable: true,
        maxSelectedRows: 5,
      };

      const { container } = renderWithTestWrapper(contextValue);
      const checkbox = container.querySelector(
        '[data-testid="datatable-select-column-checkbox-header"]',
      );

      expect(checkbox).toBeNull();
    });

    it('should render the CheckboxControl when isSelectable is true and maxSelectedRows is not reached', () => {
      const contextValue = {
        isSelectable: true,
        visibleColumns: [
          selectColumn,
          {
            Header: 'Name',
            accessor: 'name',
          },
        ],

      };

      const { container } = renderWithTestWrapper(contextValue);
      const checkbox = container.querySelector(
        '[data-testid="datatable-select-column-checkbox-header"]',
      );

      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('Cell', () => {
    it('Should disable the cell if  when isSelectable is true and maxSelectedRows has passed the limit', () => {
      const [, row2] = mockDataTableContextValue.rows;

      const { queryByTestId } = render(
        <RenderCellWithTestWrapper contextValue={mockDataTableContextValue}>
          <Cell row={row2} />
        </RenderCellWithTestWrapper>,
      );

      const checkbox = queryByTestId('datatable-select-column-checkbox-cell');
      expect(checkbox).toBeDisabled();
    });
    it('Should not disable the cell when the cell is checked, isSelectable is true and maxSelectedRows has passed the limit', () => {
      const [row1] = mockDataTableContextValue.rows;

      const { queryByTestId } = render(
        <RenderCellWithTestWrapper contextValue={mockDataTableContextValue}>
          <Cell row={row1} />
        </RenderCellWithTestWrapper>,
      );

      const checkbox = queryByTestId('datatable-select-column-checkbox-cell');
      expect(checkbox).not.toBeDisabled();
    });

    it('Should call onMaxSelectedRows callback when isSelectable is true and maxSelectedRows has passed the limit', async () => {
      const datatableContext = {
        ...mockDataTableContextValue,
        state: { selectedRowIds: { 0: true } },
      };

      const [row1] = mockDataTableContextValue.rows;

      const { queryByTestId } = render(
        <RenderCellWithTestWrapper contextValue={datatableContext}>
          <Cell row={row1} />
        </RenderCellWithTestWrapper>,
      );

      const checkbox = queryByTestId('datatable-select-column-checkbox-cell');

      // Fire the click event inside an act
      await act(async () => {
        fireEvent.click(checkbox);
      });

      // Wait for the useEffect to complete
      await waitFor(() => {
        expect(datatableContext.onMaxSelectedRows).toHaveBeenCalled();
      });
    });
  });
});
