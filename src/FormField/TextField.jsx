import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormControl } from '..';
import newId from '../utils/newId';
import { InputDecoratorGroup } from './InputDecoratorGroup';
import useToggle from '../hooks/useToggle';
import { callAllHandlers, useHasValue } from './fieldUtils';

const FieldLabel = ({ children, isInline, size, className }) => (
  <label className={classNames('pgn__field-label', {
    'pgn__field-label-inline': isInline,
    'pgn__field-label-lg': size === 'lg',
    'pgn__field-label-sm': size === 'sm',
  })}>{children}</label>
);

const FormField = React.forwardRef(({
  label,
  size,
  labelPosition,
  leadingElement,
  trailingElement,
  value,
  className,
  formControlClassName,
  defaultValue,
  id,
  ...formControlProps
}, ref) => {
  const [hasFocus, setHasFocusTrue, setHasFocusFalse] = useToggle(false);
  const [hasValue, checkInputEventValue] = useHasValue(defaultValue, value);
  const controlId = React.useMemo(() => id || newId('text-field'), [id]);
  const fieldId = `${controlId}-field`;
  const hasFloatingLabel = labelPosition === 'floating';
  const isInline = labelPosition === 'inline';

  return (
    <div
      id={fieldId}
      className={classNames(
        'pgn__text-field',
        {
          'pgn__text-field-has-value': hasValue,
          'pgn__text-field-has-focus': hasFocus,
          'pgn__text-field-inline': isInline,
        },
        className,
      )}
    >
      {!hasFloatingLabel && <FieldLabel size={size} isInline={isInline}>{label}</FieldLabel>}
      <InputDecoratorGroup
        leadingElement={leadingElement}
        trailingElement={trailingElement}
        floatingLabel={hasFloatingLabel && label}
        isLabelFloating={hasValue || hasFocus}
        size={size}
      >
        <FormControl
          ref={ref}
          id={controlId}
          value={value}
          size={size}
          className={formControlClassName}
          defaultValue={defaultValue}
          onFocus={(event) => callAllHandlers(
            event,
            setHasFocusTrue,
            formControlProps.onFocus,
          )}
          onBlur={(event) => callAllHandlers(
            event,
            setHasFocusFalse,
            checkInputEventValue,
            formControlProps.onBlur,
          )}
          {...formControlProps}
        />
      </InputDecoratorGroup>
    </div>
  );
});

FormField.defaultProps = {
  labelPosition: 'floating',
};

const TextField = React.forwardRef((props, ref) => <FormField {...props} ref={ref} />);

TextField.defaultProps = {
  labelPosition: 'floating',
};


const SelectField = React.forwardRef(({ children, ...props }, ref) => (
  <FormField ref={ref} as="select" {...props} trailingElement={undefined}>
    {props.labelPosition === 'floating' && <option></option>}
    {children}
  </FormField>
));

SelectField.defaultProps = {
  labelPosition: 'floating',
};


export default TextField;
export { SelectField };