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
    /** Uniq ID of the column  */
    id?: string;
  };
}
function TableCell({ getCellProps, render, column }: TableCellProps) {
  const { className, ...rest } = getCellProps();

  const isActionColumn = column.id === 'action';
  const cellClasses = classNames(className, column.cellClassName);

  return (
    <td {...rest} className={cellClasses}>
      {!isActionColumn ? (
        <div className="pgn__data-table-cell-wrap">
          {render('Cell')}
        </div>
      ) : (
        render('Cell')
      )}
    </td>
  );
}

export default TableCell;
