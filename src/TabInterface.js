import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { newId } from './utils/newId';

class TabInterface extends React.Component {
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
    return this.props.tabLabels.map((label, i) => {
      const selected = this.state.activeTab === i;
      const labelId = this.genLabelId(i);

      return (
        <NavItem
          aria-selected={selected}
          aria-controls={this.genPanelId(i)}
          id={labelId}
          key={labelId}
          role="tab"
          tabIndex={selected ? 0 : -1}
        >
          <NavLink
            className={classnames({ active: selected })}
            onClick={() => { this.toggle(i); }}
          >
            {label}
          </NavLink>
        </NavItem>
      );
    });
  }

  buildPanels() {
    return this.props.panels.map((panel, i) => {
      const selected = this.state.activeTab === i;
      const panelId = this.genPanelId(i);

      return (
        <TabPane
          aria-hidden={!selected}
          aria-labelledby={this.genLabelId(i)}
          id={panelId}
          key={panelId}
          role="tabpanel"
          tabId={i}
        >
          {panel}
        </TabPane>
      );
    });
  }

  render() {
    const labels = this.buildLabels();
    const panels = this.buildPanels();

    return (
      <div>
        <Nav tabs role="tablist">
          {labels}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {panels}
        </TabContent>
      </div>
    );
  }
}

// TODO: custom validator that ensures tabLabels and panels are the same length
TabInterface.propTypes = {
  tabLabels: PropTypes.array.isRequired,
  panels: PropTypes.array.isRequired,
};

export default TabInterface;
