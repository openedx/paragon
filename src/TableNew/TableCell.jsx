import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ cell }) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;

TableCell.propTypes = {
  cell: PropTypes.shape({
    /** Props for the <td> element */
    getCellProps: PropTypes.func.isRequired,
    /** Function that renders the cell contents. Will be called with the string 'Cell' */
    render: PropTypes.func.isRequired,
  }).isRequired,
};

export default TableCell;
