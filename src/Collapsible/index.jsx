import React, { useState, useContext, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TransitionReplace from '../TransitionReplace';

const CollapsibleContext = React.createContext();

class Collapsible extends React.Component {
  static idCounter = 0; // For creating unique ids

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
        className={classNames(className, {
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


function CollapsibleToggle(props) {
  const {
    isOpen,
    open,
    close,
    toggle,
  } = useContext(CollapsibleContext);

  const handleClick = useCallback((e) => {
    if (props.onClick) {
      props.onClick(e);
    }
    toggle(e);
  });
  const handleKeyDown = useCallback((e) => {
    if (props.onKeyDown) {
      props.onKeyDown(e);
    }

    if (e.key === 'Enter') {
      toggle(e);
    }
  });

  return (
    <div
      role="button"
      tabIndex={0}
      {...props}
      className={classNames(props.className, {
        expanded: isOpen,
      })}
      onClick={handleClick}
      onKeyDown={handleKeyDown}>
      {props.children}
    </div>
  )
}

CollapsibleToggle.propTypes = {
  className: PropTypes.string,
};

CollapsibleToggle.defaultProps = {
  className: 'collapsible-toggle',
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


function CollapsibleCloseButton(props) {
  const { isOpen, close } = useContext(CollapsibleContext);

  return (
    <div className="collapse-close-button" onClick={close}>
      {props.children}
    </div>
  );
}

Collapsible.CloseButton = CollapsibleCloseButton;


function CollapsibleOpenButton(props) {
  const { isOpen, open } = useContext(CollapsibleContext);

  return (
    <div className="collapse-open-button" onClick={open}>
      {props.children}
    </div>
  );
}

Collapsible.OpenButton = CollapsibleOpenButton;



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
