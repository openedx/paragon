import React from 'react';
import { render, screen } from '@testing-library/react';

import TableCell from '../TableCell';

const props = {
  getCellProps: () => ({ className: 'red' }),
  render: () => 'Cell data',
  column: {},
};

describe('<TableCell />', () => {
  it('renders a table cell', () => {
    render(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);
    const cell = screen.getByRole('cell');
    expect(cell).toBeInTheDocument();
  });

  it('adds props to the cell', () => {
    render(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);
    const cell = screen.getByRole('cell');
    expect(cell).toHaveClass('red');
  });

  it('renders cell content', () => {
    render(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);
    const cell = screen.getByRole('cell');
    expect(cell).toBeInTheDocument();
  });

  it('adds class names to the cell span', () => {
    const addedClass = 'align-me';
    render(
      <table>
        <tbody>
          <tr>
            <TableCell {...{ ...props, column: { cellClassName: addedClass } }} />
          </tr>
        </tbody>
      </table>,
    );
    const cell = screen.getByRole('cell');
    expect(cell).toHaveClass(addedClass);
  });
});
