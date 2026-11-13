import React, { ReactNode, TdHTMLAttributes } from 'react';
import classNames from 'classnames';

interface TableCellProps {
  /** Props for the td element */
  getCellProps: () => TdHTMLAttributes<HTMLTableCellElement>;
  /** Function that renders the cell contents. Will be called with the string 'Cell' */
  render: (type: 'Cell') => ReactNode;
  /** Table column */
  column: {
    /** Class(es) to be applied to the cells in the given column */
    cellClassName?: string;
    /** Renders cell content directly in the `td`, without the wrapper that clips overflowing content.
     * Use it for cells with overlays, e.g. dropdowns. */
    allowOverflow?: boolean;
  };
}
function TableCell({ getCellProps, render, column }: TableCellProps) {
  const { className, ...rest } = getCellProps();

  const cellClasses = classNames(className, column.cellClassName);

  return (
    <td {...rest} className={cellClasses}>
      {column.allowOverflow ? render('Cell') : (
        <div className="pgn__data-table-cell-wrap">
          {render('Cell')}
        </div>
      )}
    </td>
  );
}

export default TableCell;
