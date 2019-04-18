import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


const getHTMLTagForType = (type) => {
  if (type === 'select' || type === 'textarea') return type;
  return 'input';
};

const getClassNameForType = (inputType) => {
  if (inputType === 'file') return 'form-control-file';
  if (inputType === 'checkbox') return 'form-check-input';
  if (inputType === 'radio') return 'form-check-input';
  return 'form-control';
};

const renderOptions = options => options.map(({
  value,
  label,
  group,
  ...others
}) => {
  if (group) {
    return (
      <optgroup key={`opt-group-${label}`} label={label} {...others}>
        {renderOptions(group)}
      </optgroup>
    );
  }
  return <option key={value} value={value} {...others}>{label}</option>;
});


// More on forwarding refs here:
// https://reactjs.org/docs/forwarding-refs.html#displaying-a-custom-name-in-devtools

const Input = React.forwardRef((props, ref) => {
  const {
    type,
    className,
    options,
    ...attrs
  } = props;
  const htmlTag = getHTMLTagForType(type);
  const htmlProps = {
    className: classNames(getClassNameForType(type), className),
    type: htmlTag === 'input' ? type : undefined,
    ...attrs,
    ref,
  };
  const htmlChildren = type === 'select' ? renderOptions(options) : null;

  return React.createElement(htmlTag, htmlProps, htmlChildren);
});


Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    group: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })),
  })),
};

Input.defaultProps = {
  className: undefined,
  options: [],
};


export default Input;
