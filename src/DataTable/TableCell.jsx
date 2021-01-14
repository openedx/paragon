import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ cell }) => (
  <td {...cell.getCellProps()}>
    <span className="pgn__data-table-cell-wrap">
      {cell.render('Cell')}
    </span>
  </td>
);

TableCell.propTypes = {
  cell: PropTypes.shape({
    /** Props for the <td> element */
    getCellProps: PropTypes.func.isRequired,
    /** Function that renders the cell contents. Will be called with the string 'Cell' */
    render: PropTypes.func.isRequired,
  }).isRequired,
};

export default TableCell;
