import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../Button';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      isOpen: props.isOpen,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.isCollapsible) {
      this.handleResize();
      global.addEventListener('resize', this.handleResize.bind(this));
    }
  }

  /**
   * "Note that you may call setState() immediately in componentDidUpdate() but,
   * it must be wrapped in a conditional check against the previous props, or
   * you'll cause an infinite loop."
   * See https://reactjs.org/docs/react-component.html#componentdidupdate for
   * more information.
   */
  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        isOpen: this.props.isOpen,
      });
    }
  }

  componentWillUnmount() {
    if (this.props.isCollapsible) {
      global.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize() {
    const { isExpanded } = this.state;

    if (isExpanded !== this.props.isCollapsible()) {
      this.setState({
        isExpanded: !isExpanded,
      });
    }
  }

  handleClick() {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
    this.props.onToggle(isOpen);
  }

  renderIcon() {
    const { icons } = this.props;
    const { isOpen } = this.state;

    if (icons) {
      return isOpen ? icons.expanded : icons.collapsed;
    }

    return <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />;
  }

  render() {
    const {
      children,
      expandedTitle,
      title,
    } = this.props;

    const { isExpanded, isOpen } = this.state;

    return (
      <div className={classNames(
        'collapsible',
        { open: isOpen && !isExpanded },
        { expanded: isExpanded },
        )}
      >
        {isExpanded ? (
          expandedTitle
        ) : (
          <Button
            aria-expanded={isOpen}
            className={classNames(
              'btn-block text-left',
              'btn-collapsible',
              { open: isOpen },
            )}
            onClick={this.handleClick}
          >
            <div className="collapsible-title d-flex align-items-center justify-content-between">
              {title}
              {this.renderIcon()}
            </div>
          </Button>
        )}
        <div className={classNames(
          'collapsible-body',
          { open: isOpen || isExpanded },
          )}
        >
          {children}
        </div>
      </div>
    );
  }
}

Collapsible.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  expandedTitle: PropTypes.element,
  icons: PropTypes.shape({
    expanded: PropTypes.element.isRequired,
    collapsed: PropTypes.element.isRequired,
  }),
  isCollapsible: PropTypes.func,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  title: PropTypes.string.isRequired,
};

Collapsible.defaultProps = {
  expandedTitle: undefined,
  icons: null,
  isCollapsible: undefined,
  isOpen: false,
  onToggle: () => {},
};

export default Collapsible;
