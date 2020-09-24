/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Button } from '..';
import Icon from '../Icon';
import newId from '../utils/newId';
import Variant from '../utils/constants';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setFirstFocusableElement = this.setFirstFocusableElement.bind(this);
    this.setCloseButton = this.setCloseButton.bind(this);

    this.closeModalButtonId = newId('paragonCloseModalButton');
    this.headerId = newId();
    this.el = document.createElement('div');

    // Sets true for IE11, false otherwise: https://stackoverflow.com/a/22082397/6620612
    this.isIE11 = !!global.MSInputMethodContext && !!document.documentMode;

    this.state = {
      open: props.open,
    };
  }

  componentDidMount() {
    if (this.firstFocusableElement) {
      this.firstFocusableElement.focus();
    }
    this.parentElement = document.querySelector(this.props.parentSelector);
    if (this.parentElement === null) {
      throw new Error(`Modal received invalid parentSelector: ${this.props.parentSelector}, no matching element found`);
    }
    this.parentElement.appendChild(this.el);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps({ open }) {
    if (open !== this.state.open) {
      this.setState({ open });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.open && !prevState.open) {
      this.firstFocusableElement.focus();
    }
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.parentElement);
  }

  setFirstFocusableElement(input) {
    this.firstFocusableElement = input;
  }

  setCloseButton(input) {
    this.closeButton = input;
  }

  getVariantIconClassName() {
    const { variant } = this.props;
    let variantIconClassName;

    switch (variant.status) {
      case Variant.status.WARNING:
        variantIconClassName = classNames(
          'fa',
          'fa-exclamation-triangle',
          'fa-3x',
          `text-${variant.status.toLowerCase()}`,
        );
        break;
      default:
        break;
    }

    return variantIconClassName;
  }

  getVariantGridBody(body) {
    const { variant } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <div>
              {body}
            </div>
          </div>
          <div className="col-md-2">
            <Icon
              id={newId(`Modal-${variant.status}`)}
              className={this.getVariantIconClassName()}
            />
          </div>
        </div>
      </div>
    );
  }

  close(e) {
    if (e) {
      e.stopPropagation();
    }

    if (!e || e.target.classList.contains('js-close-modal-on-click')) {
      this.setState({ open: false });
      this.props.onClose();
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.close();
    } else if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (e.target === this.firstFocusableElement) {
          e.preventDefault();
          this.closeButton.focus();
        }
      } else if (e.target === this.closeButton) {
        e.preventDefault();
        this.firstFocusableElement.focus();
      }
    }
  }

  renderButtons() {
    return this.props.buttons.map((button) => {
      // button is either a React component that we want clone or a set of props
      if (React.isValidElement(button)) {
        return React.cloneElement(button, {
          key: button.props.children,
          onKeyDown: this.handleKeyDown,
        });
      }

      const { label, ...buttonProps } = button;

      return (
        <Button.Deprecated
          {...buttonProps}
          key={label}
          onKeyDown={this.handleKeyDown}
        >
          {label}
        </Button.Deprecated>
      );
    });
  }

  renderBody() {
    const { variant } = this.props;
    let { body } = this.props;

    if (typeof body === 'string') {
      body = <p>{body}</p>;
    }

    if (variant.status) {
      body = this.getVariantGridBody(body);
    }
    return body;
  }

  renderModal() {
    const { open } = this.state;
    const {
      dialogClassName,
      renderDefaultCloseButton,
      renderHeaderCloseButton,
    } = this.props;
    return (
      <div>
        <div
          className={classNames({
            'modal-backdrop': open,
            show: open,
            fade: !open,
          })}
          role="presentation"
        />
        <div
          className={classNames(
            'modal',
            'js-close-modal-on-click',
            {
              show: open,
              fade: !open,
              'd-block': open,
              'is-ie11': this.isIE11,
            },
          )}
          role="presentation"
          onMouseDown={this.close}
        >
          <div
            className={classNames(
              {
                'modal-dialog': open,
              },
              dialogClassName,
            )}
            role="dialog"
            aria-modal
            aria-labelledby={this.headerId}
            {...(!renderHeaderCloseButton ? { tabIndex: '-1' } : {})}
            {...(!renderHeaderCloseButton ? { ref: this.setFirstFocusableElement } : {})}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id={this.headerId}>{this.props.title}</h2>
                {renderHeaderCloseButton && (
                  <Button.Deprecated
                    className="p-1 js-close-modal-on-click"
                    aria-labelledby={this.closeModalButtonId}
                    onClick={this.close}
                    inputRef={this.setFirstFocusableElement}
                    onKeyDown={this.handleKeyDown}
                  >
                    <Icon className="fa fa-times js-close-modal-on-click" />
                  </Button.Deprecated>
                )}
              </div>
              <div className="modal-body">
                {this.renderBody()}
              </div>
              <div className="modal-footer">
                {this.renderButtons()}
                {renderDefaultCloseButton && (
                  <Button.Deprecated
                    id={this.closeModalButtonId}
                    buttonType="secondary"
                    className="js-close-modal-on-click"
                    onClick={this.close}
                    inputRef={this.setCloseButton}
                    onKeyDown={this.handleKeyDown}
                  >
                    {this.props.closeText}
                  </Button.Deprecated>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(
      this.renderModal(),
      this.el,
    );
  }
}

Modal.propTypes = {
  /** specifies whether the modal renders open or closed on the initial render. It defaults to false. */
  open: PropTypes.bool,
  /** is the selector for an element in the dom which the modal should be rendered under. It uses querySelector to find the first element that matches that selector, and then creates a react portal to a div underneath the parent element.
 */
  parentSelector: PropTypes.string,
  /** a string or an element that is rendered inside of the modal title, above the modal body. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** a string or an element that is rendered inside of the modal body, between the title and the footer. */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /** an array of either elements or shapes that take the form of the buttonPropTypes. See the [buttonPropTypes](https://github.com/edx/paragon/blob/master/src/Button/index.jsx#L40) for a list of acceptable props to pass as part of a button. */
  buttons: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object, // TODO: Only accept nodes in the future
  ])),
  /** specifies the display text of the default Close button. It defaults to "Close". */
  closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** a function that is called on close. It can be used to perform actions upon closing of the modal, such as restoring focus to the previous logical focusable element. */
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.shape({
    status: PropTypes.string,
  }),
  /** specifies whether the default close button is rendered in the footer. It defaults to true. */
  renderDefaultCloseButton: PropTypes.bool,
  /** specifies whether a close button is rendered in the modal header. It defaults to true. */
  renderHeaderCloseButton: PropTypes.bool,
  /**
   * Specifies optional classes to add to the element with the '.modal-dialog' class.  See Bootstrap documentation for possible classes.  Some options: modal-lg, modal-sm, modal-dialog-centered
   */
  dialogClassName: PropTypes.string,
};

Modal.defaultProps = {
  open: false,
  parentSelector: 'body',
  buttons: [],
  closeText: 'Close',
  variant: {},
  renderDefaultCloseButton: true,
  renderHeaderCloseButton: true,
  dialogClassName: undefined,
};

export default Modal;
