import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ cell }) => {
  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
};

TableCell.propTypes = {
  cell: PropTypes.shape().isRequired,
};

export default TableCell;
