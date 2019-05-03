import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import FocusLock, { AutoFocusInside } from 'react-focus-lock';
import PropTypes from 'prop-types';


class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);

    // Sets true for IE11, false otherwise: https://stackoverflow.com/a/22082397/6620612
    this.isIE11 = !!global.MSInputMethodContext && !!document.documentMode;
  }

  componentWillReceiveProps() {
    // If props would be open, body should get class .modal-open
    // document.body.classList.add('modal-open');
  }

  componentDidUpdate() {
    const bodyHasModalOpenClass = document.body.classList.contains('modal-open');
    if (this.props.open && !bodyHasModalOpenClass) {
      document.body.classList.add('modal-open');
    } else if (!this.props.open && bodyHasModalOpenClass) {
      document.body.classList.remove('modal-open');
    }
  }

  componentWillUnmount() {
    // Remove portal
    // ReactDOM.unmountComponentAtNode(this.parentElement); ???
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      this.props.onClickClose(e);
    }
  }

  handleModalClick(e) {
    if (e.target === e.currentTarget) {
      this.props.onClickClose(e);
    }
  }

  renderModalBackdrop() {
    const { open } = this.props;

    if (!open) return null;

    return (
      <div
        className={classNames('modal-backdrop', {
          show: open,
          fade: !open,
        })}
      />
    );
  }

  renderModalHeader() {
    if (this.props.renderModalHeader) {
      return this.props.renderModalHeader();
    }

    return (
      <Modal.Header>
        {this.props.headerIcon}
        <Modal.Title>
          {this.props.title}
        </Modal.Title>
        <Modal.CloseButton
          ariaLabel={this.props.closeButtonAriaLabel}
          onClick={this.props.onClickClose}
        />
      </Modal.Header>
    );
  }

  renderModal() {
    const {
      open,
      className,
      ariaLabel,
      children,
      returnFocusOnClose,
    } = this.props;
    return (
      <div>
        {this.renderModalBackdrop()}

        <div
          className={classNames('modal', className, {
            'd-block': open,
            fade: !open
          })}
          onClick={this.handleModalClick}
        >
          <FocusLock disabled={!open} returnFocus={returnFocusOnClose}>
            <div
              className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
              role="dialog"
              aria-modal
              aria-label={ariaLabel}
              onKeyDown={this.handleKeyDown}
            >
              <div className="modal-content">
                {this.renderModalHeader()}
                <AutoFocusInside>
                  {children}
                </AutoFocusInside>
              </div>
            </div>
          </FocusLock>
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(this.renderModal(), this.props.portalNode);
  }
}


/**
 * The functional components that follow serve for
 * ease of development, removing the need to recall
 * class names and structure of the modal.
 *
 * <Modal>
 *   <Modal.Header>
 *     <Modal.Title />
 *     <Modal.CloseButton />
 *   </Modal.Header>
 *
 *   <Modal.Body />
 *
 *   <Modal.Footer />
 * </<Modal>
 */

const commonProps = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
const commonDefaultProps = {
  className: undefined,
};


Modal.Header = ({ children, className, ...others }) => (
  <div className={classNames('modal-header', className)}>{children}</div>
);

Modal.Header.propTypes = commonProps;
Modal.Header.defaultProps = commonDefaultProps;


Modal.Title = props => {
  const { children, tag, className, ...others } = props;
  return React.createElement(tag, {
      className: classNames('modal-title', className),
      ...others,
    },
    children,
  );
};

Modal.Title.propTypes = {
  tag: PropTypes.string,
  ...commonProps,
};

Modal.Title.defaultProps = {
  tag: 'h1',
  ...commonDefaultProps,
};


Modal.CloseButton = props => {
  const { className, ariaLabel, onClick, ...others} = props;
  return (
    <button
      className={classNames('close', className)}
      aria-label={ariaLabel}
      {...others}
      onClick={onClick}
    >
      <span aria-hidden="true">×</span>
    </button>
  );
};

Modal.CloseButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Modal.CloseButton.defaultProps = {
  className: undefined,
};


Modal.Body = ({ children, className, ...others }) => (
  <div className={classNames('modal-body', className)}>
    {children}
  </div>
);

Modal.Body.propTypes = commonProps;
Modal.Body.defaultProps = commonDefaultProps;


Modal.Footer = ({ children, className, ...others }) => (
  <div className={classNames('modal-footer', className)}>
    {children}
  </div>
);

Modal.Footer.propTypes = commonProps;
Modal.Footer.defaultProps = commonDefaultProps;



Modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  closeButtonAriaLabel: PropTypes.string.isRequired,
  onClickClose: PropTypes.func.isRequired,
  returnFocusOnClose: PropTypes.bool,
  portalNode: PropTypes.object,
  headerIcon: PropTypes.node,
  renderModalHeader: PropTypes.func,
};

Modal.defaultProps = {
  open: false,
  children: undefined,
  className: undefined,
  returnFocusOnClose: true,
  portalNode: document.body,
  headerIcon: undefined,
  renderModalHeader: undefined,
};


export default Modal;
