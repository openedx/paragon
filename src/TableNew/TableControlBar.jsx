import React from 'react';
import PropTypes from 'prop-types';
import { requiredWhen } from './utils/propTypesUtils';
import BulkActions from './BulkActions';
import SmartStatus from './SmartStatus';
import DropdownFilters from './DropdownFilters';

// handles layout for filters, status, and bulk actions
const TableControlBar = ({
  isSelectable, selectedFlatRows, toggleAllRowsSelected, bulkActions,
  isFilterable, filterNames, pageSize, itemCount, columns, rows,
}) => {
  const bulkActionRows = isSelectable ? selectedFlatRows : rows;

  return (
    <div className="pgn__table-status-bar">
      {isFilterable && (
      <div className="pgn__table-actions">
        <div className="pgn__table-actions-left">
          <DropdownFilters columns={columns} />
        </div>
        <div className="pgn__table-actions-right">
          {bulkActions.length > 0 && (
            <BulkActions
              actions={bulkActions}
              selectedRows={bulkActionRows}
            />
          )}
        </div>
      </div>
      )}
      <div className="pgn__table-status">
        <div className="pgn__table-status-left">
          <SmartStatus
            isSelectable={isSelectable}
            numberOfSelectedRows={selectedFlatRows.length}
            toggleAllRowsSelected={toggleAllRowsSelected}
            filterName={filterNames.map((filter) => filter.id)}
            pageSize={pageSize}
            itemCount={itemCount}
          />
        </div>
        {!isFilterable && bulkActions.length > 0 && (
          <BulkActions
            actions={bulkActions}
            selectedRows={bulkActionRows}
          />
        )}
      </div>
    </div>
  );
};

TableControlBar.defaultProps = {
  selectedFlatRows: [],
  toggleAllRowsSelected: () => {},
  bulkActions: [],
  filterNames: [],
  pageSize: null,
};

TableControlBar.propTypes = {
  isSelectable: PropTypes.bool.isRequired,
  selectedFlatRows: requiredWhen(PropTypes.arrayOf(PropTypes.shape()), 'isSelectable'),
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  toggleAllRowsSelected: requiredWhen(PropTypes.func, 'isSelectable'),
  bulkActions: PropTypes.arrayOf(PropTypes.shape()),
  isFilterable: PropTypes.bool.isRequired,
  /** Names of applied filters */
  filterNames: PropTypes.arrayOf(PropTypes.string),
  pageSize: PropTypes.number,
  itemCount: PropTypes.number.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TableControlBar;
