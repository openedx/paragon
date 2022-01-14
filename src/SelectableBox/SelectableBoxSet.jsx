import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Form from '../Form';

const INPUT_TYPES = [
  'radio',
  'checkbox',
];

const SelectableBoxSet = ({
  children,
  name,
  value,
  defaultValue,
  onChange,
  type,
  className,
}) => {
  const getInputType = () => {
    switch (type) {
      case 'radio':
        return Form.RadioSet;
      case 'checkbox':
        return Form.CheckboxSet;
      default:
        return Form.RadioSet;
    }
  };

  return React.createElement(getInputType(), {
    name,
    value,
    defaultValue,
    onChange,
    isInline: true,
    className: classNames('pgn__selectable_box-set', className),
  },
  children);
};

SelectableBoxSet.propTypes = {
  /** Specifies a name for the group of `SelectableBox`'es. */
  name: PropTypes.string.isRequired,
  /** Content of the `SelectableBoxSet`. */
  children: PropTypes.node,
  /** A function that receives event of the clicked `SelectableBox` and can be used to handle the value change. */
  onChange: PropTypes.func,
  /** Indicates selected `SelectableBox`'es. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /** Specifies default values for the `SelectableBox`'es. */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Indicates the input type: checkbox or radio. */
  type: PropTypes.oneOf(INPUT_TYPES),
  /** A class that is be appended to the base element. */
  className: PropTypes.string,
};

SelectableBoxSet.defaultProps = {
  children: undefined,
  onChange: () => {},
  value: undefined,
  defaultValue: undefined,
  type: 'radio',
  className: undefined,
};

export default SelectableBoxSet;
