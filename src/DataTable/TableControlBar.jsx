import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SmartStatus from './SmartStatus';
import DropdownFilters from './DropdownFilters';
import DataTableContext from './DataTableContext';
import ActionDisplay from './ActionDisplay';
import { Icon, IconButtonToggle, IconButtonWithTooltip } from '..';
import { GridView, ListView } from '../../icons';

// handles layout for filters, status, and bulk actions
const TableControlBar = ({
  className,
}) => {
  const {
    setFilter,
    showFiltersInSidebar,
    enableDataViewToggle,
    onDataViewToggle,
  } = useContext(DataTableContext);

  return (
    <div className={classNames('pgn__data-table-status-bar', className)}>
      {/* Using setFilter as a proxy for isFilterable */}
      {(setFilter && !showFiltersInSidebar) && (
        <div className="pgn__data-table-actions">
          <div className="pgn__data-table-actions-left">
            <DropdownFilters />
          </div>
          <div className="pgn__data-table-actions-right">
            <ActionDisplay />
          </div>
        </div>
      )}
      <div className="pgn__data-table-status">
        <div className="pgn__data-table-status-left">
          <SmartStatus />
        </div>
        {(!setFilter || (setFilter && showFiltersInSidebar)) && (<ActionDisplay />)}
      </div>
      {enableDataViewToggle
      && (
      <div className="pgn__data-table-view-switching">
        <IconButtonToggle activeValue="card" onChange={value => onDataViewToggle(value)}>
          <IconButtonWithTooltip tooltipContent="Card view" value="card" src={GridView} iconAs={Icon} alt="Card" />
          <IconButtonWithTooltip tooltipContent="List view" value="list" src={ListView} iconAs={Icon} alt="List" />
        </IconButtonToggle>
      </div>
      )}

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
