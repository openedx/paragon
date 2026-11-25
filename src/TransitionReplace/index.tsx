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
  /** The content that will be displayed with a transition when it changes. */
  children?: React.ReactElement | null;
  /** Duration of the element appearance transition. */
  enterDuration?: number;
  /** Duration of the element dismiss transition. */
  exitDuration?: number;
  /** Specifies class name to append to the base element. */
  className?: string;
  /** A `Transition` callback fired immediately after the `enter` or `appear` class is applied. */
  onChildEnter?: (node: HTMLElement) => void;
  /** A `Transition` callback fired immediately after the `enter-active` or `appear-active` class is applied. */
  onChildEntering?: (node: HTMLElement) => void;
  /**
   * A `Transition` callback fired immediately after the `enter` or
   * `appear` classes are removed and the done class is added to the DOM node.
   */
  onChildEntered?: (node: HTMLElement) => void;
  /** A `Transition` callback fired immediately after the `exit` class is applied. */
  onChildExit?: (node: HTMLElement) => void;
  /** A `Transition` callback fired immediately after the `exit-active` is applied. */
  onChildExiting?: (node: HTMLElement) => void;
  /**
   * A `Transition` callback fired immediately after the `exit` classes
   * are removed and the exit-done class is added to the DOM node.
   */
  onChildExited?: (node: HTMLElement) => void;
  /** An object that specifies transition styles. */
  transitionStyles?: TransitionStyles;
  /** Specifies class name to append to the `Transition`. */
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

  // Transition events are fired in this order:
  //
  // onEnter > onEntering > onEntered
  // onExit  > onExiting  > onExited
  //
  // Keep in mind that we always have two transitions happening
  // both the entering and leaving children
  //
  // We set the container height (for animation) in this order:
  //
  // 1. onChildExit         (explicitly set the height to match the current current)
  // 2. onChildEntering     (set the height to match the new content)
  // 3. onChildExited       (reset the height to null)

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

    // Makes the exiting and entering children occupy the same space
    // SCSS handles the crossfade so it can be easily overridden
    const commonChildStyles: React.CSSProperties = {
      // Prevent margin-collapsing which throws off height calculations
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
