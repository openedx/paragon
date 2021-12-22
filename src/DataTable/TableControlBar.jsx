import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SmartStatus from './SmartStatus';
import DropdownFilters from './DropdownFilters';
import DataTableContext from './DataTableContext';
import ActionDisplay from './ActionDisplay';
import DataViewToggle from './DataViewToggle';

// handles layout for filters, status, and bulk actions
const TableControlBar = ({ className }) => {
  const {
    setFilter,
    showFiltersInSidebar,
    dataViewToggleOptions: { togglePlacement },
  } = useContext(DataTableContext);

  const invalidtogglePlacement = !togglePlacement || !(['left', 'bottom']).includes(togglePlacement);
  const actionsSectionClassName = classNames({
    'pgn__data-table-actions-right-toggle-bottom': togglePlacement === 'bottom',
    'pgn__data-table-actions-right': invalidtogglePlacement || togglePlacement === 'left',
  });
  return (
    <div className={classNames('pgn__data-table-status-bar', className)}>
      {/* Using setFilter as a proxy for isFilterable */}
      {(setFilter && !showFiltersInSidebar) && (
        <div className="pgn__data-table-actions">
          <div className="pgn__data-table-actions-left">
            <DropdownFilters />
          </div>
          <div className={actionsSectionClassName}>
            <DataViewToggle />
            <ActionDisplay />
          </div>
        </div>
      )}
      <div className="pgn__data-table-status">
        <div className="pgn__data-table-status-left">
          <SmartStatus />
        </div>
        {(!setFilter || (setFilter && showFiltersInSidebar)) && (
          <div className={actionsSectionClassName}>
            <DataViewToggle />
            <ActionDisplay />
          </div>
        )}
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
