import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';

const FilterStatus = ({
  className, variant, size, onClick, clearSelectionText, buttonClassName,
  filterNames,
}) => (
  <div className={className}>
    Filtered by {filterNames.join(', ')}.
    <Button
      className={buttonClassName}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {clearSelectionText}
    </Button>
  </div>

);

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
  onClick: PropTypes.func.isRequired,
  clearSelectionText: PropTypes.string,
  filterNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterStatus;
