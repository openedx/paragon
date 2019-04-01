import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container, Row, Col } from './index';
import README from './README.md';


storiesOf('Layout', module)
  .addParameters({ info: { text: README } })
  .add('regular', () => (
    <Container className="border">
      <Row>
        <Col className="border text-center">Column</Col>
      </Row>
      <Row>
        <Col className="border text-center">Column</Col>
        <Col className="border text-center">Column</Col>
        <Col className="border text-center">Column</Col>
        <Col className="border text-center">Column</Col>
      </Row>
    </Container>
  ));
