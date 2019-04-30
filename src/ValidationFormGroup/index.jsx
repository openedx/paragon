import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../Input';

const propTypes = {
  for: PropTypes.string.isRequired,
  className: PropTypes.string,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  validMessage: PropTypes.node,
  invalidMessage: PropTypes.node,
  helpText: PropTypes.node,
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
    if (['input', 'textarea', 'select', Input].indexOf(child.type) === -1) return child;

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
    if (!text) return null;
    return <small id={`${id}-help-text`} className="form-text text-muted">{text}</small>;
  };

  const renderFeedback = (message, state) => {
    if (!message) return null;
    return (
      <div
        className={`${state}-feedback`}
        id={`${id}-${state}-feedback`}
      >
        {message}
      </div>
    );
  };

  return (
    <div className={classNames('form-group', className)}>
      {renderChildren()}
      {renderHelpText(helpText)}
      {renderFeedback(invalidMessage, 'invalid')}
      {renderFeedback(validMessage, 'valid')}
    </div>
  );
}


ValidationFormGroup.propTypes = propTypes;
ValidationFormGroup.defaultProps = defaultProps;


export default ValidationFormGroup;
