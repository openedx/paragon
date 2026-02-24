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

export interface CollapsibleAdvancedProps extends React.ComponentPropsWithRef<'div'> {
  children?: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (isOpen: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
  unmountOnExit?: boolean;
}

interface CollapsibleAdvancedState {
  isOpen: boolean;
}

class CollapsibleAdvanced extends React.Component<CollapsibleAdvancedProps, CollapsibleAdvancedState> {
  static getDerivedStateFromProps(props: CollapsibleAdvancedProps) {
    if (props.open !== undefined) {
      return {
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
      ref,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        ref={ref}
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
