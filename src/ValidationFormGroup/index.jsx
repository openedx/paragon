import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../Input';
import { FormControl } from '../Form';

const propTypes = {
  /** Id of the form input that the validation is for */
  for: PropTypes.string.isRequired,
  /** Additional classnames for this component */
  className: PropTypes.string,
  /** Determines if invalid styles / message will be shown */
  invalid: PropTypes.bool,
  /** Determines if invalid styles / message will be shown */
  valid: PropTypes.bool,
  /** Message to display on valid input */
  validMessage: PropTypes.node,
  /** Message to display on invalid input */
  invalidMessage: PropTypes.node,
  /** Help text for the form input */
  helpText: PropTypes.node,
  /** Specifies contents of the component. */
  children: PropTypes.node,
};

const defaultProps = {
  invalid: undefined,
  valid: undefined,
  validMessage: undefined,
  invalidMessage: undefined,
  helpText: undefined,
  children: undefined,
  className: undefined,
};

function ValidationFormGroup(props) {
  const {
    className,
    invalidMessage,
    invalid,
    valid,
    validMessage,
    helpText,
    for: id,
    children,
  } = props;

  const renderChildren = () => React.Children.map(children, (child) => {
    // Any non-user input element should pass through unmodified
    if (['input', 'textarea', 'select', Input, FormControl].indexOf(child.type) === -1) { return child; }

    // Add validation class names and describedby values to input element
    return React.cloneElement(child, {
      className: classNames(child.props.className, {
        'is-invalid': invalid,
        'is-valid': valid,
      }),
      // This is a non-standard use of the classNames package, but it's exactly the same use case.
      'aria-describedby': classNames(child.props['aria-describedby'], {
        [`${id}-help-text`]: Boolean(helpText),
        [`${id}-invalid-feedback`]: invalid && invalidMessage,
        [`${id}-valid-feedback`]: valid && validMessage,
      }),
    });
  });

  const renderHelpText = (text) => {
    if (!text) { return null; }
    return <small id={`${id}-help-text`} className="form-text text-muted">{text}</small>;
  };

  /**
   * The red text conveys semantic emphasis using color and font weight. For WCAG 2.1, the
   * semantics need to be exposed programmatically as well. To do this, we use <strong/>
   * elements and attach the formatting classes to them.
   */
  const renderInvalidFeedback = (message) => {
    if (!message) { return null; }
    return (
      <strong
        id={`${id}-invalid-feedback`}
        className="invalid-feedback"
      >
        {message}
      </strong>
    );
  };

  const renderValidFeedback = (message) => {
    if (!message) { return null; }
    return (
      <div
        className="valid-feedback"
        id={`${id}-valid-feedback`}
      >
        {message}
      </div>
    );
  };

  return (
    <div className={classNames('form-group', className)} data-testid="validation-form-group">
      {renderChildren()}
      {renderHelpText(helpText)}
      {renderInvalidFeedback(invalidMessage)}
      {renderValidFeedback(validMessage)}
    </div>
  );
}

ValidationFormGroup.propTypes = propTypes;
ValidationFormGroup.defaultProps = defaultProps;

export default ValidationFormGroup;
