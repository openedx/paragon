import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input, FormControl, InputText, InputSelect, InputTextarea } from '..';
import newId from '../utils/newId';
import useToggle from '../hooks/useToggle';

import { callAllHandlers, useHasValue } from './fieldUtils';

const TextField = ({ label, size, leadingElement, trailingElement, value, defaultValue, id, ...formControlProps }) => {
  const [hasFocus, setHasFocusTrue, setHasFocusFalse] = useToggle(false);
  const [hasValue, checkInputEventValue] = useHasValue(defaultValue, value);
  const controlId = React.useMemo(() => id || newId('text-field'), [id]);
  const fieldId = `${controlId}-field`;

  return (
    <div
      id={fieldId}
      className={classNames(
        'pgn__text-field',
        {
          'pgn__text-field-has-value': hasValue,
          'pgn__text-field-has-focus': hasFocus,
        },
      )}
    >
    <label>{label}</label>textarea
      <InputDecoratorGroup>
        <FormControl
          as="textarea"
          id={controlId}
          value={value}
          size={size}
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
        />
      </InputDecoratorGroup>
    </div>
  );
};

export { TextField };
// <TextField
//   leadingElement={null}
//   trailingElement={null}
//   label={null}
// />

// <SelectField

// />

// <RadioButtonGroupField

// />

// <CheckboxGroupField
// />