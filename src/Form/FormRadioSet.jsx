import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext, useControlDescriptorId } from './FormGroupContext';
import { FormRadioSetContextProvider } from './FormRadioSetContext';

const RadioSetLegend = ({ children, ...props }) => {
  const id = useControlDescriptorId(props.id);
  const className = classNames(
    'pgn__form-radio-group-legend',
    props.className,
  );

  return (
    <legend
      {...props}
      id={id}
      className={className}
    >
      {children}
    </legend>
  );
};

RadioSetLegend.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
};

RadioSetLegend.defaultProps = {
  id: undefined,
  className: undefined,
};

const FormRadioSet = ({
  children,
  label,
  name,
  value,
  defaultValue,
  isInline,
  ...props
}) => {
  const { getControlProps } = useFormGroupContext();
  const {
    onChange,
    onBlur,
    onFocus,
    ...controlProps
  } = getControlProps(props);
  const className = classNames(
    'pgn__form-radio-group',
    props.className,
  );
  return (
    <FormRadioSetContextProvider
      name={name}
      value={value}
      defaultValue={defaultValue}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    >
      <fieldset
        className={className}
        {...controlProps}
      >
        <RadioSetLegend>
          {label}
        </RadioSetLegend>
        <div
          className={classNames('pgn__radio-set-controls', {
            'pgn__radio-set-controls-inline': isInline,
          })}
        >
          {children}
        </div>
      </fieldset>
    </FormRadioSetContextProvider>
  );
};

FormRadioSet.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-describedby': PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  isInline: PropTypes.bool,
};

FormRadioSet.defaultProps = {
  className: undefined,
  'aria-describedby': undefined,
  value: undefined,
  defaultValue: undefined,
  isInline: false,
};

export default FormRadioSet;
