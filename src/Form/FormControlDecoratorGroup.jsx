import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormGroupContext } from './FormGroupContext';
import { FORM_CONTROL_SIZES } from './constants';
import FormControlFloatingLabel from './FormControlFloatingLabel';
import FormControlDecorator from './FormControlDecorator';

/**
  * Decorates a textual input.
  */
function FormControlDecoratorGroup({
  children,
  leadingElement,
  trailingElement,
  floatingLabel,
  className,
  ...props
}) {
  const formGroupContext = useFormGroupContext(props);
  const size = props.size || formGroupContext.size;
  return (
    <div
      className={classNames(
        'pgn__form-control-decorator-group',
        {
          'has-prepended-node': !!leadingElement,
          'has-appended-node': !!trailingElement,
          'has-leading-element': !!leadingElement,
          'has-trailing-element': !!trailingElement,
          'has-floating-label': !!floatingLabel,
          'pgn__form-control-decorator-group-lg': size === FORM_CONTROL_SIZES.LARGE,
          'pgn__form-control-decorator-group-sm': size === FORM_CONTROL_SIZES.SMALL,
        },
        className,
      )}
      {...props}
    >
      {children}
      {leadingElement && <FormControlDecorator location="leading">{leadingElement}</FormControlDecorator>}
      {trailingElement && <FormControlDecorator location="trailing">{trailingElement}</FormControlDecorator>}
      {floatingLabel && <FormControlFloatingLabel>{floatingLabel}</FormControlFloatingLabel>}
    </div>
  );
}

FormControlDecoratorGroup.propTypes = {
  children: PropTypes.node.isRequired,
  leadingElement: PropTypes.node,
  trailingElement: PropTypes.node,
  floatingLabel: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    FORM_CONTROL_SIZES.SMALL,
    FORM_CONTROL_SIZES.LARGE,
  ]),
};
FormControlDecoratorGroup.defaultProps = {
  leadingElement: undefined,
  trailingElement: undefined,
  floatingLabel: undefined,
  className: undefined,
  size: undefined,
};

export default FormControlDecoratorGroup;
