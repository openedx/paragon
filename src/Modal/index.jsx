import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';
import styles from './Modal.scss';
import Button, { buttonPropTypes } from '../Button';
import Icon from '../Icon';
import newId from '../utils/newId';
import Variant from '../utils/constants';

const closeModalButtonId = newId('paragonCloseModalButton');

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setFirstFocusableElement = this.setFirstFocusableElement.bind(this);
    this.setCloseButton = this.setCloseButton.bind(this);

    this.headerId = newId();
    this.el = document.createElement('div');

    // Sets true for IE11, false otherwise: https://stackoverflow.com/a/22082397/6620612
    this.isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

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
          FontAwesomeStyles.fa,
          FontAwesomeStyles['fa-exclamation-triangle'],
          FontAwesomeStyles['fa-3x'],
          styles[`text-${variant.status.toLowerCase()}`],
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
      <div className={styles['container-fluid']}>
        <div className={styles.row}>
          <div className={styles['col-md-10']}>
            <div>
              {body}
            </div>
          </div>
          <div className={styles['col-md-2']}>
            <Icon
              id={newId(`Modal-${variant.status}`)}
              className={[
                this.getVariantIconClassName(),
              ]}
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
    return this.props.buttons.map((button, i) => {
      let buttonElement = button;
      let buttonProps = button.props;

      if (button.type !== Button) {
        buttonProps = button;
      }

      buttonElement = (<Button
        {...buttonProps}
        key={i}
        onKeyDown={this.handleKeyDown}
      />);

      return buttonElement;
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
    const { renderHeaderCloseButton } = this.props;

    return (
      <div>
        <div
          className={classNames({
            [styles['modal-backdrop']]: open,
            [styles.show]: open,
            [styles.fade]: !open,
          })}
          role="presentation"
        />
        <div
          className={classNames(
            styles.modal,
            'js-close-modal-on-click',
            {
              [styles.show]: open,
              [styles.fade]: !open,
              [styles['d-block']]: open,
              [styles['is-ie11']]: this.isIE11,
            },
          )}
          role="presentation"
          onClick={this.close}
        >
          <div
            className={classNames({
              [styles['modal-dialog']]: open,
            })}
            role="dialog"
            aria-modal
            aria-labelledby={this.headerId}
            {...(!renderHeaderCloseButton ? { tabIndex: '-1' } : {})}
            {...(!renderHeaderCloseButton ? { ref: this.setFirstFocusableElement } : {})}
          >
            <div className={styles['modal-content']}>
              <div className={styles['modal-header']}>
                <h2 className={styles['modal-title']} id={this.headerId}>{this.props.title}</h2>
                { renderHeaderCloseButton &&
                <Button
                  label={<Icon className={['fa', 'fa-times', 'js-close-modal-on-click']} />}
                  className={['p-1', 'js-close-modal-on-click']}
                  aria-labelledby={closeModalButtonId}
                  onClick={this.close}
                  inputRef={this.setFirstFocusableElement}
                  onKeyDown={this.handleKeyDown}
                />
              }
              </div>
              <div className={styles['modal-body']}>
                {this.renderBody()}
              </div>
              <div className={styles['modal-footer']}>
                {this.renderButtons()}
                <Button
                  label={this.props.closeText}
                  buttonType="secondary"
                  className={['js-close-modal-on-click']}
                  onClick={this.close}
                  inputRef={this.setCloseButton}
                  onKeyDown={this.handleKeyDown}
                />
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
  open: PropTypes.bool,
  parentSelector: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape(buttonPropTypes),
  ])),
  closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.shape({
    status: PropTypes.string,
  }),
  renderHeaderCloseButton: PropTypes.bool,
};

Modal.defaultProps = {
  open: false,
  parentSelector: 'body',
  buttons: [],
  closeText: 'Close',
  variant: {},
  renderHeaderCloseButton: true,
};


export default Modal;
