import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const CollapsibleContext = React.createContext();

class CollapsibleAdvanced extends React.Component {
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

    if (this.props.onOpen) {
      this.props.onOpen();
    }
    if (this.props.onToggle) {
      this.props.onToggle(true);
    }
  };

  close = () => {
    this.setState({ isOpen: false });

    if (this.props.onClose) {
      this.props.onClose();
    }
    if (this.props.onToggle) {
      this.props.onToggle(false);
    }
  };

  toggle = () => {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

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

CollapsibleAdvanced.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** Specifies classname to append to the base element. */
  className: PropTypes.string,
  /** Specifies whether `Collapsible` should be initially open. */
  defaultOpen: PropTypes.bool,
  /** Specifies whether `Collapsible` is open. */
  open: PropTypes.bool,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: PropTypes.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: PropTypes.func,
  /** Callback fired when `Collapsible` closes. */
  onClose: PropTypes.func,
};

CollapsibleAdvanced.defaultProps = {
  children: undefined,
  className: undefined,
  defaultOpen: false,
  open: undefined,
  onToggle: undefined,
  onOpen: undefined,
  onClose: undefined,
};

export default CollapsibleAdvanced;
