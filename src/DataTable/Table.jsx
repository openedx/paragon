import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';
import { useRows } from './hooks';

const Table = ({
  isStriped,
}) => {
  const {
    getTableProps, prepareRow, displayRows, headerGroups, getTableBodyProps,
  } = useRows();

  const renderRows = () => displayRows.map((row) => {
    prepareRow(row);
    return (
      <TableRow {...row} key={row.id} />
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
        <TableHeaderRow headerGroups={headerGroups} />
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
  /** should table rows be striped */
  isStriped: PropTypes.bool,
};

export default Table;
