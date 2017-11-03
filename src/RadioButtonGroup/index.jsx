import React from 'react';
import PropTypes from 'prop-types';

function RadioButton(props) {
  const {
    children,
    index,
    isChecked,
    name,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    value,
    ...other
  } = props;

  return (
    <div>
      <input
        type={'radio'}
        name={name}
        aria-checked={isChecked}
        defaultChecked={isChecked}
        value={value}
        data-index={index}
        onBlur={event => onBlur(event)}
        onClick={event => onClick(event)}
        onFocus={event => onFocus(event)}
        onKeyDown={event => onKeyDown(event)}
        {...other}
      />{children}
    </div>
  );
}


class RadioButtonGroup extends React.Component {
  constructor(props) {
    super();
    // Bind the method to the component context
    this.renderChildren = this.renderChildren.bind(this);
    this.state = {
      selectedIndex: props.selectedIndex,
    };
  }

  onChange(event) {
    if (event.target.checked && event.target.hasAttribute('data-index')) {
      this.setState({
        selectedIndex: parseInt(event.target.getAttribute('data-index'), 10),
      });
    }

    this.props.onChange(event);
  }


  renderChildren() {
    return React.Children.map((this.props.children), (child, index) =>
      React.cloneElement(child, {
        name: this.props.name,
        value: child.props.value,
        isChecked: index === this.state.selectedIndex,
        onBlur: this.props.onBlur,
        onClick: this.props.onClick,
        onFocus: this.props.onFocus,
        onKeyDown: this.props.onKeyDown,
        index,
      }),
    );
  }

  render() {
    const {
      children,
      label,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      selectedIndex,
      ...other
    } = this.props;

    return (
      <div
        role={'radiogroup'}
        aria-label={label}
        onChange={event => this.onChange(event)}
        tabIndex={-1}
        {...other}
      >
        {this.renderChildren()}
      </div>
    );
  }
}


RadioButton.defaultProps = {
  children: undefined,
  index: undefined,
  isChecked: false,
  name: undefined,
  onBlur: () => {},
  onClick: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
};

RadioButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  index: PropTypes.number,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
};

RadioButtonGroup.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
  onClick: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  selectedIndex: undefined,
};

RadioButtonGroup.propTypes = {
  children: PropTypes.arrayOf(RadioButton).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  selectedIndex: PropTypes.number,
};

export { RadioButtonGroup as default, RadioButton };
