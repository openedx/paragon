import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RBMultiSelect from 'react-bootstrap-multiselect';

const MultiSelect = React.forwardRef(({
  className,
  data,
  disabled,
  onChange,
  value,
  ...props
}, ref) => {

  const handleOnChange = (e) => {
    if (onChange) onChange(e);
  }

  return (
    <RBMultiSelect
      multiple
      data={data}
      // className={className}
      // disabled={disabled}
      // onChange={handleOnChange}
      // value={value}
    />
  )
});

MultiSelect.defaultProps = {
  className: undefined,
  disabled: false,
  value: undefined,
  onChange: undefined,
};

MultiSelect.propTypes = {
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies the dropdown options. */
  data: PropTypes.node.isRequired,
  /** Specifies if dropdown is disabled. */
  disabled: PropTypes.bool,
  /** Specifies function that is triggered on input value change. */
  onChange: PropTypes.func,
  /** The value attribute of underlying input */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number
  ]),
};

export default MultiSelect;
