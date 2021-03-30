import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormRadioGroupContextProvider, useRadioGroupContext } from './FormRadioGroupContext';
import FormRadioGroupLegend from './FormRadioGroupLegend';
import FormRadioGroupFeedback from './FormRadioGroupFeedback';

const FormRadioGroupFieldset = ({ children, ...props }) => {
  const { describedByIds } = useRadioGroupContext();
  const ariaDescribedBy = classNames(props['aria-describedby'], describedByIds);
  const className = classNames('pgn__form-radio-group', props.className)
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

};

FormRadioGroupFieldset.defaultProps = {

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

};

FormRadioGroup.defaultProps = {

};

FormRadioGroup.Legend = FormRadioGroupLegend;
FormRadioGroup.Feedback = FormRadioGroupFeedback;

export default FormRadioGroup;
