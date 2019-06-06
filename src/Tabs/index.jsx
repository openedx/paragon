// TODO: @jaebradley fix these eslint errors

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import newId from '../utils/newId';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0,
      uuid: newId('tabInterface'),
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  genLabelId(index) {
    return `tab-label-${this.state.uuid}-${index}`;
  }

  genContentId(index) {
    return `tab-canel-${this.state.uuid}-${index}`;
  }

  buildLabels() {
    return this.props.tabs.map((tab, i) => {
      const { label } = tab;
      const labelId = this.genLabelId(i);
      const contentId = this.genContentId(i);
      const isSelected = this.state.activeTab === i;
      return (
        <button
          role="tab"
          aria-selected={isSelected}
          aria-controls={contentId}
          id={labelId}
          key={labelId}
          onClick={() => { this.toggle(i); }}
          className={classNames('nav-link nav-item btn', {
          active: isSelected,
        })}
        >
          {label}
        </button>

      );
    });
  }

  buildContents() {
    return this.props.tabs.map((tab, i) => {
      const { content } = tab;
      const contentId = this.genContentId(i);
      const labelId = this.genLabelId(i);
      const isSelected = this.state.activeTab === i;

      return (
        <div
          aria-hidden={!isSelected}
          aria-labelledby={labelId}
          className={classNames(
          'tab-pane',
          { active: isSelected },
        )}
          id={contentId}
          key={contentId}
          role="tabpanel"
        >
          {content}
        </div>
      );
    });
  }

  render() {
    const labels = this.buildLabels();
    const contents = this.buildContents();

    return (
      <div className="tabs">
        <div
          role="tablist"
          className={classNames([
            'nav',
            'nav-tabs',
          ])}
        >
          {labels}
        </div>
        <div role="tabpanel" className="tab-content">
          {contents}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    content: PropTypes.oneOf([PropTypes.string, PropTypes.element]).isRequired,
  })).isRequired,
};

export default Tabs;
