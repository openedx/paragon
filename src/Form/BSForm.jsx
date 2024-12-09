import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import FormCheck from './FormCheck';
import FormFile from './FormFile';
import FormControl from './FormControl';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormText from './FormText';
import Switch from './Switch';
// import { useBootstrapPrefix } from './ThemeProvider';
import createWithBsPrefix from './createWithBsPrefix';
// import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';

const FormRow = createWithBsPrefix('form-row');

const propTypes = {
  /**
   * @default {'form'}
   */
  bsPrefix: PropTypes.string,

  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: PropTypes.any,

  /**
   * Display the series of labels, form controls,
   * and buttons on a single horizontal row
   */
  inline: PropTypes.bool,

  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: PropTypes.bool,
  as: PropTypes.elementType,
};

const defaultProps = {
  inline: false,
};

const FormImpl = (React.forwardRef(
  (
    {
      bsPrefix,
      inline,
      className,
      validated,
      as: Component = 'form',
      ...props
    },
    ref,
  ) => {
    // bsPrefix = useBootstrapPrefix(bsPrefix, 'form');
    bsPrefix = 'form';
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(
          className,
          validated && 'was-validated',
          inline && `${bsPrefix}-inline`,
        )}
      />
    );
  },
));

FormImpl.displayName = 'Form';
FormImpl.propTypes = propTypes;
FormImpl.defaultProps = defaultProps;

FormImpl.Row = FormRow;
FormImpl.Group = FormGroup;
FormImpl.Control = FormControl;
FormImpl.Check = FormCheck;
FormImpl.File = FormFile;
FormImpl.Switch = Switch;
FormImpl.Label = FormLabel;
FormImpl.Text = FormText;

export default FormImpl;
