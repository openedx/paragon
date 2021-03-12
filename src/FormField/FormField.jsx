import React, { useContext, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { FormControl, Icon } from '..';
// import newId from '../utils/newId';
// import { InputDecoratorGroup } from './InputDecoratorGroup';
// import useToggle from '../hooks/useToggle';
// import { callAllHandlers, useHasValue } from './fieldUtils';
// import { Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled } from '../../icons';

import { FormFieldContextProvider } from './FormFieldContext';

// const FormFieldLabel = () => {};
// const FormFieldInputText = () => {};
// const FormFieldInputSelect = () => {};
// const FormFieldInputSelect = () => {};
// const FormFieldInputGroup = () => {};
// const FormFieldDescription = () => {};


const FormField = ({
  children,
  id,
  isInvalid,
  isValid,
  onFocus,
  onBlur,
  size,
  ...props
}) => {
  useEffect(() => console.log('rendered'), []);
  return (
    <div {...props}>
      <FormFieldContextProvider
        id={id}
        isInvalid={isInvalid}
        isValid={isValid}
        onFocus={onFocus}
        onBlur={onBlur}
        size={size}
      >
        {children}
      </FormFieldContextProvider>
    </div>
  );
};

export default FormField;
