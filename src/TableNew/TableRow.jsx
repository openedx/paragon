import React from 'react';
import PropTypes from 'prop-types';

import TableCell from './TableCell';

const TableRow = ({ row }) => (
  <tr {...row.getRowProps()}>
    {row.cells.map(cell => <TableCell cell={cell} key={`${cell.column.Header}${row.id}`} />)}
  </tr>
);

TableRow.propTypes = {
  row: PropTypes.shape({
    /** props to include on the <tr> tag (must include id) */
    getRowProps: PropTypes.func.isRequired,
    /** cells in the row */
    cells: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    /** row id */
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableRow;
