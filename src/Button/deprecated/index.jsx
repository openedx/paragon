import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import withDeprecatedProps, { DeprTypes } from '../../withDeprecatedProps';

class DeprecatedButton extends React.Component {
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
        // eslint-disable-next-line react/button-has-type
        type={type}
        ref={this.setRefs}

      >
        {children}
      </button>
    );
  }
}

export const buttonPropTypes = {
  /** Used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. For example, `buttonType="light"`. The default is `undefined`. */
  buttonType: PropTypes.string,
  /** Specifies Bootstrap class names to apply to the button. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable class names. The default is an empty array. */
  className: PropTypes.string,
  /** Specifies the text that is displayed within the button. */
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line max-len
  /** A function that defines a reference for the button. An example `inputRef` from the calling component could look something like: `inputRef={(input) => { this.button = input; }}`. The default is an empty function. */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  /** Used to determine if the button is a "Close" style button to leverage bootstrap styling. Example use case is with the Status Alert [dismiss button](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing). The default is false. */
  isClose: PropTypes.bool,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onBlur` event is triggered. For example, the button could change in color or `buttonType` when focus is changed. The default is an empty function. */
  onBlur: PropTypes.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onClick` event is triggered. For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: PropTypes.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.  For example, this could handle using the `Escape` key to trigger the button's action. The default is an empty function. */
  onKeyDown: PropTypes.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: PropTypes.string,
  /** Specifies variant to use. */
  variant: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link', 'outline-primary',
    'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'
  ]),
};

DeprecatedButton.propTypes = buttonPropTypes;

DeprecatedButton.defaultProps = {
  buttonType: undefined,
  className: undefined,
  inputRef: () => {},
  isClose: false,
  onBlur: () => {},
  onKeyDown: () => {},
  onClick: () => {},
  type: 'button',
  variant: 'outline-primary',
};

export default withDeprecatedProps(DeprecatedButton, 'Button', {
  label: {
    deprType: DeprTypes.MOVED,
    newName: 'children',
  },
  className: {
    deprType: DeprTypes.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
});
