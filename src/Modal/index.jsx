import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Modal.scss';
import Button, { buttonPropTypes } from '../Button';
import newId from '../utils/newId';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.headerId = newId();

    this.state = {
      open: props.open,
    };
  }

  componentDidMount() {
    if (this.xButton) {
      this.xButton.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open) {
      this.setState({ open: nextProps.open });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.open && !prevState.open) {
      this.xButton.focus();
    }
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
        if (e.target === this.xButton) {
          e.preventDefault();
          this.closeButton.focus();
        }
      } else if (e.target === this.closeButton) {
        e.preventDefault();
        this.xButton.focus();
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
    let body;

    if (typeof this.props.body === 'string') {
      body = <p>{this.props.body}</p>;
    } else {
      body = this.props.body;
    }
    return body;
  }

  render() {
    return (
      <div className={classNames(styles.modal, styles.show, { [styles['modal-open']]: this.state.open })} role="dialog" aria-modal aria-labelledby={this.headerId}>
        <div className={styles['modal-dialog']}>
          <div className={styles['modal-content']}>
            <div className={styles['modal-header']}>
              <h5 className={styles['modal-title']} id={this.headerId}>{this.props.title}</h5>
              <Button
                display={<span aria-hidden="true">&times;</span>}
                aria-label={this.props.closeText}
                buttonType="light"
                onClick={this.close}
                inputRef={(input) => { this.xButton = input; }}
                onKeyDown={this.handleKeyDown}
              />
            </div>
            <div className={styles['modal-body']}>
              {this.renderBody()}
            </div>
            <div className={styles['modal-footer']}>
              {this.renderButtons()}
              <Button
                display={this.props.closeText}
                buttonType="secondary"
                onClick={this.close}
                inputRef={(input) => { this.closeButton = input; }}
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
};

Modal.defaultProps = {
  open: false,
  buttons: [],
  closeText: 'Close',
};


export default Modal;
