import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import DataTableContext from './DataTableContext';

const FilterStatus = ({
  className, variant, size, clearFiltersText, buttonClassName, showFilteredFields,
}) => {
  const { state, setAllFilters } = useContext(DataTableContext);
  if (!setAllFilters) {
    return null;
  }

  const filterNames = state.filters ? state.filters.map((filter) => filter.id) : [];
  const filterTexts = (<p>Filtered by {filterNames.join(', ')}</p>);

  return (
    <div className={className}>
      {showFilteredFields && filterTexts}
      <Button
        className={buttonClassName}
        variant={variant}
        size={size}
        onClick={() => setAllFilters([])}
      >
        {clearFiltersText}
      </Button>
    </div>
  );
};

FilterStatus.defaultProps = {
  className: null,
  buttonClassName: 'pgn__smart-status-button',
  variant: 'link',
  size: 'inline',
  clearFiltersText: 'Clear Filters',
  showFilteredFields: true,
};

FilterStatus.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  clearFiltersText: PropTypes.string,
  showFilteredFields: PropTypes.bool,
};

export default FilterStatus;
