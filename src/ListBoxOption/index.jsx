import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './ListBoxOption.scss';

export default class ListBoxOption extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseDown = this.onMouseDown.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isSelected && nextProps.isSelected) {
      this.props.onSelect();
    }
  }

  /**
   * onMouseDown is used instead of onClick because onClick triggers the focus
   * event before click event. This focus event bubbles up to the parent
   * (since onFocus bubbles in React), which triggers the ListBox's onFocus function.
   * This function will select the first ListBoxOption if one is not selected, and this
   * causes the user to see the first option selected before their desired option is selected
   * when the click event is fired shortly thereafter. The mouseDown event occurs before the
   * focus event, which prevents this behavior.
   */
  onMouseDown() {
    this.props.onSelect();
  }

  render() {
    const {
      children,
      className,
      index,
      isSelected,
      tag,
      ...other
    } = this.props;

    return React.createElement(
      this.props.tag,
      {
        'aria-selected': isSelected,
        className: classNames(
          styles['list-group-item'],
          styles['list-group-item-action'],
          {
            active: this.props.isSelected,
          },
          className,
        ),
        id: index === undefined ? null : `list-box-option-${index}`,
        onMouseDown: this.onMouseDown,
        role: 'option',
        ...other,
      },
      children,
    );
  }
}

ListBoxOption.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  tag: PropTypes.string,
  onSelect: PropTypes.func,
};

ListBoxOption.defaultProps = {
  className: '',
  index: undefined,
  isSelected: false,
  tag: 'div',
  onSelect: () => { },
};
