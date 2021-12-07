import React from 'react';
import PropTypes from 'prop-types';

const DataviewToggleButton = function Button({ value }) {
  return (
    <div>hey this is a button wit value {value}</div>
  );
};

DataviewToggleButton.propTypes = {
  value: PropTypes.oneOf(PropTypes.string, PropTypes.number, PropTypes.object).isRequired,
};

export default DataviewToggleButton;
