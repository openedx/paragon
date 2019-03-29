import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './index';
import README from './README.md';


storiesOf('Container', module)
  .addParameters({ info: { text: README } })
  .add('regular', () => (
    <Container className="border">
      <div className="py-3" style={{ background: 'rgba(0,0,0,.15)' }}>
        Container Contents
      </div>
    </Container>
  ))
  .add('fluid', () => (
    <Container fluid className="border">
      <div className="py-3" style={{ background: 'rgba(0,0,0,.15)' }}>
        Fluid Container Contents
      </div>
    </Container>
  ));
