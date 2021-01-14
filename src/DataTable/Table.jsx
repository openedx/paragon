import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';

const Table = ({
  getTableProps, headerGroups, getTableBodyProps, rows, prepareRow, isStriped,
}) => {
  const renderRows = () => rows.map((row) => {
    prepareRow(row);
    return (
      <TableRow {...row} key={row.id} />
    );
  });

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
  /** returns an object that will be spread as props to the table element */
  getTableProps: PropTypes.func.isRequired,
  /** returns an object that will be spread as props to the tbody element */
  getTableBodyProps: PropTypes.func.isRequired,
  headerGroups: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /** function that prepares rows for render */
  prepareRow: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  /** should table rows be striped */
  isStriped: PropTypes.bool,
};

export default Table;
