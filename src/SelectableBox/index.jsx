import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Form from '../Form';
import SelectableBoxSet from './SelectableBoxSet';
import { useCheckboxSetContext } from '../Form/FormCheckboxSetContext';
import { useRadioSetContext } from '../Form/FormRadioSetContext';

const INPUT_TYPES = [
  'radio',
  'checkbox',
];

const SelectableBox = ({
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
}) => {
  const getInputType = () => {
    switch (type) {
      case 'radio':
        return Form.Radio;
      case 'checkbox':
        return Form.Checkbox;
      default:
        return Form.Radio;
    }
  };

  const isChecked = () => {
    switch (type) {
      case 'radio':
        return useRadioSetContext().value === value;
      case 'checkbox':
        return useCheckboxSetContext().value?.includes(value);
      default:
        return useRadioSetContext().value === value;
    }
  };

  const inputRef = useRef(null);
  const input = React.createElement(getInputType(), {
    value,
    checked,
    hidden: inputHidden,
    ref: inputRef,
    tabIndex: -1,
    onChange: () => {},
    ...(type === 'checkbox' && { isIndeterminate }),
  }, null);

  const onClickHandler = () => {
    inputRef.current.click();
    if (onClick) { onClick(inputRef.current); }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="button"
      onClick={onClickHandler}
      onFocus={onFocus}
      className={classNames('pgn__selectable_box', className, {
        'pgn__selectable_box-active': isChecked() || checked,
        'pgn__selectable_box-invalid': isInvalid,
      })}
      tabIndex={0}
    >
      {input}
      {children}
    </div>
  );
};

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
};

SelectableBox.Set = SelectableBoxSet;
export default SelectableBox;
