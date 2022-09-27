import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableCell from './TableCell';
import DataTableContext from './DataTableContext';

function TableRow({ row }) {
  const {
    getRowProps, cells, id, isSelected, isExpanded,
  } = row;
  const { renderRowSubComponent, visibleColumns } = useContext(DataTableContext);

  return (
    <>
      <tr {...getRowProps({
        className: classNames({
          'pgn__data-table-row': true,
          'is-selected': isSelected,
        }),
      })}
      >
        {cells.map(cell => <TableCell {...cell} key={`${cell.column.Header}${id}`} />)}
      </tr>
      {isExpanded && renderRowSubComponent ? (
        <tr>
          <td colSpan={visibleColumns.length}>
            {renderRowSubComponent({ row })}
          </td>
        </tr>
      ) : null}
    </>
  );
}

TableRow.propTypes = {
  /** Row data that is received from `react-table` API. */
  row: PropTypes.shape({
    /** props to include on the tr tag (must include id) */
    getRowProps: PropTypes.func.isRequired,
    /** cells in the row */
    cells: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    /** row id */
    id: PropTypes.string.isRequired,
    /** indicates if row has been selected */
    isSelected: PropTypes.bool,
    /** Indicates if row has been expanded. */
    isExpanded: PropTypes.bool,
  }).isRequired,
};

export default TableRow;
