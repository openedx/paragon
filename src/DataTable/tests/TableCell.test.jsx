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

  it('wraps cell content in a clipping wrapper by default', () => {
    render(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);
    const cell = screen.getByRole('cell');
    expect(cell.firstChild).toHaveClass('pgn__data-table-cell-wrap');
  });

  it('renders cell content without the wrapper when column has allowOverflow', () => {
    render(<table><tbody><tr><TableCell {...{ ...props, column: { allowOverflow: true } }} /></tr></tbody></table>);
    const cell = screen.getByRole('cell');
    expect(cell.querySelector('.pgn__data-table-cell-wrap')).not.toBeInTheDocument();
    expect(cell).toHaveTextContent('Cell data');
  });
});
