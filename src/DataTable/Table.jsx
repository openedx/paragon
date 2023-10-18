import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from '../Spinner';
import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';
import { useRows } from './hooks';
import DataTableContext from './DataTableContext';

function Table({
  isStriped,
}) {
  const {
    getTableProps, prepareRow, displayRows, headerGroups, getTableBodyProps,
  } = useRows();
  const { isLoading } = useContext(DataTableContext);

  const renderRows = () => displayRows.map((row) => {
    prepareRow(row);
    return (
      <TableRow row={row} key={row.id} />
    );
  });

  if (!getTableProps) {
    return null;
  }

  return (
    <div
      className={classNames('pgn__data-table-container', { 'is-loading': isLoading })}
      data-testid="data-table-container"
    >
      {isLoading && (
        <div className="pgn__data-table-spinner" data-testid="data-table-spinner">
          <Spinner animation="border" screenReaderText="loading" />
        </div>
      )}
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
}

Table.defaultProps = {
  isStriped: true,
};

Table.propTypes = {
  /** should table rows be striped */
  isStriped: PropTypes.bool,
};

export default Table;
