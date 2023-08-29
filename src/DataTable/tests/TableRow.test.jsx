import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TableRow from '../TableRow';
import DataTableContext from '../DataTableContext';

const props = {
  id: '1',
  getRowProps: () => ({ className: 'red' }),
  cells: [
    {
      column: {
        Header: 'Name',
      },
      getCellProps: () => ({}),
      render: () => 'Fido',
    },
    {
      column: {
        Header: 'Favorite food',
      },
      getCellProps: () => ({}),
      render: () => 'Bones',
    },
  ],
  values: {
    name: 'Fido',
    favorite_food: 'Bones',
  },
};

const contextValue = {
  renderRowSubComponent: ({ row }) => <div>{row.values.name}</div>,
  visibleColumns: [...props.cells],
};

// eslint-disable-next-line react/prop-types
function TableRowWrapper({ value, row }) {
  return (
    <DataTableContext.Provider value={value}>
      <table>
        <tbody>
          <TableRow row={row} />
        </tbody>
      </table>
    </DataTableContext.Provider>
  );
}

describe('<TableRow />', () => {
  it('renders a table row', () => {
    const { container } = render(<TableRowWrapper value={contextValue} row={props} />);
    const row = container.querySelector('tr');
    expect(row).toBeInTheDocument();
  });

  it('adds props to the row', () => {
    const { container } = render(<TableRowWrapper value={contextValue} row={props} />);
    const row = container.querySelector('tr');
    expect(row).toHaveClass('red');
  });

  it('renders cells', () => {
    const { getByText } = render(<TableRowWrapper value={contextValue} row={props} />);
    expect(getByText('Fido')).toBeInTheDocument();
    expect(getByText('Bones')).toBeInTheDocument();
  });

  it('renders subcomponent if row is in expanded state and has a renderRowSubComponent function defined', () => {
    const { getAllByText, container } = render(
      <TableRowWrapper
        value={contextValue}
        row={{ ...props, isExpanded: true }}
      />,
    );
    const rows = container.querySelectorAll('tr');
    expect(rows.length).toEqual(2);
    const subcomponentWrapper = rows[1];
    expect(subcomponentWrapper.querySelector('div')).toBeInTheDocument();
    expect(getAllByText('Fido')[1]).toBeInTheDocument();
    expect(subcomponentWrapper.querySelector('td')).toHaveAttribute('colSpan', '2');
  });

  it('does not render subcomponent if row is in expanded state and does not have renderRowSubComponent function defined', () => {
    const { container } = render(<TableRowWrapper value={{}} row={{ ...props, isExpanded: true }} />);
    const rows = container.querySelectorAll('tr');
    expect(rows.length).toEqual(1);
    expect(container.querySelector('div')).not.toBeInTheDocument();
  });
});
