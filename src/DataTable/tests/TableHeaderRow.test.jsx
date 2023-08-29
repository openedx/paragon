import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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

describe('<TableHeaderRow />', () => {
  const { getByTestId, getAllByTestId } = render(<table><TableHeaderRow {...props} /></table>);
  const head = getByTestId('thead-id');
  const row = getByTestId('tr-id');
  const cells = getAllByTestId('th-id');

  it('renders a table head and row', () => {
    expect(head).toBeInTheDocument();
    expect(row).toBeInTheDocument();
  });

  it('adds props to the row', () => {
    expect(row.className).toEqual('red');
  });

  it('renders cells', () => {
    expect(cells.length).toEqual(2);
    expect(cells[0]).toHaveTextContent(header1Name);
    expect(cells[1]).toHaveTextContent(header2Name);
  });
});
