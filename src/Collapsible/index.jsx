import React, { useContext, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TransitionReplace from '../TransitionReplace';
import ChevronDown from '../icons/ChevronDown';

const CollapsibleContext = React.createContext();

class Collapsible extends React.Component {
  static getDerivedStateFromProps(props) {
    if (props.open !== undefined) {
      return {
        // Since this method fires on both props and state changes, local updates
        // to the controlled value will be ignored, because the props version
        // always overrides it. In this case, this is exactly what we want.
        isOpen: props.open,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.open !== undefined ? props.open : props.defaultOpen,
    };
  }

  open = () => {
    this.setState({ isOpen: true });
    if (this.props.onOpen) this.props.onOpen();
  }

  close = () => {
    this.setState({ isOpen: false });
    if (this.props.onClose) this.props.onClose();
  }

  toggle = () => {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
    if (this.props.onToggle) this.props.onToggle(this.state.isOpen);
  }

  render() {
    const {
      children,
      className,
      ...props
    } = this.props;

    // Unneeded for passthrough props
    delete props.defaultOpen;
    delete props.onToggle;
    delete props.onOpen;
    delete props.onClose;

    return (
      <div
        {...props}
        className={classNames('pgn_collapsible', className, {
          'is-open': this.state.isOpen,
        })}
      >
        <ChevronDown viewBox="0 0 1792 1792" />
        <CollapsibleContext.Provider
          value={{
            isOpen: this.state.isOpen,
            open: this.open,
            close: this.close,
            toggle: this.toggle,
          }}
        >
          {children}
        </CollapsibleContext.Provider>
      </div>
    );
  }
}

Collapsible.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
  open: PropTypes.bool,
  onToggle: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};
Collapsible.defaultProps = {
  children: undefined,
  className: 'collapsible',
  defaultOpen: false,
  open: undefined,
  onToggle: undefined,
  onOpen: undefined,
  onClose: undefined,
};


function CollapsibleTrigger({
  tag, children, openOnly, closeOnly, ...props
}) {
  const { isOpen, toggle } = useContext(CollapsibleContext);

  const handleClick = useCallback((e) => {
    if (props.onClick) props.onClick(e);
    if ((isOpen && openOnly) || (!isOpen && closeOnly)) return; // No-op
    toggle(e);
  });

  const handleKeyDown = useCallback((e) => {
    if (props.onKeyDown) props.onKeyDown(e);
    if ((isOpen && openOnly) || (!isOpen && closeOnly)) return; // No-op
    if (e.key === 'Enter') toggle(e);
  });

  return React.createElement(tag, {
    ...props,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    role: 'button',
    tabIndex: 0,
    'aria-expanded': isOpen,
  }, children);
}

CollapsibleTrigger.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  openOnly: PropTypes.bool,
  closeOnly: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};
CollapsibleTrigger.defaultProps = {
  children: undefined,
  tag: 'div',
  openOnly: false,
  closeOnly: false,
  onClick: undefined,
  onKeyDown: undefined,
};

Collapsible.Trigger = CollapsibleTrigger;


function CollapsibleBody({
  children, transitionWrapper, tag, ...props
}) {
  const { isOpen } = useContext(CollapsibleContext);

  const content = isOpen ?
    React.createElement(tag, { key: 'body', ...props }, children) :
    <div key="empty" />;

  if (transitionWrapper) {
    return React.cloneElement(transitionWrapper, {}, content);
  }

  /* istanbul ignore next */
  return <TransitionReplace>{content}</TransitionReplace>;
}

CollapsibleBody.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  transitionWrapper: PropTypes.element,
};
CollapsibleBody.defaultProps = {
  children: undefined,
  tag: 'div',
  transitionWrapper: undefined,
};

Collapsible.Body = CollapsibleBody;


function CollapsibleVisible({
  children,
  whenOpen: visibleWhenOpen,
  whenClosed: visibleWhenClosed,
}) {
  const { isOpen } = useContext(CollapsibleContext);

  if ((visibleWhenOpen && isOpen) || (visibleWhenClosed && !isOpen)) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return null;
}

CollapsibleVisible.propTypes = {
  children: PropTypes.node,
  whenOpen: PropTypes.bool,
  whenClosed: PropTypes.bool,
};
CollapsibleVisible.defaultProps = {
  children: undefined,
  whenOpen: false,
  whenClosed: false,
};

Collapsible.Visible = CollapsibleVisible;


export default Collapsible;
