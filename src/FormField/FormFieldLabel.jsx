import React, { useContext, createContext, useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '..';
// import newId from '../utils/newId';
// import { InputDecoratorGroup } from './InputDecoratorGroup';
// import useToggle from '../hooks/useToggle';
// import { callAllHandlers, useHasValue } from './fieldUtils';
import { Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled } from '../../icons';

import { useFormFieldContext } from './FormFieldContext';

const FieldLabel = ({ children, isInline, ...props }) => {
  const {
    id: fieldId,
    size,
  } = useFormFieldContext({ size: props.size });
  const className = classNames(
    'pgn__field-label',
    {
      'pgn__field-label-inline': isInline,
      'pgn__field-label-lg': size === 'lg',
      'pgn__field-label-sm': size === 'sm',
    },
    props.className,
  );

  return (
    <label
      {...props} className={className}
      htmlFor={fieldId}
    >
      {children}
    </label>
  );
};

export default FieldLabel;
