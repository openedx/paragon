import React from 'react';
import PropTypes from 'prop-types';
import RBMultiSelect from 'react-bootstrap-multiselect';

function MultiSelect({
  className,
  data,
  disabled,
  values,
}) {
  if (values) {
    data.forEach(dropdownOption => {
      if (values.includes(dropdownOption.value)) {
        dropdownOption.selected = true;
      }
    });
  }

  return (
    <RBMultiSelect
      multiple
      data={data}
      className={className}
      disabled={disabled}
    />
  )
};

MultiSelect.defaultProps = {
  className: undefined,
  disabled: false,
  values: undefined,
};

MultiSelect.propTypes = {
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies the dropdown options. If no label is provided, label will be equal to value. */
  data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string,
  })).isRequired,
  /** Specifies if dropdown is disabled. */
  disabled: PropTypes.bool,
  /** The values of the underlying input - takes an array.  */
  values: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};

export default MultiSelect;
