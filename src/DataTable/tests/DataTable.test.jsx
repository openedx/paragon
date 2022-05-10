import React, { useContext } from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import * as reactTable from 'react-table';
import { IntlProvider } from 'react-intl';

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
      name: 'Lil Bub',
      color: 'brown tabby',
      famous_for: 'weird tongue',
    },
    {
      name: 'Grumpy Cat',
      color: 'siamese',
      famous_for: 'serving moods',
    },
    {
      name: 'Smoothie',
      color: 'orange tabby',
      famous_for: 'modeling',
    },
    {
      name: 'Maru',
      color: 'brown tabby',
      famous_for: 'being a lovable oaf',
    },
    {
      name: 'Keyboard Cat',
      color: 'orange tabby',
      famous_for: 'piano virtuoso',
    },
    {
      name: 'Long Cat',
      color: 'russian white',
      famous_for:
        'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',
    },
    {
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
};

const emptyTestText = 'We love bears';
const EmptyTest = () => <div>{emptyTestText}</div>;

// eslint-disable-next-line react/prop-types
const DataTableContextProviderChild = ({ children }) => {
  const contextValue = useContext(DataTableContext);
  return (
    <>
      <div className="context-value" data-contextvalue={contextValue} />
      {children}
    </>
  );
};

// eslint-disable-next-line react/prop-types
const DataTableWrapper = ({ children, ...tableProps }) => (
  <IntlProvider locale="en" messages={{}}>
    <DataTable {...tableProps}>
      {children}
    </DataTable>
  </IntlProvider>
);

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

  describe('controlled table selections', () => {
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
});
