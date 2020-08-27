// TODO: @jaebradley fix these eslint errors
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import newId from '../../utils/newId';

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
    return this.props.labels.map((label, i) => {
      const selected = this.state.activeTab === i;
      const labelId = this.genLabelId(i);

      return (
        <li key={labelId}>
          {/* eslint-disable-next-line react/button-has-type */}
          <button
            role="tab"
            aria-selected={selected}
            aria-controls={this.genPanelId(i)}
            id={labelId}
            onClick={() => { this.toggle(i); }}
            className={classNames('nav-link nav-item', {
              active: selected,
            })}
          >
            {label}
          </button>
        </li>
      );
    });
  }

  buildPanels() {
    return this.props.children.map((panel, i) => {
      const selected = this.state.activeTab === i;
      const panelId = this.genPanelId(i);

      return (
        <div
          aria-hidden={!selected}
          aria-labelledby={this.genLabelId(i)}
          className={classNames(
            'tab-pane',
            { active: selected },
          )}
          id={panelId}
          key={panelId}
          role="tabpanel"
        >
          {panel}
        </div>
      );
    });
  }

  render() {
    const labels = this.buildLabels();
    const panels = this.buildPanels();

    return (
      <div className="tabs">
        <ul
          role="tablist"
          className={classNames([
            'nav',
            'nav-tabs',
          ])}
        >
          {labels}
        </ul>
        <div role="tabpanel" className="tab-content">
          {panels}
        </div>
      </div>
    );
  }
}
// TODO: custom validator that ensures labels and panels are the same length
Tabs.propTypes = {
  /** specifies the list of elements that will be displayed within each of the tabbed views.  It is the content relevant to each label. Children should not be passed as Props, but should instead be nested between the opening and closing `<Tabs> </Tabs>` tags. */
  labels: PropTypes.arrayOf(PropTypes.node).isRequired,
  /** specifies the list of headings that will appear on all of the tabs that will be created.
 */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Tabs;
