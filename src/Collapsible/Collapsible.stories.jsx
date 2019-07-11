import React from 'react';
import { storiesOf } from '@storybook/react';

import Collapsible from './index';
import Icon from '../Icon';

storiesOf('Collapsible', module)
  .add('usage', () => (
    <Collapsible
      className="collapsible-card"
      onToggle={isOpen => console.log('Collapsible toggled and open is: ', isOpen)}
      onOpen={() => console.log('Collapsible opened.')}
      onClose={() => console.log('Collapsible closed.')}
    >
      <Collapsible.Trigger className="collapsible-card-header d-flex align-items-center">
        <h4 className="flex-grow-1">A heading</h4>

        <span className="collapsible-card-header-icon" aria-hidden>
          <Collapsible.Visible whenClosed>
            <Icon className="fa fa-chevron-down" />
          </Collapsible.Visible>

          <Collapsible.Visible whenOpen>
            <Icon className="fa fa-chevron-up" />
          </Collapsible.Visible>
        </span>
      </Collapsible.Trigger>

      <Collapsible.Body className="collapsible-card-body">
        <p>Your stuff goes here.</p>

        <Collapsible.Trigger closeOnly tag="a" className="btn btn-outline-primary">
          Close
        </Collapsible.Trigger>
      </Collapsible.Body>
    </Collapsible>
  ));
