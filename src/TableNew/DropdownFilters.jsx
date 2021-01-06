import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { SMALL_SCREEN_BREAKPOINT } from './constants';
import { DropdownButton, useWindowSize } from '..';

/** The first filter will be as an input, additional filters will be available in a dropdown.  */
const DropdownFilters = ({
  columns,
}) => {
  const { width } = useWindowSize();
  const [breakoutFilter, otherFilters] = useMemo(() => {
    const availableFilters = columns.filter((column) => column.canFilter);
    if (width < SMALL_SCREEN_BREAKPOINT) {
      return [null, availableFilters];
    }

    return [availableFilters.shift(), availableFilters];
  }, [columns, width]);

  return (
    <div className="pgn__table-filters">
      {breakoutFilter && <div className="pgn__table-filters-breakout-filter">{breakoutFilter.render('Filter')}</div>}
      {otherFilters.length > 0 && (
      <DropdownButton variant="outline-primary" id="table-filters-dropdown" title="Filters">
        {otherFilters.map(column => (
          <div
            key={column.Header}
            className="pgn__table-filters-dropdown-item"
          >
            {column.render('Filter')}
          </div>
        ))}
      </DropdownButton>
      )}
    </div>

  );
};

DropdownFilters.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string.isRequired,
    canFilter: PropTypes.bool,
    render: PropTypes.func.isRequired,
  })).isRequired,
};

export default DropdownFilters;
