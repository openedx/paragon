import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RBFormControl from 'react-bootstrap/FormControl';
import { IMaskInput } from 'react-imask';
import { useFormGroupContext } from './FormGroupContext';
import FormControlFeedback from './FormControlFeedback';
import FormControlDecoratorGroup from './FormControlDecoratorGroup';

import { callAllHandlers, useHasValue } from './fieldUtils';

const DEFAULT_MASK_VALUE = '00-00-000';

const FormControl = React.forwardRef(({
  as,
  className,
  controlClassName,
  leadingElement,
  trailingElement,
  floatingLabel,
  autoResize,
  onChange,
  hasInputMask,
  mask,
  ...props
}, ref) => {
  const {
    isInvalid,
    isValid,
    getControlProps,
    ...formGroupContext
  } = useFormGroupContext();
  const inputRef = React.useRef();
  const resolvedRef = ref || inputRef;
  const size = props.size || formGroupContext.size;

  const [hasValue, checkInputEventValue] = useHasValue({
    defaultValue: props.defaultValue,
    value: props.value,
  });

  const handleResize = useCallback(() => {
    if (as === 'textarea' && autoResize) {
      if (!resolvedRef.current.initialHeight && !resolvedRef.current.offsets) {
        resolvedRef.current.initialHeight = resolvedRef.current.offsetHeight;
        resolvedRef.current.offsets = resolvedRef.current.offsetHeight - resolvedRef.current.clientHeight;
      }
      resolvedRef.current.style.height = `${resolvedRef.current.initialHeight}px`;
      resolvedRef.current.style.height = `${resolvedRef.current.scrollHeight + resolvedRef.current.offsets}px`;
    }
  }, [as, autoResize, resolvedRef]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  const controlProps = getControlProps({
    ...props,
    // eslint-disable-next-line react/prop-types
    onBlur: callAllHandlers(checkInputEventValue, props.onBlur),
  });

  const handleOnChange = (e) => {
    handleResize();
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <FormControlDecoratorGroup
      size={size}
      leadingElement={leadingElement}
      trailingElement={trailingElement}
      floatingLabel={floatingLabel}
      className={className}
    >
      <RBFormControl
        as={hasInputMask ? IMaskInput : as}
        ref={resolvedRef}
        size={size}
        isInvalid={isInvalid}
        isValid={isValid}
        className={classNames(controlClassName, {
          'has-value': hasValue,
        })}
        onChange={handleOnChange}
        mask={mask}
        {...controlProps}
      />
    </FormControlDecoratorGroup>
  );
});

const SIZE_CHOICES = ['sm', 'lg'];

FormControl.Feedback = FormControlFeedback;
FormControl.Description = FormControlFeedback;

FormControl.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies base element for the control component. */
  as: PropTypes.elementType,
  /** Specifies function that is triggered on input value change. */
  onChange: PropTypes.func,
  /** Specifies default value of the input component. */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Specifies current value of the input component. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Specifies id of the control component. */
  id: PropTypes.string,
  /** Specifies class name for the control component. */
  controlClassName: PropTypes.string,
  /** Specifies size for the control component. */
  size: PropTypes.oneOf(SIZE_CHOICES),
  /** Specifies leading element to display for the input component. */
  leadingElement: PropTypes.node,
  /** Specifies trailing element to display for the input component. */
  trailingElement: PropTypes.node,
  /** Specifies floating label to display for the input component. */
  floatingLabel: PropTypes.node,
  /** Specifies whether to render input as plain text. */
  plaintext: PropTypes.bool,
  /** Specifies whether to display control in valid state, this affects styling. */
  isValid: PropTypes.bool,
  /** Specifies whether to display control in invalid state, this affects styling. */
  isInvalid: PropTypes.bool,
  /** Only for `as="textarea"`. Specifies whether the input can be resized according to the height of content. */
  autoResize: PropTypes.bool,
  /** Specifies whether to use an input mask for the input. */
  hasInputMask: PropTypes.bool,
  /** Specifies the input mask to be used if `hasInputMask` is set to `true`. */
  mask: PropTypes.string,
};

FormControl.defaultProps = {
  as: 'input',
  className: undefined,
  id: undefined,
  controlClassName: undefined,
  onChange: undefined,
  defaultValue: undefined,
  value: undefined,
  size: undefined,
  leadingElement: undefined,
  trailingElement: undefined,
  floatingLabel: undefined,
  plaintext: false,
  isValid: undefined,
  isInvalid: undefined,
  autoResize: false,
  hasInputMask: false,
  mask: DEFAULT_MASK_VALUE,
};

export default FormControl;
