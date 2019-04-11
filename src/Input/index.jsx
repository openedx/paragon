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

const renderOptions = options => options.map(({ value, label, group }) => {
  if (group) {
    return (
      <optgroup key={`opt-group-${label}`} label={label}>
        {renderOptions(group)}
      </optgroup>
    );
  }
  return <option key={value} value={value}>{label}</option>;
});


function Input({
  type,
  className,
  children,
  options,
  ...attrs
}) {
  const htmlTag = getHTMLTagForType(type);

  return React.createElement(
    htmlTag,
    {
      className: classNames(getClassNameForType(type), className),
      type: htmlTag === 'input' ? type : undefined,
      ...attrs,
    },
    (type === 'select' && options) ? renderOptions(options) : children,
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node, // Should accept only <option> and <optgroup>
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
  children: undefined,
  options: undefined,
};

export default Input;
