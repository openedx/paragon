import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

import styles from './Collapsible.scss';

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
      window.addEventListener('resize', this.handleResize.bind(this));
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
    /* eslint-disable react/no-did-update-set-state */
    if (this.props.isOpen !== prevProps.isOpen) {
      this.setState({
        isOpen: this.props.isOpen,
      });
    }
  }

  componentWillUnmount() {
    if (this.props.isCollapsible) {
      window.removeEventListener('resize', this.handleResize);
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

  render() {
    const {
      children,
      expandedTitle,
      iconId,
      title,
    } = this.props;

    const { isExpanded, isOpen } = this.state;

    return (
      <div className={[classNames(
        'collapsible',
        { [styles.open]: isOpen && !isExpanded },
        { [styles.expanded]: isExpanded },
        )]}
      >
        {isExpanded ? (
          expandedTitle
        ) : (
          <Button
            aria-expanded={isOpen}
            className={[classNames(
              'btn-block text-left',
              styles['btn-collapsible'],
              { [styles.open]: isOpen },
            )]}
            label={
              <div className="collapsible-title">
                <Icon
                  id={iconId}
                  className={[classNames(
                    'ml-2 float-right collapsible-icon',
                    {
                      'fa fa-angle-up': isOpen,
                      'fa fa-angle-down': !isOpen,
                    },
                  )]}
                />
                {title}
              </div>
            }
            onClick={this.handleClick}
          />
        )}
        <div className={[classNames(
          'collapsible-body',
          { [styles.open]: isOpen || isExpanded },
          )]}
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
  iconId: PropTypes.string,
  isCollapsible: PropTypes.func,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  title: PropTypes.string.isRequired,
};

Collapsible.defaultProps = {
  expandedTitle: undefined,
  iconId: '',
  isCollapsible: undefined,
  isOpen: false,
  onToggle: () => {},
};

export default Collapsible;
