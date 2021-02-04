import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, useWindowSize, breakpoints } from '..';
import { requiredWhen } from './utils/propTypesUtils';

/** The first filter will be as an input, additional filters will be available in a dropdown.  */
const DropdownFilters = ({
  columns, noOfBreakoutFilters,
}) => {
  const { width } = useWindowSize();
  const [breakoutFilters, otherFilters] = useMemo(() => {
    const availableFilters = columns.filter((column) => column.canFilter);
    if (width < breakpoints.small.minWidth) {
      return [null, availableFilters];
    }
    const boFilters = availableFilters.slice(0, noOfBreakoutFilters);
    const dropdownFilters = availableFilters.slice(noOfBreakoutFilters);

    return [boFilters, dropdownFilters];
  }, [columns, width, noOfBreakoutFilters]);

  return (
    <div className="pgn__data-table-filters">
      {breakoutFilters && breakoutFilters.map((column) => (<div className="mr-2" key={column.Header}>{column.render('Filter')}</div>))}
      {otherFilters.length > 0 && (
      <DropdownButton variant="outline-primary" id="table-filters-dropdown" title="Filters">
        {otherFilters.map(column => (
          <div
            key={column.Header}
            className="pgn__data-table-filters-dropdown-item"
          >
            {column.render('Filter')}
          </div>
        ))}
      </DropdownButton>
      )}
    </div>
  );
};

DropdownFilters.defaultProps = {
  noOfBreakoutFilters: 1,
};

DropdownFilters.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    /** Column Header is used as a key */
    Header: PropTypes.string.isRequired,
    /** Defines whether a filter will be displayed for this column or not */
    canFilter: PropTypes.bool,
    /** Called with the string 'Filter' to render the filter */
    render: PropTypes.func.isRequired,
    /** React function component to display the filter */
    Filter: requiredWhen(PropTypes.func, 'canFilter'),
  })).isRequired,
  /** Number between one and four filters that can be shown on the top row. */
  noOfBreakoutFilters: PropTypes.oneOf([1, 2, 3, 4]),
};

export default DropdownFilters;
