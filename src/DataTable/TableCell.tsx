import { ReactNode, TdHTMLAttributes } from 'react';
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
  };
}
function TableCell({ getCellProps, render, column }: TableCellProps) {
  const { className, ...rest } = getCellProps();
  return (
    <td {...rest} className={classNames('pgn__data-table-cell-wrap', className, column.cellClassName)}>
      {render('Cell')}
    </td>
  );
}

export default TableCell;
