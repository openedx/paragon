import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getInputType } from './utils';
import { requiredWhenNot } from '../utils/propTypes';

const INPUT_TYPES = [
  'radio',
  'checkbox',
];

const DEFAULT_COLUMNS_NUMBER = 2;

const SelectableBoxSet = React.forwardRef(({
  children,
  name,
  value,
  defaultValue,
  onChange,
  type,
  columns,
  className,
  ariaLabel,
  ariaLabelledby,
  ...props
}, ref) => {
  const inputType = getInputType('SelectableBoxSet', type);

  return React.createElement(
    inputType,
    {
      name,
      value,
      defaultValue,
      onChange,
      ref,
      className: classNames(
        'pgn__selectable_box-set',
        `pgn__selectable_box-set--${columns || DEFAULT_COLUMNS_NUMBER}`,
        className,
      ),
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      ...props,
    },
    children,
  );
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
  /**
   * Specifies number of `SelectableBox`'es in a row.
   *
   * Class that is responsible for the columns number: `pgn__selectable_box-set--{columns}`.
   * Max number of columns: `12`.
   */
  columns: PropTypes.number,
  /** A class that is be appended to the base element. */
  className: PropTypes.string,
  /**
   * The ID of the label for the `SelectableBoxSet`.
   *
   * An accessible label must be provided to the `SelectableBoxSet`.
   */
  ariaLabelledby: PropTypes.string,
  /**
   * A label for the `SelectableBoxSet`.
   *
   * If not using `ariaLabelledby`, then `ariaLabel` must be provided */
  ariaLabel: requiredWhenNot(PropTypes.string, 'ariaLabelledby'),
};

SelectableBoxSet.defaultProps = {
  children: undefined,
  onChange: () => {},
  value: undefined,
  defaultValue: undefined,
  type: 'radio',
  columns: DEFAULT_COLUMNS_NUMBER,
  className: undefined,
  ariaLabelledby: undefined,
  ariaLabel: undefined,
};

export default SelectableBoxSet;
