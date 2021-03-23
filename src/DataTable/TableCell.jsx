import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TableCell = ({ getCellProps, render, column }) => (
  <td {...getCellProps()}>
    <span className={classNames('pgn__data-table-cell-wrap', column.cellClassName)}>
      {render('Cell')}
    </span>
  </td>
);

TableCell.propTypes = {
  /** Props for the td element */
  getCellProps: PropTypes.func.isRequired,
  /** Function that renders the cell contents. Will be called with the string 'Cell' */
  render: PropTypes.func.isRequired,
  /** Table column */
  column: PropTypes.shape({
    cellClassName: PropTypes.string,
  }).isRequired,
};

export default TableCell;
