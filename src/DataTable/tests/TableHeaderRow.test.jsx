import React from 'react';
import { render, screen } from '@testing-library/react';

import TableHeaderRow from '../TableHeaderRow';

const header1Name = 'Name';
const header2Name = 'DOB';
const props = {
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
};

function renderTableHeaderRow() {
  render(<table><TableHeaderRow {...props} /></table>);
}

describe('<TableHeaderRow />', () => {
  it('renders a table head and row', () => {
    renderTableHeaderRow();

    const head = screen.getByRole('rowgroup');
    const row = screen.getByRole('row');

    expect(head).toBeInTheDocument();
    expect(row).toBeInTheDocument();
  });

  it('adds props to the row', () => {
    renderTableHeaderRow();

    const row = screen.getByRole('row');

    expect(row.className).toEqual('red');
  });

  it('renders cells', () => {
    renderTableHeaderRow();

    const cells = screen.getAllByRole('columnheader');

    expect(cells.length).toEqual(2);
    expect(cells[0]).toHaveTextContent(header1Name);
    expect(cells[1]).toHaveTextContent(header2Name);
  });

  it('does not spread React keys from react-table prop getters', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    try {
      renderTableHeaderRow();

      const keySpreadWarning = consoleError.mock.calls.some(([message]) => (
        String(message).includes('A props object containing a "key" prop')
      ));
      expect(keySpreadWarning).toEqual(false);
    } finally {
      consoleError.mockRestore();
    }
  });
});
