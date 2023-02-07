import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import * as reactTable from 'react-table';
import { IntlProvider } from 'react-intl';
import '@testing-library/jest-dom';

import DataTable from '..';
import TableControlBar from '../TableControlBar';
import EmptyTable from '../EmptyTable';
import Table from '../Table';
import TableFooter from '../TableFooter';
import DataTableContext from '../DataTableContext';
import { addSelectedRowAction } from '../selection/data/actions';

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
      <div className="context-value" data-contextvalue={contextValue} />
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
    const wrapper = mount(<DataTableWrapper {...props} data={[]} />);
    expect(wrapper.find(EmptyTable).length).toEqual(1);
  });
  it('accepts an empty table component', () => {
    const wrapper = mount(<DataTableWrapper {...props} data={[]} EmptyTableComponent={EmptyTest} />);
    expect(wrapper.find(EmptyTable).length).toEqual(0);
    expect(wrapper.find(EmptyTest).length).toEqual(1);
  });
  it('displays a control bar', () => {
    const wrapper = mount(<DataTableWrapper {...props} />);
    const controlBar = wrapper.find(TableControlBar);
    expect(controlBar.length).toEqual(1);
    expect(controlBar.text()).toEqual('Showing 7 of 7.');
  });
  it('displays a table', () => {
    const wrapper = mount(<DataTableWrapper {...props} />);
    const table = wrapper.find(Table);
    expect(table.length).toEqual(1);
    expect(table.find('th').length).toEqual(3);
    expect(table.find('tr').length).toEqual(8);
  });
  it('displays a table footer', () => {
    const wrapper = mount(<DataTableWrapper {...props} />);
    expect(wrapper.find(TableFooter).length).toEqual(1);
  });
  it('adds a column when table is selectable', () => {
    const wrapper = mount(<DataTableWrapper {...props} isSelectable />);
    const tableHeaders = wrapper.find(Table).find('th');
    expect(tableHeaders.length).toEqual(props.columns.length + 1);
  });
  it('adds additional columns', () => {
    const wrapper = mount(<DataTableWrapper {...props} additionalColumns={additionalColumns} />);
    const tableHeaders = wrapper.find(Table).find('th');
    expect(tableHeaders.length).toEqual(props.columns.length + additionalColumns.length);
    expect(wrapper.text()).toContain(additionalColumns[0].Header);
    expect(wrapper.text()).toContain(additionalColumns[1].Header);
  });
  test('calls useTable with the data and columns', () => {
    const spy = jest.spyOn(reactTable, 'useTable');
    mount(<DataTableWrapper {...props} />);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].columns).toEqual(props.columns);
    expect(spy.mock.calls[0][0].data).toEqual(props.data);
    expect(spy.mock.calls[0][0].initialState).toEqual({});
    expect(spy.mock.calls[0]).toHaveLength(2);
  });
  test.each([
    [{}, { manualFilters: false, manualPagination: false, manualSortBy: false }],
    [{ manualFilters: true, pageCount: 1 }, { manualFilters: true, manualPagination: false, manualSortBy: false }],
    [{ manualPagination: true, pageCount: 1 }, { manualFilters: false, manualPagination: true, manualSortBy: false }],
    [{ manualSortBy: true, pageCount: 1 }, { manualFilters: false, manualPagination: false, manualSortBy: true }],
    // eslint-disable-next-line max-len, object-curly-newline
    [{ manualSortBy: true, manualFilters: true, manualPagination: true, pageCount: 1 }, { manualFilters: true, manualPagination: true, manualSortBy: true }],
  ])('calls useTable with the correct manual settings %#', (additionalProps, expected) => {
    const spy = jest.spyOn(reactTable, 'useTable');
    mount(<DataTableWrapper {...props} {...additionalProps} />);
    expect(spy.mock.calls[0][0].manualFilters).toEqual(expected.manualFilters);
    expect(spy.mock.calls[0][0].manualPagination).toEqual(expected.manualPagination);
    expect(spy.mock.calls[0][0].manualSortBy).toEqual(expected.manualSortBy);
  });
  it('passes the initial state to useTable', () => {
    const spy = jest.spyOn(reactTable, 'useTable');
    const initialState = { foo: 'bar' };
    mount(<DataTableWrapper {...props} initialState={initialState} />);
    expect(spy.mock.calls[0][0].initialState).toEqual(initialState);
  });
  it('displays loading state', () => {
    const wrapper = mount(<DataTableWrapper {...props} isLoading />);
    const tableContainer = wrapper.find('.pgn__data-table-container');
    const spinner = wrapper.find('.pgn__data-table-spinner');
    expect(tableContainer.hasClass('is-loading')).toEqual(true);
    expect(spinner.exists()).toEqual(true);
  });

  // TODO: test that useTable is called with the correct arguments when isPaginated, isFilterable, isSelectable are used
  // TODO: test that fetchData is called correctly

  describe('[legacy] controlled table selections', () => {
    it('passes initial controlledTableSelections to context', () => {
      const wrapper = mount(
        <DataTableWrapper {...props}>
          <DataTableContextProviderChild />
        </DataTableWrapper>,
      );
      const contextValue = wrapper.find('div.context-value').prop('data-contextvalue');
      const { controlledTableSelections } = contextValue;
      expect(controlledTableSelections).toEqual([
        { selectedRows: [], isEntireTableSelected: false },
        expect.any(Function),
      ]);
    });
    it('passes appropriate selection props to context with active selections', () => {
      const wrapper = mount(
        <DataTableWrapper {...props}><DataTableContextProviderChild /></DataTableWrapper>,
      );

      // verify there are no current selections
      let contextValue = wrapper.find('div.context-value').prop('data-contextvalue');
      expect(contextValue.controlledTableSelections).toEqual([
        { selectedRows: [], isEntireTableSelected: false },
        expect.any(Function),
      ]);

      // select one row
      const [, selectionsDispatch] = contextValue.controlledTableSelections;
      const selectedRow = { id: 1 };
      const itemCount = 5;
      const action = addSelectedRowAction(selectedRow, itemCount);
      act(() => {
        selectionsDispatch(action);
      });
      wrapper.update();

      // verify there is one active selection and appropriate selection props are passed
      contextValue = wrapper.find('div.context-value').prop('data-contextvalue');
      expect(contextValue.controlledTableSelections).toEqual([
        { selectedRows: [selectedRow], isEntireTableSelected: false },
        expect.any(Function),
      ]);
      expect(contextValue.state).toEqual(
        expect.objectContaining({
          selectedRowIds: {
            [selectedRow.id]: true,
          },
        }),
      );
      expect(contextValue.selectedFlatRows).toEqual([selectedRow]);
    });
  });

  describe('controlled table selections', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('calls onSelectedRowsChanged when selected rows are updated', () => {
      const mockOnSelectedRowsChange = jest.fn();
      const propsWithSelection = {
        ...props,
        isSelectable: true,
        onSelectedRowsChanged: mockOnSelectedRowsChange,
      };
      render(<DataTableWrapper {...propsWithSelection} />);

      // select first row
      userEvent.click(screen.getAllByTestId('datatable-select-column-checkbox-cell')[0]);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledTimes(1);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledWith(
        expect.objectContaining({
          1: true,
        }),
      );

      // select third row
      userEvent.click(screen.getAllByTestId('datatable-select-column-checkbox-cell')[2]);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledTimes(2);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledWith(
        expect.objectContaining({
          1: true,
          3: true,
        }),
      );

      // unselect third row
      userEvent.click(screen.getAllByTestId('datatable-select-column-checkbox-cell')[2]);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledTimes(3);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledWith(
        expect.objectContaining({
          1: true,
        }),
      );
    });

    it('deselects all rows across all pages when `toggleAllRowsSelected(false)` is called', () => {
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
      userEvent.click(screen.getByText('Clear selection'));

      expect(mockOnSelectedRowsChange).toHaveBeenCalledTimes(1);
      expect(mockOnSelectedRowsChange).toHaveBeenCalledWith({});
    });
  });
});
