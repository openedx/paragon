import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classNames from 'classnames';


const propTypes = {
  children: PropTypes.node,
  enterDuration: PropTypes.number,
  exitDuration: PropTypes.number,
  className: PropTypes.string,
  onChildEnter: PropTypes.func,
  onChildEntered: PropTypes.func,
  onChildExit: PropTypes.func,
  onChildExited: PropTypes.func,
  transitionStyles: PropTypes.shape({
    entering: PropTypes.object,
    entered: PropTypes.object,
    exiting: PropTypes.object,
    exited: PropTypes.object,
  }),
  transitionClassNames: PropTypes.string,
};

const defaultProps = {
  children: undefined,
  enterDuration: 300,
  exitDuration: 300,
  className: undefined,
  onChildEnter: undefined,
  onChildEntered: undefined,
  onChildExit: undefined,
  onChildExited: undefined,
  transitionStyles: {},
  transitionClassNames: 'pgn__transition-replace',
};


class TransitionReplace extends React.Component {
  constructor(props) {
    super(props);

    this.state = { height: null };

    this.onChildEnter = this.onChildEnter.bind(this);
    this.onChildEntering = this.onChildEntering.bind(this);
    this.onChildEntered = this.onChildEntered.bind(this);
    this.onChildExit = this.onChildExit.bind(this);
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

  onChildEnter(htmlNode) {
    if (this.props.onChildEnter) this.props.onChildEnter(htmlNode);
  }

  onChildEntering(htmlNode) {
    this.setState({ height: htmlNode.offsetHeight });
  }

  onChildEntered(htmlNode) {
    this.setState({ height: null });
    if (this.props.onChildEntered) this.props.onChildEntered(htmlNode);
  }

  onChildExit(htmlNode) {
    this.setState({ height: htmlNode.offsetHeight });
    if (this.props.onChildExit) this.props.onChildExit(htmlNode);
  }

  onChildExited(htmlNode) {
    this.setState({ height: null });
    if (this.props.onChildExited) this.props.onChildExited(htmlNode);
  }

  renderChildTransition(child) {
    // Makes the exiting and entering children occupy the same space
    // SCSS handles the crossfade so it can be easily overridden
    const commonChildStyles = {
      // Prevent margin-collapsing which throws off height calculations
      padding: '.1px 0',
    };

    const transitionStyles = {
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
          enter: this.props.enterDuration,
          exit: this.props.exitDuration,
        }}
        unmountOnExit
        mountOnEnter
        onEnter={this.onChildEnter}
        onEntering={this.onChildEntering}
        onEntered={this.onChildEntered}
        onExit={this.onChildExit}
        onExited={this.onChildExited}
        classNames={this.props.transitionClassNames}
      >
        {state => (
          <div
            style={{
              ...commonChildStyles,
              ...transitionStyles[state],
              ...this.props.transitionStyles[state],
            }}
          >
            {child}
          </div>
        )}
      </CSSTransition>
    );
  }

  render() {
    return (
      <TransitionGroup
        className={classNames('pgn-transition-replace-group', this.props.className)}
        style={{
          position: 'relative',
          overflow: this.state.height === null ? null : 'hidden',
          height: this.state.height,
        }}
      >
        {React.Children.map(this.props.children, this.renderChildTransition, this)}
      </TransitionGroup>
    );
  }
}


TransitionReplace.propTypes = propTypes;
TransitionReplace.defaultProps = defaultProps;


export default TransitionReplace;
