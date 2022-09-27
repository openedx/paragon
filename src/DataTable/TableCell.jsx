import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function TableCell({ getCellProps, render, column }) {
  const { className, ...rest } = getCellProps();
  return (
    <td {...rest} className={classNames('pgn__data-table-cell-wrap', className, column.cellClassName)}>
      {render('Cell')}
    </td>
  );
}

TableCell.propTypes = {
  /** Props for the td element */
  getCellProps: PropTypes.func.isRequired,
  /** Function that renders the cell contents. Will be called with the string 'Cell' */
  render: PropTypes.func.isRequired,
  /** Table column */
  column: PropTypes.shape({
    /** Class(es) to be applied to the cells in the given column */
    cellClassName: PropTypes.string,
  }).isRequired,
};

export default TableCell;
