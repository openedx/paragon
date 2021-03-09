import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormControl, Icon, FormCheck, ValidationFormGroup } from '..';
import { CheckBoxOutlineBlank, Check as CheckIcon, CheckBox as CheckBoxIcon, IndeterminateCheckBox, RadioButtonChecked, RadioButtonUnchecked } from '../../icons';

const formControlClassNames = ({ size }, ...others) => classNames(
  'form-control',
  {
    'form-control-sm': size === 'sm',
    'form-control-lg': size === 'lg',
  },
  ...others,
);


const Select = React.forwardRef(({ label, children, ...props }, ref) => (
  <InputBox label={label} hasValue={!!props.value} size={props.size}>
    <FormControl ref={ref} as="select" aria-label={label} {...props}>
      <option></option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </FormControl>
  </InputBox>
));

// const Input = React.forwardRef(({ label, ...props }, ref) => (
//   <InputBox label={label} hasValue={!!props.value} size={props.size}>
//     <FormControl ref={ref} aria-label={label} {...props} />
//   </InputBox>
// ));

const Textarea = React.forwardRef(({ label, ...props }, ref) => (
  <InputBox label={label} hasValue={!!props.value} size={props.size}>
    <FormControl ref={ref} as="textarea" aria-label={label} {...props} />
  </InputBox>
));

const Radio = React.forwardRef(({ label, ...props }, ref) => (
  <label class="pgn__checkbox">
    <input class="pgn__check-input" type="radio" id="flexCheckDefault"  ref={ref} {...props} />
    <span class="pgn__checkbox-label" for="flexCheckDefault">
      {label}
    </span>
  </label>
));

const Input = React.forwardRef((props, ref) => {
  const fieldContext = {};

  return (
    <input
      ref={ref}
      {...fieldContext}
      {...props}
    />
  );
});

/*
  aria-describedby
  aria-invalid
  aria-required
  aria-label
*/

const RadioGroup = ({ name, label, options, value, ...props }) => (
  <div>
    <div>{label}</div>
    {options.map(option => <Radio {...option} name={name} checked={value === option.value} />)}
  </div>
);

// const Checkbox = React.forwardRef(({ label, ...props }, ref) => (
//   <label>
//     <input className="pgn__checkbox" data-indeterminate type="checkbox" ref={ref} type="checkbox" aria-label={label} {...props} />
//     <Icon className="pgn__checkbox-icon pgn__checkbox-icon-checked" src={CheckBoxIcon} />
//     <Icon className="pgn__checkbox-icon pgn__checkbox-icon-unchecked" src={CheckBoxOutlineBlank} />
//     <Icon className="pgn__checkbox-icon pgn__checkbox-icon-indeterminate" src={IndeterminateCheckBox} />
//     <span>{label}</span>
//   </label>
// ));



const Checkbox = React.forwardRef(
  ({ indeterminate, label, ...props }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <label class="pgn__checkbox">
        <input class="pgn__check-input" type="checkbox"id="flexCheckDefault"  ref={resolvedRef} {...props} />
        <span class="pgn__checkbox-label" for="flexCheckDefault">
          {label}
        </span>
      </label>
    );
  },
);


const CheckboxGroup = ({ name, label, options, ...props }) => (
  <fieldset className="pgn__checkbox-group">
    <legend className="pgn__checkbox-group-legend">{label}</legend>
    <div className="pgn__checkbox-group-options">
      {options.map(option => <Checkbox isInline {...option} name={name} />)}
    </div>
  </fieldset>
);

const Switch = React.forwardRef(({ label, ...props }, ref) => (
  <div>
    <input aria-label={label} type="checkbox" {...props} />
    <span>{label}</span>
  </div>
));

export {
  Select,
  Input,
  Textarea,
  RadioGroup,
  CheckboxGroup,
  Switch,
  Checkbox,
};

const InputBoxIcon = ({ position, children }) => (
  <div
    className={classNames(
      'pgn__input-box-icon',
      `pgn__input-box-icon-${position}`,
    )}
  >
    {children}
  </div>
);

InputBoxIcon.defaultProps = {
  position: 'leading',
};
InputBoxIcon.propTypes = {
  position: PropTypes.oneOf(['leading', 'trailing']),
};

const FloatingLabel = ({ children, withLeadingIcon, isFloating }) => (
  <div className={classNames('pgn__input-floating-label', {
    'with-leading-icon': withLeadingIcon,
    'is-floating': isFloating,
  })}>
    <div aria-hidden className="pgn__input-floating-label-content">
      <div className="pgn__input-floating-label-text">
        {children}
      </div>
    </div>
  </div>
);

const InputBox = ({ children, hasValue, label, leadingIcon, trailingIcon, size, ...props }) => (
  <div
    {...props}
    className={classNames(
      'pgn__input-box',
      {
        'with-leading-icon': !!leadingIcon,
        'with-trailing-icon': !!trailingIcon,
        'has-value': hasValue,
        'pgn__input-box-lg': size === 'lg',
        'pgn__input-box-sm': size === 'sm',
      },
      props.className,
    )}
  >
    <InputBoxIcon position="leading">{leadingIcon}</InputBoxIcon>
    {children}
    <InputBoxIcon position="trailing" src={trailingIcon}>{trailingIcon}</InputBoxIcon>
    <FloatingLabel isFloating={hasValue} withLeadingIcon={!!leadingIcon}>{label}</FloatingLabel>
  </div>
);

const FormField = ({
  label,
  name,
  value,
  onChange,
  trailingIcon,
  leadingIcon,
  size,
  type,
  ...props
}) => (
  <div
    className={classNames('pgn__form-field', {
      'pgn__form-field-sm': size === 'sm',
      'pgn__form-field-lg': size === 'lg',
    })}
  >
    <InputBox
      label={label}
      hasValue={!!value}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      size={size}
    >
      <FormControl
        {...props}
        size={size}
        onChange={onChange}
        as={type}
        aria-label={label}
        value={value}
        className="pgn__input"
      />
    </InputBox>
  </div>
);

FormField.defaultProps = {
  size: 'lg',
  as: 'input',
};

export default FormField;

