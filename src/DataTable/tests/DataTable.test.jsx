import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactTable from 'react-table';
import { IntlProvider } from 'react-intl';

import DataTable from '..';
import DataTableContext from '../DataTableContext';

const additionalColumns = [
  {
    id: 'action',
    Header: 'Action',
    // eslint-disable-next-line react/prop-types
    Cell: () => <div>extra content</div>,
  },
  {
    id: 'action2',
    Header: 'More',
    // eslint-disable-next-line react/prop-types
    Cell: () => <div>extra content</div>,
  },
];

const props = {
  data: [
    {
      uuid: '1',
      name: 'Lil Bub',
      color: 'brown tabby',
      famous_for: 'weird tongue',
    },
    {
      uuid: '2',
      name: 'Grumpy Cat',
      color: 'siamese',
      famous_for: 'serving moods',
    },
    {
      uuid: '3',
      name: 'Smoothie',
      color: 'orange tabby',
      famous_for: 'modeling',
    },
    {
      uuid: '4',
      name: 'Maru',
      color: 'brown tabby',
      famous_for: 'being a lovable oaf',
    },
    {
      uuid: '5',
      name: 'Keyboard Cat',
      color: 'orange tabby',
      famous_for: 'piano virtuoso',
    },
    {
      uuid: '6',
      name: 'Long Cat',
      color: 'russian white',
      famous_for:
        'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',
    },
    {
      uuid: '7',
      name: 'Zeno',
      color: 'brown tabby',
      famous_for: 'getting halfway there',
    },
  ],
  columns: [
    {
      Header: 'Name',
      accessor: 'name',

    },
    {
      Header: 'Famous For',
      accessor: 'famous_for',
    },
    {
      Header: 'Coat Color',
      accessor: 'color',
    },
  ],
  itemCount: 7,
  initialTableOptions: {
    getRowId: row => row.uuid,
  },
};

const emptyTestText = 'We love bears';
function EmptyTest() {
  return <div>{emptyTestText}</div>;
}

// eslint-disable-next-line react/prop-types
function DataTableContextProviderChild({ children }) {
  const contextValue = useContext(DataTableContext);
  return (
    <>
      <div className="context-value" data-contextvalue={JSON.stringify(contextValue)} data-testid="context-value" />
      {children}
    </>
  );
}

// eslint-disable-next-line react/prop-types
function DataTableWrapper({ children, ...tableProps }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <DataTable {...tableProps}>
        {children}
      </DataTable>
    </IntlProvider>
  );
}

