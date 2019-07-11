import React, { useState, useContext, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import TransitionReplace from '../TransitionReplace';


const CollapsibleContext = React.createContext();


class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  open = () => {
    this.setState({ isOpen: true });
  }

  close = () => {
    this.setState({ isOpen: false });
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const {
      children,
      className,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={classNames('pgn_collapsible', className, {
          'is-expanded': this.state.isOpen
        })}
      >
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
};
Collapsible.defaultProps = {
  children: undefined,
  className: 'collapsible',
};


function CollapsibleToggle({ tag, children, ...props }) {
  const {
    isOpen,
    toggle,
  } = useContext(CollapsibleContext);

  const handleClick = useCallback((e) => {
    if (props.onClick) props.onClick(e);
    toggle(e);
  });

  const handleKeyDown = useCallback((e) => {
    if (props.onKeyDown) props.onKeyDown(e);
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

CollapsibleToggle.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};
CollapsibleToggle.defaultProps = {
  children: undefined,
  tag: 'div',
};

Collapsible.Toggle = CollapsibleToggle;



function CollapsibleBody({ children, tag, ...props }) {
  const { isOpen } = useContext(CollapsibleContext);

  const content = isOpen ?
    React.createElement(tag, { key: 'body', ...props }, children) :
    <div key="empty" />;

  return (
    <TransitionReplace>{content}</TransitionReplace>
  )
}

CollapsibleBody.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};
CollapsibleBody.defaultProps = {
  children: undefined,
  tag: 'div',
  className: 'collapsible-body',
};

Collapsible.Body = CollapsibleBody;




function CollapsibleClose({ tag, children, ...props }) {
  const { isOpen, close } = useContext(CollapsibleContext);

  const handleClick = useCallback((e) => {
    if (props.onClick) props.onClick(e);
    close(e);
  });

  const handleKeyDown = useCallback((e) => {
    if (props.onKeyDown) props.onKeyDown(e);
    if (e.key === 'Enter') close(e);
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

CollapsibleClose.propTypes = {
  tag: PropTypes.string,
};
CollapsibleClose.defaultProps = {
  tag: 'a',
};

Collapsible.Close = CollapsibleClose;




function CollapsibleOpen({ tag, children, ...props }) {
  const { isOpen, open } = useContext(CollapsibleContext);

  const handleClick = useCallback((e) => {
    if (props.onClick) props.onClick(e);
    open(e);
  });

  const handleKeyDown = useCallback((e) => {
    if (props.onKeyDown) props.onKeyDown(e);
    if (e.key === 'Enter') open(e);
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

CollapsibleOpen.propTypes = {
  tag: PropTypes.string,
};
CollapsibleOpen.defaultProps = {
  tag: 'a',
};

Collapsible.Open = CollapsibleOpen;




function CollapsibleOpened({ children }) {
  const { isOpen } = useContext(CollapsibleContext);
  if (!isOpen) return null;
  return <React.Fragment>{children}</React.Fragment>;
}

CollapsibleOpened.propTypes = {
  children: PropTypes.node,
};
CollapsibleOpened.defaultProps = {
  children: undefined,
};

Collapsible.Opened = CollapsibleOpened;




function CollapsibleClosed({ children }) {
  const { isOpen } = useContext(CollapsibleContext);
  if (isOpen) return null;
  return <React.Fragment>{children}</React.Fragment>;
}

CollapsibleClosed.propTypes = {
  children: PropTypes.node,
};
CollapsibleClosed.defaultProps = {
  children: undefined,
};

Collapsible.Closed = CollapsibleClosed;




export default Collapsible;
