import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';
import styles from './Modal.scss';
import Button, { buttonPropTypes } from '../Button';
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

    this.headerId = newId();

    this.state = {
      open: props.open,
    };
  }

  componentDidMount() {
    if (this.firstFocusableElement) {
      this.firstFocusableElement.focus();
    }
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
          <div className={styles.col}>
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

  close() {
    this.setState({ open: false });
    this.props.onClose();
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

  render() {
    const { open } = this.state;
    const { renderHeaderCloseButton } = this.props;

    return (
      <div
        className={classNames(
          styles.modal,
          {
            [styles['modal-open']]: open,
            [styles['modal-backdrop']]: open,
            [styles.show]: open,
            [styles.fade]: !open,
          },
        )}
        role="dialog"
        aria-modal
        aria-labelledby={this.headerId}
        {...(!renderHeaderCloseButton ? { tabIndex: '-1' } : {})}
        {...(!renderHeaderCloseButton ? { ref: this.setFirstFocusableElement } : {})}
      >
        <div className={styles['modal-dialog']}>
          <div className={styles['modal-content']}>
            <div className={styles['modal-header']}>
              <h2 className={styles['modal-title']} id={this.headerId}>{this.props.title}</h2>
              { renderHeaderCloseButton &&
                <Button
                  label={<Icon className={['fa', 'fa-times']} />}
                  className={['p-1']}
                  aria-label={this.props.closeText}
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
                buttonType="outline-primary"
                onClick={this.close}
                inputRef={this.setCloseButton}
                onKeyDown={this.handleKeyDown}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.shape(buttonPropTypes),
  ])),
  closeText: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.shape({
    status: PropTypes.string,
  }),
  renderHeaderCloseButton: PropTypes.bool,
};

Modal.defaultProps = {
  open: false,
  buttons: [],
  closeText: 'Close',
  variant: {},
  renderHeaderCloseButton: true,
};


export default Modal;
