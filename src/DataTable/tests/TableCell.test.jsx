import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TableCell from '../TableCell';

const props = {
  getCellProps: () => ({ className: 'red' }),
  render: () => 'Cell data',
  column: {},
};

describe('<TableCell />', () => {
  it('renders a table cell', () => {
    const { container } = render(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);
    const cell = container.querySelector('td');
    expect(cell).toBeInTheDocument();
  });

  it('adds props to the cell', () => {
    const { container } = render(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);
    const cell = container.querySelector('td');
    expect(cell).toHaveClass('pgn__data-table-cell-wrap red');
  });

  it('renders cell content', () => {
    const { getByText } = render(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);
    const cell = getByText('Cell data');
    expect(cell).toBeInTheDocument();
  });

  it('adds class names to the cell span', () => {
    const addedClass = 'align-me';
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <TableCell {...{ ...props, column: { cellClassName: addedClass } }} />
          </tr>
        </tbody>
      </table>,
    );
    const cell = container.querySelector('td');
    expect(cell).toHaveClass(addedClass);
  });
});
