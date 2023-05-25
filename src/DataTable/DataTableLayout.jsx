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

DataTableLayout.propTypes = {
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies title of the component. */
  filtersTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

DataTableLayout.defaultProps = {
  className: null,
  filtersTitle: undefined,
};

export default DataTableLayout;
