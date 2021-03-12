import React, {
  useContext, createContext, useMemo, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '..';
// import newId from '../utils/newId';
// import { InputDecoratorGroup } from './InputDecoratorGroup';
// import useToggle from '../hooks/useToggle';
// import { callAllHandlers, useHasValue } from './fieldUtils';
import {
  Check, Close, Cancel, CheckCircle, RadioButtonUnchecked, WarningFilled,
} from '../../icons';

import { useFormFieldContext } from './FormFieldContext';

const FormFieldDescription = ({
  children, variant, icon, className, ...props
}) => {
  const { id: fieldId, getNewDescriptorId } = useFormFieldContext();
  const [id, setId] = useState();
  useEffect(() => setId(getNewDescriptorId()), [fieldId]);
  return (
    <div
      id={id}
      className={classNames(
        'pgn__field-description',
        `pgn__field-description-${variant}`,
        className,
      )}
      {...props}
    >
      {icon || <Icon src={Check} />}
      {children}
    </div>
  );
};

export default FormFieldDescription;
