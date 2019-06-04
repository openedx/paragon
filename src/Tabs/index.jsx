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

      return (
        <Tabs.Label
          labelId={labelId}
          panelId={panelId}
          label={label}
          index={i}
          key={label}
          activeTab={this.state.activeTab}
          toggle={this.toggle}
        />
      );
    });
  }

  buildPanels() {
    return this.props.tabs.map((tab, i) => {
      const { panel } = tab;
      const panelId = this.genPanelId(i);
      const labelId = this.genLabelId(i);

      return (
        <Tabs.Panel
          labelId={labelId}
          panelId={panelId}
          panel={panel}
          key={panel}
          index={i}
          activeTab={this.state.activeTab}
        />
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
  tabs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

// TODO: custom validator that ensures labels and panels are the same length

export default Tabs;

Tabs.Label = ({
  labelId, panelId, label, index, activeTab, toggle,
}) => {
  const selected = index === activeTab;
  return (
    <Button
      role="tab"
      aria-selected={selected}
      aria-controls={panelId}
      id={labelId}
      key={labelId}
      onClick={() => { toggle(index); }}
      className={classNames('nav-link nav-item', {
        active: selected,
      })}
    >
      {label}
    </Button>
  );
};

Tabs.Label.propTypes = {
  labelId: PropTypes.string.isRequired,
  panelId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
};

Tabs.Panel = ({
  labelId, panelId, panel, index, activeTab,
}) => {
  const selected = index === activeTab;
  return (
    <div
      aria-hidden={!selected}
      aria-labelledby={labelId}
      className={classNames(
        'tab-pane',
        { active: selected },
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
};

Tabs.Panel.propTypes = {
  labelId: PropTypes.string.isRequired,
  panelId: PropTypes.string.isRequired,
  panel: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
};
