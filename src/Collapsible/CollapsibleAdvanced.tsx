import React from 'react';
import classNames from 'classnames';

export interface CollapsibleContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  unmountOnExit: boolean;
}

export const CollapsibleContext = React.createContext<CollapsibleContextValue | undefined>(undefined);

export interface CollapsibleAdvancedProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Specifies contents of the component. */
  children?: React.ReactNode;
  /** Specifies classname to append to the base element. */
  className?: string;
  /** Specifies whether `Collapsible` should be initially open. */
  defaultOpen?: boolean;
  /** Specifies whether `Collapsible` is open. */
  open?: boolean;
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle?: (isOpen: boolean) => void;
  /** Callback fired when `Collapsible` opens. */
  onOpen?: () => void;
  /** Callback fired when `Collapsible` closes. */
  onClose?: () => void;
  /** Unmount the component (remove it from the DOM) when it is collapsed. */
  unmountOnExit?: boolean;
}

interface CollapsibleAdvancedState {
  isOpen: boolean;
}

class CollapsibleAdvanced extends React.Component<CollapsibleAdvancedProps, CollapsibleAdvancedState> {
  static getDerivedStateFromProps(props: CollapsibleAdvancedProps) {
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

  constructor(props: CollapsibleAdvancedProps) {
    super(props);

    this.state = {
      isOpen: props.open !== undefined ? props.open : props.defaultOpen ?? false,
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
      unmountOnExit = true,
      onToggle,
      onOpen,
      onClose,
      open,
      defaultOpen,
      ...props
    } = this.props;

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
            unmountOnExit,
          }}
        >
          {children}
        </CollapsibleContext.Provider>
      </div>
    );
  }
}

export default CollapsibleAdvanced;
