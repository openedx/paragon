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
  value, label, group, ...attributes
}) => {
  if (group) {
    return (
      <optgroup key={`optgroup-${label}`} label={label} {...attributes}>
        {renderOptions(group)}
      </optgroup>
    );
  }
  return <option key={value} value={value} {...attributes}>{label}</option>;
});


// More on forwarding refs here:
// https://reactjs.org/docs/forwarding-refs.html#displaying-a-custom-name-in-devtools

const Input = React.forwardRef((props, ref) => {
  const {
    type, className, options, ...attributes
  } = props;
  const htmlTag = getHTMLTagForType(type);
  const htmlProps = {
    className: classNames(getClassNameForType(type), className),
    type: htmlTag === 'input' ? type : undefined,
    ...attributes,
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
    disabled: PropTypes.bool,
    group: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      disabled: PropTypes.bool,
    })),
  })),
};

Input.defaultProps = {
  className: undefined,
  options: [],
};


export default Input;
