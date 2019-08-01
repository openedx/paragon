import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';


class Button extends React.Component {
  constructor(props) {
    super(props);

    const {
      onBlur,
      onKeyDown,
    } = props;

    this.onBlur = onBlur.bind(this);
    this.onKeyDown = onKeyDown.bind(this);
    this.onClick = this.onClick.bind(this);
    this.setRefs = this.setRefs.bind(this);
  }

  /*
    The button component is given focus explicitly in its onClick to account
    for the fact that an HTML <button> element in Firefox and Safari does not get
    focus on onClick.

    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button.
  */
  onClick(e) {
    this.buttonRef.focus();
    this.props.onClick(e);
  }

  /*
    The button component needs a ref to itself to be able to force
    focus in its onClick function (buttonRef). It also needs to accept
    a callback function from parent components to give those parents
    a reference to their child button (e.g. for the modal component).
    Therefore, both have been wrapped in a function bound on the class,
    since one cannot set two ref attributes on a component.
  */
  setRefs(input) {
    this.buttonRef = input;
    this.props.inputRef(input);
  }

  render() {
    const {
      buttonType,
      className,
      children,
      isClose,
      type,
      /* inputRef is not used directly in the render, but it needs to be assigned
        here to prevent it from being passed to the HTML button component as part
        of other.
      */
      inputRef,
      ...other
    } = this.props;

    return (
      <button
        {...other}
        className={classNames([
          'btn',
          className,
        ], {
          [`btn-${buttonType}`]: buttonType !== undefined,
        }, {
          close: isClose,
        })}
        onBlur={this.onBlur}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        type={type}
        ref={this.setRefs}

      >
        {children}
      </button>
    );
  }
}

export const buttonPropTypes = {
  buttonType: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  isClose: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  type: PropTypes.string,
};

Button.propTypes = buttonPropTypes;

Button.defaultProps = {
  buttonType: undefined,
  className: undefined,
  inputRef: () => {},
  isClose: false,
  onBlur: () => {},
  onKeyDown: () => {},
  onClick: () => {},
  type: 'button',
};

export default withDeprecatedProps(Button, 'Button', {
  label: {
    deprType: DEPR_TYPES.MOVED,
    newName: 'children',
  },
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
});
