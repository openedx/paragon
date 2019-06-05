// TODO: @jaebradley fix these eslint errors

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
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

  genPanelId(index) {
    return `tab-panel-${this.state.uuid}-${index}`;
  }

  buildLabels() {
    return this.props.tabs.map((tab, i) => {
      const { label } = tab;
      const labelId = this.genLabelId(i);
      const panelId = this.genPanelId(i);
      const isSelected = this.state.activeTab === i;
      return (
        <Button
          role="tab"
          aria-selected={isSelected}
          aria-controls={panelId}
          id={labelId}
          key={labelId}
          onClick={() => { this.toggle(i); }}
          className={classNames('nav-link nav-item', {
          active: isSelected,
        })}
        >
          {label}
        </Button>

      );
    });
  }

  buildPanels() {
    return this.props.tabs.map((tab, i) => {
      const { panel } = tab;
      const panelId = this.genPanelId(i);
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
          id={panelId}
          key={panelId}
          role="tabpanel"
        >
          <div>
            {panel}
          </div>
        </div>
      );
    });
  }

  render() {
    const labels = this.buildLabels();
    const panels = this.buildPanels();

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
          {panels}
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
