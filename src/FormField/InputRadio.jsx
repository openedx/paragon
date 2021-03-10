import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InputRadio = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={classNames('pgn__radio-input', className)}
    type="radio"
    {...props}
  />
));

export default InputRadio;
