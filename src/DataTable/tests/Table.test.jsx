import React from 'react';
import { render } from '@testing-library/react';

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
    const { getByText } = render(<TableWrapper />);
    const headerText = getByText(header1Name);
    expect(headerText).toBeInTheDocument();
  });

  it('renders rows', () => {
    const { getByText } = render(<TableWrapper />);
    const rowText = getByText('Fido');
    expect(rowText).toBeInTheDocument();
  });

  it('adds table props', () => {
    const tableProps = {
      summary: 'It is a table',
    };
    const getTablePropsSpy = jest.fn();
    getTablePropsSpy.mockReturnValue(tableProps);
    const { getByRole } = render(<TableWrapper value={{ ...instance, getTableProps: getTablePropsSpy }} />);
    const table = getByRole('table');

    expect(table).toHaveAttribute('summary', tableProps.summary);
  });

  it('adds table body props', () => {
    const tableProps = {
      foo: 'bar',
      baz: 'bee',
    };
    const getTableBodyPropsSpy = jest.fn();
    getTableBodyPropsSpy.mockReturnValue(tableProps);
    const { getByRole } = render(<TableWrapper value={{ ...instance, getTableBodyProps: getTableBodyPropsSpy }} />);
    const tableBody = getByRole('table').querySelector('tbody');
    expect(tableBody).toHaveAttribute('foo', tableProps.foo);
    expect(tableBody).toHaveAttribute('baz', tableProps.baz);
  });

  it('returns null if the instance does not exist', () => {
    const { container } = render(<TableWrapper value={{}} />);
    expect(container.firstChild).toBeNull();
  });
});
