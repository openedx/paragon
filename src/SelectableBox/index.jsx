import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SelectableBoxSet from './SelectableBoxSet';
import { useCheckboxSetContext } from '../Form/FormCheckboxSetContext';
import { useRadioSetContext } from '../Form/FormRadioSetContext';
import { getInputType } from './utils';

const INPUT_TYPES = [
  'radio',
  'checkbox',
];

const SelectableBox = React.forwardRef(({
  type,
  value,
  checked,
  children,
  isIndeterminate,
  isInvalid,
  onClick,
  onFocus,
  inputHidden,
  className,
  showActiveBoxState,
  ...props
}, ref) => {
  const inputType = getInputType('SelectableBox', type);
  const { value: radioValue } = useRadioSetContext();
  const { value: checkboxValues = [] } = useCheckboxSetContext();

  const isChecked = () => {
    switch (type) {
      case 'radio':
        return radioValue === value;
      case 'checkbox':
        return checkboxValues.includes(value);
      default:
        return radioValue === value;
    }
  };

  const inputRef = useRef(null);
  const input = React.createElement(inputType, {
    value,
    checked,
    hidden: inputHidden,
    ref: inputRef,
    tabIndex: -1,
    onChange: () => {},
    ...(type === 'checkbox' ? { ...props, isIndeterminate } : { ...props }),
  }, null);

  useEffect(() => {
    if (onClick && inputRef.current) {
      inputRef.current.onclick = () => onClick(inputRef.current);
    }
  }, [onClick]);

  return (
    <div
      role="button"
      onKeyPress={() => inputRef.current.click()}
      onClick={() => inputRef.current.click()}
      onFocus={onFocus}
      className={classNames('pgn__selectable_box', className, {
        'pgn__selectable_box-active': (!inputHidden && !showActiveBoxState) ? false : isChecked() || checked,
        'pgn__selectable_box-invalid': isInvalid,
      })}
      tabIndex={0}
      ref={ref}
      {...props}
    >
      {input}
      {children}
    </div>
  );
});

SelectableBox.propTypes = {
  /** Content of the `SelectableBox`. */
  children: PropTypes.node.isRequired,
  /** A value that is passed to the input tag. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Controls whether `SelectableBox` is checked. */
  checked: PropTypes.bool,
  /** Indicates the input type: checkbox or radio. */
  type: PropTypes.oneOf(INPUT_TYPES),
  /** Function that is called when the `SelectableBox` is clicked. */
  onClick: PropTypes.func,
  /** Function that is called when the `SelectableBox` is focused. */
  onFocus: PropTypes.func,
  /** Controls display of the input (checkbox or radio button) on the `SelectableBox`. */
  inputHidden: PropTypes.bool,
  /** Indicates a state for the 'checkbox' `type` when `SelectableBox` is neither checked nor unchecked. */
  isIndeterminate: PropTypes.bool,
  /** Adds errors styles to the `SelectableBox`. */
  isInvalid: PropTypes.bool,
  /** A class that is appended to the base element. */
  className: PropTypes.string,
  /** Controls the visibility of the active state for the `SelectableBox`. */
  showActiveBoxState: PropTypes.bool,
};

SelectableBox.defaultProps = {
  value: undefined,
  checked: false,
  type: 'radio',
  onClick: () => {},
  onFocus: () => {},
  inputHidden: true,
  isIndeterminate: false,
  isInvalid: false,
  className: undefined,
  showActiveBoxState: true,
};

SelectableBox.Set = SelectableBoxSet;
export default SelectableBox;
