import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableCell from './TableCell';

const TableRow = ({
  getRowProps, cells, id, isSelected,
}) => (
  <tr {...getRowProps({
    className: classNames({
      'pgn__data-table-row': true,
      'is-selected': isSelected,
    }),
  })}
  >
    {cells.map(cell => <TableCell {...cell} key={`${cell.column.Header}${id}`} />)}
  </tr>
);

TableRow.defaultProps = {
  isSelected: false,
};

TableRow.propTypes = {
  /** props to include on the tr tag (must include id) */
  getRowProps: PropTypes.func.isRequired,
  /** cells in the row */
  cells: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /** row id */
  id: PropTypes.string.isRequired,
  /** indicates if row has been selected */
  isSelected: PropTypes.bool,
};

export default TableRow;
