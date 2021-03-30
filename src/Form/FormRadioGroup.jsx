import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormRadioGroupContextProvider, useRadioGroupContext } from './FormRadioGroupContext';
import FormRadioGroupLegend from './FormRadioGroupLegend';
import FormRadioGroupFeedback from './FormRadioGroupFeedback.jsx';

const FormRadioGroupFieldset = ({ children, ...props }) => {
  const { describedByIds } = useRadioGroupContext();
  const ariaDescribedBy = classNames(props['aria-describedby'], describedByIds);
  const className = classNames('pgn__form-radio-group', props.className);
  return (
    <fieldset
      {...props}
      className={className}
      aria-describedby={ariaDescribedBy}
    >
      {children}
    </fieldset>
  );
};

FormRadioGroupFieldset.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-describedby': PropTypes.string,
  className: PropTypes.string,
};

FormRadioGroupFieldset.defaultProps = {
  className: undefined,
  'aria-describedby': undefined,
};

const FormRadioGroup = ({
  children,
  name,
  isInvalid,
  isValid,
  onChange,
  onFocus,
  value,
  defaultValue,
  onBlur,
  ...props
}) => (
  <FormRadioGroupContextProvider
    isInvalid={isInvalid}
    isValid={isValid}
    name={name}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    groupId={props.id}
    defaultValue={defaultValue}
    value={value}
  >
    <FormRadioGroupFieldset {...props}>
      {children}
    </FormRadioGroupFieldset>
  </FormRadioGroupContextProvider>
);

FormRadioGroup.propTypes = {
  children: PropTypes.node.isRequired,
  'aria-describedby': PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
};

FormRadioGroup.defaultProps = {
  'aria-describedby': undefined,
  className: undefined,
  name: undefined,
  isInvalid: false,
  isValid: false,
  onChange: undefined,
  onFocus: undefined,
  onBlur: undefined,
  value: undefined,
  defaultValue: undefined,
  id: undefined,
};

FormRadioGroup.Legend = FormRadioGroupLegend;
FormRadioGroup.Feedback = FormRadioGroupFeedback;

export default FormRadioGroup;
