/* eslint-disable max-len */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { nonNegativeInteger } from '../utils/propTypes';

export default class ListBox extends React.Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.state = {
      selectedOptionIndex: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { selectedOptionIndex } = nextProps;

    if (selectedOptionIndex !== prevState.selectedOptionIndex
      && selectedOptionIndex !== undefined) {
      return { selectedOptionIndex };
    }

    return null;
  }

  onFocus() {
    // if no ListBoxOption is selected, select first ListBoxOption on ListBox focus
    if (!this.state.selectedOptionIndex) {
      this.setState({
        selectedOptionIndex: 0,
      });
    }
  }

  onKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown': {
        // prevent scrolling entire modal body with arrow keys
        e.preventDefault();
        if (this.state.selectedOptionIndex < React.Children.count(this.props.children) - 1) {
          this.setState(state => ({
            selectedOptionIndex: state.selectedOptionIndex + 1,
          }));
        }
        break;
      }
      case 'ArrowUp': {
        // prevent scrolling entire modal body with arrow keys
        e.preventDefault();

        if (this.state.selectedOptionIndex > 0) {
          this.setState(state => ({
            selectedOptionIndex: state.selectedOptionIndex - 1,
          }));
        }
        break;
      }
      default:
    }
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, index) => React.cloneElement(child, {
      index,
      isSelected: index === this.state.selectedOptionIndex,
      onSelect: () => { this.setState({ selectedOptionIndex: index }); child.props.onSelect(); },
    }));
  }

  render() {
    const {
      children,
      className,
      selectedOptionIndex,
      tag,
      ...other
    } = this.props;

    return React.createElement(
      this.props.tag,
      {
        'aria-activedescendant': this.state.selectedOptionIndex === null ? null : `list-box-option-${this.state.selectedOptionIndex}`,
        className: classNames(['list-group', this.props.className]),
        onFocus: this.onFocus,
        onKeyDown: this.onKeyDown,
        role: 'listbox',
        tabIndex: 0,
        ...other,
      },
      this.renderChildren(),
    );
  }
}

ListBox.propTypes = {
  /** specifies the ListBoxOption component(s) that will be displayed within the ListBox element. You can pass in one or more ListBoxOption components.
 */
  children: PropTypes.node.isRequired,
  /** specifies Bootstrap class names to apply to the ListBox component. The default is an empty string. */
  className: PropTypes.string,
  /** Although the ListBox component keeps track of which ListBoxOption is selected, `selectedOptionIndex` provides a mechanism for an override, if necessary. An example would be to clear the selectedOption when moving between views. Note that override is not permanent and that clicking on a ListBoxOption or interacting with the ListBox with the keyboard will change the selected ListBoxOption relative to the original override. The default is undefined. */
  selectedOptionIndex: nonNegativeInteger,
  /** used to specify the element type of the rendered ListBox component. The default is div. Example alternatives include ol, ul, span, etc. */
  tag: PropTypes.string,
};

ListBox.defaultProps = {
  className: undefined,
  selectedOptionIndex: undefined,
  tag: 'div',
};
