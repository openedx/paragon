import React from 'react';
import { storiesOf } from '@storybook/react';

import Collapsible from './index';

storiesOf('Collapsible', module)
  .add('usage', () => (
    <Collapsible
      onToggle={isOpen => console.log('Collapsible toggled and open is: ', isOpen)}
      onOpen={() => console.log('Collapsible opened.')}
      onClose={() => console.log('Collapsible closed.')}
    >
      <p>Your stuff goes here.</p>

      <Collapsible.Trigger closeOnly tag="a" className="btn btn-outline-primary">
        Close
      </Collapsible.Trigger>
    </Collapsible>
  ));
