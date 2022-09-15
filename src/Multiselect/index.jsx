import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import components, { MultiValueContainer } from './MultiselectComponents';

const Multiselect = React.forwardRef(({
  className,
  variant,
  disabled,
  error,
  ...props
}, ref) => (
  <>
    <Select
      isMulti
      isDisabled={disabled}
      ref={ref}
      components={{
        ...components,
        MultiValueContainer: (containerProps) => <MultiValueContainer variant={variant} {...containerProps} />,
      }}
      className={classNames('pgn__multiselect', className, { dark: variant === 'dark', disabled, error })}
      {...props}
    />
    {error && <div className="pgn__multiselect__error-message">{error}</div>}
  </>
));

Multiselect.defaultProps = {
  className: undefined,
  variant: 'light',
  disabled: false,
  error: undefined,
};

Multiselect.propTypes = {
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** The `Multiselect` style variant to use. */
  variant: PropTypes.oneOf(['light', 'dark']),
  /** Specifies whether the `Multiselect` is disabled. */
  disabled: PropTypes.bool,
  /** Applies the error styles and displays the error text if it is specified. */
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Multiselect;
