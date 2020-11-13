import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableCell from './TableCell';

const TableRow = ({ row, isStriped }) => (
  <tr {...row.getRowProps({
    className: isStriped ? classNames({ 'is-striped': isStriped }) : '',
  })}
  >
    {row.cells.map(cell => <TableCell cell={cell} key={`${cell.column.Header}${row.id}`} />)}
  </tr>
);

TableRow.defaultProps = {
  isStriped: false,
};

TableRow.propTypes = {
  row: PropTypes.shape({
    getRowProps: PropTypes.func.isRequired,
    cells: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  isStriped: PropTypes.bool,
};

export default TableRow;
