import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormControl, Icon } from '..';
import newId from '../utils/newId';
import { InputDecoratorGroup } from './InputDecoratorGroup';
import useToggle from '../hooks/useToggle';
import { callAllHandlers, useHasValue } from './fieldUtils';
import { Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled } from '../../icons';

const FieldLabel = ({ children, isInline, size, className }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control jsx-a11y/label-has-for
  <label className={classNames('pgn__field-label', {
    'pgn__field-label-inline': isInline,
    'pgn__field-label-lg': size === 'lg',
    'pgn__field-label-sm': size === 'sm',
  })}>{children}</label>
);

const FieldDescription = ({ children, variant, icon, className, ...props }) => (
  <div
    className={classNames(
      'pgn__field-description',
      `pgn__field-description-${variant}`,
      className,
    )}
    {...props}
  >
    {icon || <Icon src={FieldDescription.STATUS_ICONS[variant]} />}
    {children}
  </div>
);

FieldDescription.STATUS_ICONS = {
  valid: Check,
  invalid: Close,
  'criteria-empty': RadioButtonUnchecked,
  'criteria-invalid': Cancel,
  'criteria-valid': CheckCircle,
  warning: WarningFilled,
};


// const FieldDescriptionValid = ({ children, className, ...props }) => (
//   <FieldDescription
//     icon="Icon:"
//     className={classNames('pgn__field-description-valid', className)}
//   >
//     {children}
//   </FieldDescription>
// );

// const FieldDescriptionInvalid = ({ children, className, ...props }) => (
//   <FieldDescription
//     icon="Icon:"
//     className={classNames('pgn__field-description-invalid', className)}
//   >
//     {children}
//   </FieldDescription>
// );

// const FieldDescriptionHelpText = ({ children, className, ...props }) => (
//   <FieldDescription
//     className={classNames('pgn__field-description-help-text', className)}
//   >
//     {children}
//   </FieldDescription>
// );


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
  // validatation form group things.
  invalidMessage,
  invalid,
  valid,
  validMessage,
  helpText,
  //
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

      <div>
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
        <FieldDescription variant="default">This is a field description.</FieldDescription>
        <FieldDescription variant="invalid">This is a field description.</FieldDescription>
        <FieldDescription variant="warning">This is a field description.</FieldDescription>
        <FieldDescription variant="valid">This is a field description.</FieldDescription>
        <FieldDescription variant="muted">This is a field description.</FieldDescription>
        <FieldDescription variant="criteria-empty">This is a field description.</FieldDescription>
        <FieldDescription variant="criteria-valid">This is a field description.</FieldDescription>
        <FieldDescription variant="criteria-invalid">This is a field description.</FieldDescription>
      </div>
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