describe('<DataTable />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays the empty table component if empty', () => {
    render(<DataTableWrapper {...props} data={[]} />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('accepts an empty table component', () => {
    render(<DataTableWrapper {...props} data={[]} EmptyTableComponent={EmptyTest} />);
    expect(screen.queryByText('No results found')).not.toBeInTheDocument();
    expect(screen.getByText(emptyTestText)).toBeInTheDocument();
  });

  it('displays a control bar', () => {
    render(<DataTableWrapper {...props} />);
    expect(screen.getByTestId('table-control-bar')).toBeInTheDocument();
    expect(screen.getAllByText('Showing 7 of 7.')[0]).toBeInTheDocument();
  });

  it('displays a table', () => {
    render(<DataTableWrapper {...props} />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(props.columns.length);
    expect(screen.getAllByRole('row')).toHaveLength(props.data.length + 1); // (need + 1 to include header row)
  });

  it('displays a table footer', () => {
    render(<DataTableWrapper {...props} />);
    expect(screen.getByTestId('table-footer')).toBeInTheDocument();
  });

  it('adds a column when table is selectable', () => {
    render(<DataTableWrapper {...props} isSelectable />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(props.columns.length + 1); // (need + 1 extra to include selection)
  });

  it('adds additional columns', () => {
    render(<DataTableWrapper {...props} additionalColumns={additionalColumns} />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(props.columns.length + 2); // (original + 2 additional)
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('More')).toBeInTheDocument();
  });
  it('calls useTable with the data and columns', () => {
    const spy = jest.spyOn(reactTable, 'useTable');
    render(<DataTableWrapper {...props} />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].columns).toEqual(props.columns);
    expect(spy.mock.calls[0][0].data).toEqual(props.data);
    expect(spy.mock.calls[0][0].initialState).toEqual({});
    expect(spy.mock.calls[0]).toHaveLength(2);
  });
  it.each([
    [{}, { manualFilters: false, manualPagination: false, manualSortBy: false }],
    [{ manualFilters: true, pageCount: 1 }, { manualFilters: true, manualPagination: false, manualSortBy: false }],
    [{ manualPagination: true, pageCount: 1 }, { manualFilters: false, manualPagination: true, manualSortBy: false }],
    [{ manualSortBy: true, pageCount: 1 }, { manualFilters: false, manualPagination: false, manualSortBy: true }],
    // eslint-disable-next-line max-len, object-curly-newline
    [{ manualSortBy: true, manualFilters: true, manualPagination: true, pageCount: 1 }, { manualFilters: true, manualPagination: true, manualSortBy: true }],
  ])('calls useTable with the correct manual settings %#', (additionalProps, expected) => {
    const spy = jest.spyOn(reactTable, 'useTable');
    render(<DataTableWrapper {...props} {...additionalProps} />);
    expect(spy.mock.calls[0][0].manualFilters).toEqual(expected.manualFilters);
    expect(spy.mock.calls[0][0].manualPagination).toEqual(expected.manualPagination);
    expect(spy.mock.calls[0][0].manualSortBy).toEqual(expected.manualSortBy);
  });
  it('passes the initial state to useTable', () => {
    const spy = jest.spyOn(reactTable, 'useTable');
    const initialState = { foo: 'bar' };
    render(<DataTableWrapper {...props} initialState={initialState} />);
    expect(spy.mock.calls[0][0].initialState).toEqual(initialState);
  });
  it('displays loading state', () => {
    render(<DataTableWrapper {...props} isLoading />);
    const tableContainer = screen.getByTestId('data-table-container');
    const spinner = screen.getByTestId('data-table-spinner');
    expect(tableContainer).toBeTruthy();

    expect(spinner).toBeTruthy();
  });

  describe('[legacy] controlled table selections', () => {
    it('passes initial controlledTableSelections to context', async () => {
      render(
        <DataTableWrapper {...props}>
          <DataTableContextProviderChild />
        </DataTableWrapper>,
      );
      const contextDiv = screen.getByTestId('context-value');
      expect(contextDiv).toBeInTheDocument();

      const contextValue = JSON.parse(contextDiv.getAttribute('data-contextvalue'));
      expect(contextValue.controlledTableSelections).toEqual([
        { selectedRows: [], isEntireTableSelected: false },
        null,
      ]);
    });
  });

  describe('controlled table selections', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('calls onSelectedRowsChanged when selected rows are updated', async () => {
      const mockOnSelectedRowsChange = jest.fn();
      const propsWithSelection = {
        ...props,
        isSelectable: true,
        onSelectedRowsChanged: mockOnSelectedRowsChange,
      };
      render(<DataTableWrapper {...propsWithSelection} />);
      // select first row
      await userEvent.click(screen.getAllByTestId('datatable-select-column-checkbox-cell')[0]);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledTimes(1);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledWith(
        expect.objectContaining({
          1: true,
        }),
      );
      // select third row
      await userEvent.click(screen.getAllByTestId('datatable-select-column-checkbox-cell')[2]);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledTimes(2);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledWith(
        expect.objectContaining({
          1: true,
          3: true,
        }),
      );
      // unselect third row
      await userEvent.click(screen.getAllByTestId('datatable-select-column-checkbox-cell')[2]);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledTimes(3);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledWith(
        expect.objectContaining({
          1: true,
        }),
      );
    });
    it('deselects all rows across all pages when `toggleAllRowsSelected(false)` is called', async () => {
      const mockOnSelectedRowsChange = jest.fn();
      const propsWithSelection = {
        ...props,
        isPaginated: true,
        isSelectable: true,
        onSelectedRowsChanged: mockOnSelectedRowsChange,
        selectedFlatRows: [{
          id: '1',
        }],
        initialState: {
          pageIndex: 0,
          pageSize: 2,
          selectedRowIds: {
            1: true,
            // because `pageSize` is 2, a row id of 3 selects first row on 2nd page
            3: true,
          },
        },
      };
      render(<DataTableWrapper {...propsWithSelection} />);
      await userEvent.click(screen.getByText('Clear selection'));

      expect(mockOnSelectedRowsChange).toHaveBeenCalledTimes(1);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledWith({});
    });
  });
});
