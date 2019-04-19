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


class Input extends React.Component {
  constructor(props) {
    super(props);

    this.innerRef = props.innerRef; // eslint-disable-line react/prop-types
    if (process.env.NODE_ENV === 'development' && !this.innerRef) {
      this.innerRef = React.createRef();
    }
  }

  componentDidMount() {
    this.checkHasLabel();
  }

  checkHasLabel() {
    if (process.env.NODE_ENV !== 'development') return;

    // eslint-disable-next-line react/prop-types
    const hasLabel = (this.innerRef.current.labels.length > 0) || this.props['aria-label'];
    if (hasLabel) return;

    // eslint-disable-next-line no-console
    if (console) console.warn('Input[a11y]: There is no associated label for this Input');
  }

  render() {
    const {
      type, className, options, innerRef, ...attributes // eslint-disable-line react/prop-types
    } = this.props;
    const htmlTag = getHTMLTagForType(type);
    const htmlProps = {
      className: classNames(getClassNameForType(type), className),
      type: htmlTag === 'input' ? type : undefined,
      ...attributes,
      ref: this.innerRef,
    };
    const htmlChildren = type === 'select' ? renderOptions(options) : null;

    return React.createElement(htmlTag, htmlProps, htmlChildren);
  }
}


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


// Using React.forwardRef – more on forwarding refs here:
// https://reactjs.org/docs/forwarding-refs.html

// eslint-disable-next-line react/no-multi-comp
export default React.forwardRef((props, ref) => <Input innerRef={ref} {...props} />);
