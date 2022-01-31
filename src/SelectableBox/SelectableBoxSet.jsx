import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getType } from './utils';

const INPUT_TYPES = [
  'radio',
  'checkbox',
];

const SelectableBoxSet = React.forwardRef(({
  children,
  name,
  value,
  defaultValue,
  onChange,
  type,
  className,
}, ref) => {
  const inputType = getType('SelectableBoxSet', type);

  return React.createElement(inputType, {
    name,
    value,
    defaultValue,
    onChange,
    ref,
    isInline: true,
    className: classNames('pgn__selectable_box-set', className),
  },
  children);
});

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
