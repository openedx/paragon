import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SmartStatus from './SmartStatus';
import DropdownFilters from './DropdownFilters';
import DataTableContext from './DataTableContext';
import ActionDisplay from './ActionDisplay';
import DataViewToggle from './DataViewToggle';

// handles layout for filters, status, and bulk actions
function TableControlBar({ className }) {
  const {
    setFilter,
    showFiltersInSidebar,
    dataViewToggleOptions: { togglePlacement },
  } = useContext(DataTableContext);

  const invalidTogglePlacement = !togglePlacement || !(['left', 'bottom']).includes(togglePlacement);
  const actionsSectionClassName = classNames({
    'pgn__data-table-actions-right-toggle-bottom': togglePlacement === 'bottom',
    'pgn__data-table-actions-right': invalidTogglePlacement || togglePlacement === 'left',
  });
  return (
    <div className={classNames('pgn__data-table-status-bar', className)} data-testid="table-control-bar">
      {/* Using setFilter as a proxy for isFilterable */}
      {(setFilter && !showFiltersInSidebar) && (
      <div className="pgn__data-table-actions">
        <div className="pgn__data-table-actions-left">
          <DropdownFilters />
        </div>
        <div className={actionsSectionClassName}>
          <div>
            <ActionDisplay />
          </div>
        </div>

      </div>
      )}
      <div className="pgn__data-table-status">
        <div className="pgn__data-table-status-left">
          {togglePlacement !== 'bottom' ? <SmartStatus /> : null}
        </div>
        {(!setFilter || (setFilter && showFiltersInSidebar)) && (
          <div className={actionsSectionClassName}>
            <div className="pgn__data-table-toggle">
              {togglePlacement === 'bottom' ? <SmartStatus /> : null}
              <DataViewToggle />
            </div>
            <div>
              <ActionDisplay />
            </div>
          </div>
        )}
        {(setFilter && !showFiltersInSidebar) && (
          <div className="pgn__data-table-toggle">
            <DataViewToggle />
          </div>
        )}
      </div>
    </div>
  );
}

TableControlBar.propTypes = {
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
};

TableControlBar.defaultProps = {
  className: null,
};

export default TableControlBar;
