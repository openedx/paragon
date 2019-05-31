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

  genPanelId(index) {
    return `tab-panel-${this.state.uuid}-${index}`;
  }

  render() {
    const { children } = this.props;
    return (
      <div className="tabs">
        <div className={classNames('nav', 'nav-tabs')} role="tablist">
          {
          children.map((child, i) => {
          const { label } = child.props;
          const selected = this.state.activeTab === i;
          const labelId = this.genLabelId(i);

            return (
              <Tabs.Label
                label={label}
                idx={i}
                selected={selected}
                labelId={labelId}
                toggle={this.toggle}
                key={labelId}
              />
            );
          })
        }
        </div>
        <div className="tabs-content">
          {
            children.map((child, i) => {
              const content = child.props.children;
              const selected = this.state.activeTab === i;
              const panelId = this.genPanelId(i);
              if (this.state.activeTab === i) {
                return (
                  <Tabs.Panel
                    selected={selected}
                    panelId={panelId}
                    content={content}
                  >
                  </Tabs.Panel>
                );
              }
                return undefined;
            })
          }
        </div>
      </div>
    );
  }
}


Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

Tabs.Label = ({
  label, idx, selected, labelId, toggle,
}) => (

  <button
    type="button"
    role="tab"
    aria-selected={selected}
    aria-controls={labelId}
    id={labelId}
    onClick={() => { toggle(idx); }}
    className={classNames('nav-link', 'nav-item', 'btn', {
      active: selected,
    })}
    key={label}
  >
    {label}
  </button>

);

Tabs.Label.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  labelId: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
};

Tabs.Panel = ({ selected, panelId, content }) => (
  <div
    aria-hidden={!selected}
    aria-labelledby={panelId}
    className={classNames(
    'tab-pane', 'fade', 'show active',
    { active: selected },
  )}
    id={panelId}
    key={panelId}
    role="tabpanel"
  >
    {content}
  </div>
);

Tabs.Panel.propTypes = {
  selected: PropTypes.string.isRequired,
  panelId: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
// TODO: custom validator that ensures labels and panels are the same length

export default Tabs;
