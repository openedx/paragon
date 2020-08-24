/* eslint-disable react/no-multi-comp, max-classes-per-file, max-len */
import React from 'react';
import PropTypes from 'prop-types';

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

    return React.Children.map((children), (child, index) => React.cloneElement(child, {
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
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /** specifies the `aria-label` value for the `RadioButtonGroup` */
  label: PropTypes.string.isRequired,
  /** specifies the `name` value for the `RadioButtonGroup` so that no more than one `RadioButton` can be selected at any given time */
  name: PropTypes.string.isRequired,
  /** specifies the callback for the `onBlur` event for each `RadioButton` within the group. The default value is a no-op function. */
  onBlur: PropTypes.func,
  /** specifies the callback for the onChange event for each RadioButton within the group. The default value is a no-op function. */
  onChange: PropTypes.func,
  /** specifies the callback for the `onClick` event for each `RadioButton` within the group. The default value is a no-op function. */
  onClick: PropTypes.func,
  /** specifies the callback for the `onFocus` event for each `RadioButton` within the group. The default value is a no-op function. */
  onFocus: PropTypes.func,
  /** specifies the callback for the `onKeyDown` event for each `RadioButton` within the group. The default value is a no-op function. */
  onKeyDown: PropTypes.func,
  /** specifies which `RadioButton` is initially selected. The default value is `undefined` which signifies that no `RadioButton` is initially selected. */
  selectedIndex: PropTypes.number,
};

export { RadioButtonGroup as default, RadioButton };
