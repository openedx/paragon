import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ getCellProps, render }) => (
  <td {...getCellProps()}>
    <span className="pgn__data-table-cell-wrap">
      {render('Cell')}
    </span>
  </td>
);

TableCell.propTypes = {
  /** Props for the td element */
  getCellProps: PropTypes.func.isRequired,
  /** Function that renders the cell contents. Will be called with the string 'Cell' */
  render: PropTypes.func.isRequired,
};

export default TableCell;
