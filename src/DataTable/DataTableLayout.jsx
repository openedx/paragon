import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SidebarFilters from './SidebarFilters';
import DataTableContext from './DataTableContext';

function DataTableLayout({
  filtersTitle,
  className,
  children,
}) {
  const { setFilter, showFiltersInSidebar } = useContext(DataTableContext);

  return (
    <div className={classNames('pgn__data-table-layout-wrapper', className)}>
      {(showFiltersInSidebar && setFilter) && (
        <div className="pgn__data-table-layout-sidebar">
          <SidebarFilters title={filtersTitle} />
        </div>
      )}
      <div className="pgn__data-table-layout-main">
        {children}
      </div>
    </div>
  );
}

DataTableLayout.defaultProps = {
  className: null,
  filtersTitle: undefined,
};

DataTableLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  filtersTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default DataTableLayout;
