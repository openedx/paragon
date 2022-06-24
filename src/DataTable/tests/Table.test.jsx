import React from 'react';
import { mount } from 'enzyme';
import TableHeaderRow from '../TableHeaderRow';
import Table from '../Table';
import DataTableContext from '../DataTableContext';

const header1Name = 'Name';
const header2Name = 'DOB';

const instance = {
  rows: [{
    id: '1',
    getRowProps: () => ({ className: 'red', key: '1' }),
    cells: [
      {
        column: {
          Header: header1Name,
        },
        getCellProps: () => ({ key: '1' }),
        render: () => 'Fido',
      },
      {
        column: {
          Header: header2Name,
        },
        getCellProps: () => ({ key: '2' }),
        render: () => 'Bones',
      },
    ],
  }],
  getTableProps: () => {},
  headerGroups: [{
    getHeaderGroupProps: () => ({ className: 'red', key: '1' }),
    headers: [
      {
        Header: header1Name,
        getHeaderProps: () => ({ className: 'bears', key: '1' }),
        render: () => header1Name,
        isSorted: false,
        isSortedDesc: false,
        getSortByToggleProps: () => ({}),
        canSort: false,
      },
      {
        Header: header2Name,
        getHeaderProps: () => ({ className: 'bears', key: '2' }),
        render: () => header2Name,
        isSorted: false,
        isSortedDesc: false,
        getSortByToggleProps: () => ({}),
        canSort: true,
      },
    ],
  }],
  getTableBodyProps: () => {},
  prepareRow: () => {},
  isStriped: false,
};

// eslint-disable-next-line react/prop-types
function TableWrapper({ value = instance, props }) {
  return <DataTableContext.Provider value={value}><Table {...props} /></DataTableContext.Provider>;
}

describe('DataTable <Table />', () => {
  it('renders a table header', () => {
    const wrapper = mount(<TableWrapper />);
    const row = wrapper.find(TableHeaderRow);
    expect(row.length).toEqual(1);
  });
  it('renders rows', () => {
    const wrapper = mount(<TableWrapper />);
    const row = wrapper.find('tbody tr');
    expect(row.length).toEqual(1);
  });
  it('adds table props', () => {
    const tableProps = {
      summary: 'It is a table',
    };
    const getTablePropsSpy = jest.fn();
    getTablePropsSpy.mockReturnValue(tableProps);
    const wrapper = mount(<TableWrapper value={{ ...instance, getTableProps: getTablePropsSpy }} />);
    const table = wrapper.find('table');

    expect(table.props().summary).toEqual(tableProps.summary);
  });
  it('adds table body props', () => {
    const tableProps = {
      foo: 'bar',
      baz: 'bee',
    };
    const getTableBodyPropsSpy = jest.fn();
    getTableBodyPropsSpy.mockReturnValue(tableProps);
    const wrapper = mount(<TableWrapper value={{ ...instance, getTableBodyProps: getTableBodyPropsSpy }} />);
    const table = wrapper.find('tbody');
    expect(table.props().foo).toEqual(tableProps.foo);
    expect(table.props().baz).toEqual(tableProps.baz);
  });
  it('returns null if the instance does not exist', () => {
    const wrapper = mount(<TableWrapper value={{}} />);
    expect(wrapper.text()).toEqual('');
  });
});
