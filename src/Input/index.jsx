import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Input extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      this.checkHasLabel();
    }
  }

  getHTMLTagForType() {
    const { type } = this.props;
    if (type === 'select' || type === 'textarea') { return type; }
    return 'input';
  }

  getClassNameForType() {
    switch (this.props.type) {
      case 'file':
        return 'form-control-file';
      case 'checkbox':
      case 'radio':
        return 'form-check-input';
      default:
        return 'form-control';
    }
  }

  setRef(forwardedRef) {
    // In production just return the optional forwardedRef
    if (process.env.NODE_ENV !== 'development') { return forwardedRef; }

    return (element) => {
      if (forwardedRef) { forwardedRef.current = element; } // eslint-disable-line no-param-reassign
      this.inputEl = element;
    };
  }

  checkHasLabel() {
    if (this.inputEl.labels.length > 0) { return; }
    if (this.inputEl.getAttribute('aria-label') !== null) { return; }
    if (this.inputEl.getAttribute('aria-labelledby') !== null) { return; }

    if (console) {
      // eslint-disable-next-line no-console
      console.warn('Input[a11y]: There is no associated label for this Input');
    }
  }

  renderOptions(options) {
    return options.map((option) => {
      const {
        value,
        label,
        group,
        ...attributes
      } = option;

      if (group) {
        return (
          <optgroup key={`optgroup-${label}`} label={label} {...attributes}>
            {this.renderOptions(group)}
          </optgroup>
        );
      }
      return (
        <option key={value} value={value} {...attributes}>
          {label}
        </option>
      );
    }, this);
  }

  render() {
    const {
      type,
      className,
      options,
      forwardedRef, // eslint-disable-line react/prop-types
      ...attributes // eslint-disable-line react/prop-types
    } = this.props;

    const htmlTag = this.getHTMLTagForType();
    const htmlProps = {
      className: classNames(this.getClassNameForType(), className),
      type: htmlTag === 'input' ? type : undefined,
      ...attributes,
      ref: this.setRef(forwardedRef),
    };
    const htmlChildren = type === 'select' ? this.renderOptions(options) : null;

    return React.createElement(htmlTag, htmlProps, htmlChildren);
  }
}

Input.propTypes = {
  /** specifies the type of component.
   * One of select, textarea, or any valid type for an html input tag. */
  type: PropTypes.oneOf([
    'textarea',
    'select',
    'checkbox',
    'color',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]).isRequired,
  /** specifies the className in addition to a bootstrap class name. */
  className: PropTypes.string,
  /** should be used to specify the options of an Input of type select */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    group: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool,
    })),
  })),
};

Input.defaultProps = {
  className: undefined,
  options: [],
};

// eslint-disable-next-line react/no-multi-comp
const InputWithRefForwarding = React.forwardRef((props, ref) => (
  <Input type="text" forwardedRef={ref} {...props} />
));

export default InputWithRefForwarding;
