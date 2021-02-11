import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import DataTableContext from './DataTableContext';

const FilterStatus = ({
  className, variant, size, clearSelectionText, buttonClassName,
}) => {
  const { state, setAllFilters } = useContext(DataTableContext);
  if (!setAllFilters) {
    return null;
  }

  const filterNames = state.filters ? state.filters.map((filter) => filter.id) : [];

  return (
    <div className={className}>
      Filtered by {filterNames.join(', ')}.
      <Button
        className={buttonClassName}
        variant={variant}
        size={size}
        onClick={() => setAllFilters([])}
      >
        {clearSelectionText}
      </Button>
    </div>
  );
};

FilterStatus.defaultProps = {
  className: null,
  buttonClassName: 'pgn__smart-status-button',
  variant: 'link',
  size: 'inline',
  clearSelectionText: 'Clear Selection',
};

FilterStatus.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  clearSelectionText: PropTypes.string,
};

export default FilterStatus;
