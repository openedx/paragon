import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';
import { useRows } from './hooks';

const Table = ({
  tableName, isStriped, ...rest
}) => {
  const {
    getTableProps, prepareRow, displayRows, headerGroups, getTableBodyProps,
  } = useRows(tableName);

  const renderRows = () => displayRows.map((row) => {
    prepareRow(row);
    return (
      <TableRow {...row} key={row.id} {...rest} />
    );
  });

  if (!getTableProps) {
    return null;
  }

  return (
    <div className="pgn__data-table-container">
      <table {...getTableProps({
        className: classNames({ 'pgn__data-table': true, 'is-striped': isStriped }),
      })}
      >
        <TableHeaderRow headerGroups={headerGroups} {...rest} />
        <tbody {...getTableBodyProps()}>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  isStriped: true,
};

Table.propTypes = {
  tableName: PropTypes.string.isRequired,
  /** should table rows be striped */
  isStriped: PropTypes.bool,
};

export default Table;
