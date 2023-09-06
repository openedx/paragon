/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FocusOn } from 'react-focus-on';
import { tabbable } from 'tabbable';

import { Close } from '../../icons';
import Button from '../Button';
import Icon from '../Icon';
import newId from '../utils/newId';
import Variant from '../utils/constants';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);

    this.headerId = newId();
    this.modalBodyRef = React.createRef();

    if (typeof document !== 'undefined') {
      this.el = document.createElement('div');
      // Sets true for IE11, false otherwise: https://stackoverflow.com/a/22082397/6620612
      this.isIE11 = !!global.MSInputMethodContext && !!document.documentMode;
    }

    this.state = {
      open: props.open,
    };
  }

  componentDidMount() {
    const { parentSelector } = this.props;
    this.parentElement = document.querySelector(parentSelector);
    if (this.parentElement === null) {
      throw new Error(`Modal received invalid parentSelector: ${parentSelector}, no matching element found`);
    }
    this.parentElement.appendChild(this.el);
  }

  componentDidUpdate(prevProps, prevState) {
    const { open } = this.props;
    if (open !== prevProps.open || open !== prevState.open) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ open });
    }
  }

  componentWillUnmount() {
    if (this.parentElement) {
      ReactDOM.unmountComponentAtNode(this.parentElement);
    }
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
          <div className="col-md-2" data-testid="icon-id">
            <Icon
              id={newId(`Modal-${variant.status}`)}
              className={this.getVariantIconClassName()}
            />
          </div>
        </div>
      </div>
    );
  }

  getTabbableBodyElements() {
    if (this.modalBodyRef?.current) {
      return tabbable(this.modalBodyRef.current);
    }
    return [];
  }

  isValidVariantStatus() {
    const { variant } = this.props;
    return Object.values(Variant.status).includes(variant.status);
  }

  close(e) {
    if (e) {
      e.stopPropagation();
    }

    this.setState({ open: false });
    this.props.onClose();
  }

  renderButtons() {
    return this.props.buttons.map((button) => {
      // button is either a React component that we want clone or a set of props
      if (React.isValidElement(button)) {
        return React.cloneElement(button, {
          key: button.props.children,
        });
      }

      const { label, ...buttonProps } = button;

      return (
        <Button.Deprecated
          {...buttonProps}
          key={label}
        >
          {label}
        </Button.Deprecated>
      );
    });
  }

  renderBody() {
    let { body } = this.props;

    if (typeof body === 'string') {
      body = <p>{body}</p>;
    }

    if (this.isValidVariantStatus()) {
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
      buttons,
      closeText,
      title,
    } = this.props;

    const hasTabbableElements = (
      renderDefaultCloseButton
      || renderHeaderCloseButton
      || buttons.length > 0
      || this.getTabbableBodyElements().length > 0
    );
    const renderModalFooter = renderDefaultCloseButton || buttons.length > 0;

    return (
      <>
        <div
          className={classNames({
            'modal-backdrop': open,
            show: open,
            fade: !open,
          })}
          role="presentation"
          data-testid="modal-backdrop-id"
        />
        <div
          className={classNames(
            'modal',
            {
              show: open,
              fade: !open,
              'd-block': open,
              'is-ie11': this.isIE11,
            },
          )}
          role="presentation"
          data-testid="modal-id"
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
          >
            <FocusOn
              enabled={open}
              onClickOutside={this.close}
              onEscapeKey={this.close}
            >
              <div
                className="modal-content"
                data-testid="modal-content"
                // if the modal doesn't contain any tabbable elements, make this element programmatically focusable.
                {...(!hasTabbableElements ? { tabIndex: -1 } : {})}
              >
                <div className="modal-header">
                  <h2 className="modal-title" id={this.headerId}>{title}</h2>
                  {renderHeaderCloseButton && (
                    <Button.Deprecated
                      className="p-1"
                      onClick={this.close}
                      data-testid="modal-header-btn"
                    >
                      <Icon src={Close} screenReaderText={closeText} />
                    </Button.Deprecated>
                  )}
                </div>
                <div className="modal-body" ref={this.modalBodyRef} data-testid="modal-body">
                  {this.renderBody()}
                </div>
                {renderModalFooter && (
                  <div className="modal-footer">
                    {renderDefaultCloseButton && (
                      <Button
                        variant="link"
                        onClick={this.close}
                        data-testid="modal-footer-btn"
                      >
                        {closeText}
                      </Button>
                    )}
                    {this.renderButtons()}
                  </div>
                )}
              </div>
            </FocusOn>
          </div>
        </div>
      </>
    );
  }

  render() {
    if (!this.el) {
      return null;
    }

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
  /** an array of either elements or shapes that take the form of the buttonPropTypes. See the [buttonPropTypes](https://github.com/openedx/paragon/blob/master/src/Button/index.jsx#L40) for a list of acceptable props to pass as part of a button. */
  buttons: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape({}), // TODO: Only accept nodes in the future
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
