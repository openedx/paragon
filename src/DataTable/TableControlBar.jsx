import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BulkActions from './BulkActions';
import SmartStatus from './SmartStatus';
import DropdownFilters from './DropdownFilters';
import DataTableContext from './DataTableContext';

// handles layout for filters, status, and bulk actions
const TableControlBar = ({
  className,
}) => {
  const instance = useContext(DataTableContext);
  const {
    setFilter, bulkActions,
  } = instance;

  return (
    <div className={classNames('pgn__data-table-status-bar', className)}>
      {/* Using setFilter as a proxy for isFilterable */}
      {setFilter && (
      <div className="pgn__data-table-actions">
        <div className="pgn__data-table-actions-left">
          <DropdownFilters />
        </div>
        <div className="pgn__data-table-actions-right">
          {bulkActions.length > 0 && (<BulkActions />)}
        </div>
      </div>
      )}
      <div className="pgn__data-table-status">
        <div className="pgn__data-table-status-left">
          <SmartStatus />
        </div>
        {!setFilter && (<BulkActions />)}
      </div>
    </div>
  );
};

TableControlBar.defaultProps = {
  className: null,
};

TableControlBar.propTypes = {
  className: PropTypes.string,
};

export default TableControlBar;
