import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';

interface TransitionStyles {
  entering?: React.CSSProperties;
  entered?: React.CSSProperties;
  exiting?: React.CSSProperties;
  exited?: React.CSSProperties;
}

export interface TransitionReplaceProps {
  children?: React.ReactElement;
  enterDuration?: number;
  exitDuration?: number;
  className?: string;
  onChildEnter?: (node: HTMLElement) => void;
  onChildEntering?: (node: HTMLElement) => void;
  onChildEntered?: (node: HTMLElement) => void;
  onChildExit?: (node: HTMLElement) => void;
  onChildExiting?: (node: HTMLElement) => void;
  onChildExited?: (node: HTMLElement) => void;
  transitionStyles?: TransitionStyles;
  transitionClassNames?: string;
}

interface TransitionReplaceState {
  height: number | null;
}

class TransitionReplace extends React.Component<TransitionReplaceProps, TransitionReplaceState> {
  constructor(props: TransitionReplaceProps) {
    super(props);

    this.state = { height: null };

    this.onChildEnter = this.onChildEnter.bind(this);
    this.onChildEntering = this.onChildEntering.bind(this);
    this.onChildEntered = this.onChildEntered.bind(this);
    this.onChildExit = this.onChildExit.bind(this);
    this.onChildExiting = this.onChildExiting.bind(this);
    this.onChildExited = this.onChildExited.bind(this);
  }

  onChildEnter(htmlNode: HTMLElement) {
    if (this.props.onChildEnter) { this.props.onChildEnter(htmlNode); }
  }

  onChildEntering(htmlNode: HTMLElement) {
    this.setState({ height: htmlNode.offsetHeight });
    if (this.props.onChildEntering) { this.props.onChildEntering(htmlNode); }
  }

  onChildEntered(htmlNode: HTMLElement) {
    this.setState({ height: null });
    if (this.props.onChildEntered) { this.props.onChildEntered(htmlNode); }
  }

  onChildExit(htmlNode: HTMLElement) {
    this.setState({ height: htmlNode.offsetHeight });
    if (this.props.onChildExit) { this.props.onChildExit(htmlNode); }
  }

  onChildExiting(htmlNode: HTMLElement) {
    if (this.props.onChildExiting) { this.props.onChildExiting(htmlNode); }
  }

  onChildExited(htmlNode: HTMLElement) {
    this.setState({ height: null });
    if (this.props.onChildExited) { this.props.onChildExited(htmlNode); }
  }

  renderChildTransition = (child: React.ReactElement) => {
    if (!child.key && process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn("TransitionReplace: A child is missing a 'key' prop. Keys are required for any child of this component.");
    }

    const commonChildStyles: React.CSSProperties = {
      padding: '.1px 0',
    };

    const transitionStyles: Record<string, React.CSSProperties> = {
      entering: {},
      entered: {},
      exiting: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        pointerEvents: 'none',
      },
      exited: {},
    };

    return (
      <CSSTransition
        timeout={{
          enter: this.props.enterDuration ?? 300,
          exit: this.props.exitDuration ?? 300,
        }}
        unmountOnExit
        mountOnEnter
        onEnter={this.onChildEnter}
        onEntering={this.onChildEntering}
        onEntered={this.onChildEntered}
        onExit={this.onChildExit}
        onExiting={this.onChildExiting}
        onExited={this.onChildExited}
        classNames={this.props.transitionClassNames ?? 'pgn__transition-replace'}
      >
        {state => (
          <div
            style={{
              ...commonChildStyles,
              ...transitionStyles[state],
              ...(this.props.transitionStyles?.[state as keyof TransitionStyles] || {}),
            }}
          >
            {child}
          </div>
        )}
      </CSSTransition>
    );
  };

  render() {
    return (
      <TransitionGroup
        className={classNames(
          'pgn-transition-replace-group',
          'position-relative',
          { 'overflow-hidden': this.state.height !== null },
          this.props.className,
        )}
        style={{ height: this.state.height ?? undefined }}
      >
        {React.Children.map(this.props.children, this.renderChildTransition)}
      </TransitionGroup>
    );
  }
}

export default TransitionReplace;
