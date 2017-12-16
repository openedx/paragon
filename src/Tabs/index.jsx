// TODO: @jaebradley fix these eslint errors

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Tabs.scss';
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
    return this.props.labels.map((label, i) => {
      const selected = this.state.activeTab === i;
      const labelId = this.genLabelId(i);

      return (
        <li
          className={styles['nav-item']}
          id={labelId}
          key={labelId}
        >
          <a
            aria-selected={selected}
            aria-controls={this.genPanelId(i)}
            className={classNames(
              styles['nav-link'],
              { [styles.active]: selected },
            )}
            onClick={() => { this.toggle(i); }}
            role="tab"
            tabIndex={selected ? 0 : -1}
          >
            {label}
          </a>
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
            styles['tab-pane'],
            { [styles.active]: selected },
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
      <div>
        <ul
          className={classNames([
            styles.nav,
            styles['nav-tabs'],
          ])}
          role="tablist"
        >
          {labels}
        </ul>
        <div className={styles['tab-content']}>
          {panels}
        </div>
      </div>
    );
  }
}

// TODO: custom validator that ensures labels and panels are the same length
Tabs.propTypes = {
  labels: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Tabs;
