/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import ElementPropTypes from 'react-element-proptypes';

class RadioButton extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      onBlur,
      onClick,
      onFocus,
      onKeyDown,
    } = props;

    this.onBlur = onBlur.bind(this);
    this.onClick = onClick.bind(this);
    this.onFocus = onFocus.bind(this);
    this.onKeyDown = onKeyDown.bind(this);
  }

  render() {
    const {
      children,
      index,
      isChecked,
      name,
      value,
      ...other
    } = this.props;

    return (
      <div>
        <input
          type="radio"
          name={name}
          aria-checked={isChecked}
          defaultChecked={isChecked}
          value={value}
          aria-label={children}
          data-index={index}
          onBlur={this.onBlur}
          onClick={this.onClick}
          onFocus={this.onFocus}
          onKeyDown={this.onKeyDown}
          {...other}
        />{children}
      </div>
    );
  }
}


class RadioButtonGroup extends React.Component {
  constructor(props) {
    super();
    // Bind the method to the component context
    this.renderChildren = this.renderChildren.bind(this);
    this.onChange = this.onChange.bind(this);

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
    const {
      children,
      name,
      onBlur,
      onClick,
      onFocus,
      onKeyDown,
    } = this.props;

    return React.Children.map((children), (child, index) =>
      React.cloneElement(child, {
        name,
        value: child.props.value,
        isChecked: index === this.state.selectedIndex,
        onBlur,
        onClick,
        onFocus,
        onKeyDown,
        index,
      }));
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
        role="radiogroup"
        aria-label={label}
        onChange={this.onChange}
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
  children: PropTypes.arrayOf(ElementPropTypes.elementOfType(RadioButton)).isRequired,
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
