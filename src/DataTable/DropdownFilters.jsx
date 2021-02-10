import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, useWindowSize, breakpoints } from '..';
import DataTableContext from './TableContext';

/** The first filter will be as an input, additional filters will be available in a dropdown.  */
const DropdownFilters = ({
  numBreakoutFilters,
}) => {
  const { width } = useWindowSize();
  const { columns } = useContext(DataTableContext);

  const [breakoutFilters, otherFilters] = useMemo(() => {
    if (!columns) {
      return [[], []];
    }
    const availableFilters = columns.filter((column) => column.canFilter);
    if (width < breakpoints.small.minWidth) {
      return [null, availableFilters];
    }
    const boFilters = availableFilters.slice(0, numBreakoutFilters);
    const dropdownFilters = availableFilters.slice(numBreakoutFilters);

    return [boFilters, dropdownFilters];
  }, [columns, width, numBreakoutFilters]);

  return (
    <div className="pgn__data-table-filters">
      {breakoutFilters.length > 0 && breakoutFilters.map((column) => (<div className="mr-2" key={column.Header}>{column.render('Filter')}</div>))}
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
  numBreakoutFilters: 1,
};

DropdownFilters.propTypes = {
  /** Number between one and four filters that can be shown on the top row. */
  numBreakoutFilters: PropTypes.oneOf([1, 2, 3, 4]),
};

export default DropdownFilters;
