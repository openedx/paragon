import React from 'react';
import Menu from '../components/Menu';
import Layout from '../components/PageLayout';
import { Button, Container, Row, Col } from '~paragon-react'; // eslint-disable-line

const HomePage = () => (
  <>
  <Container size="xs" className="mb-5">
  <div className="border border-success">1</div>
  </Container>
  <Container size="xl" className="mb-5">
    <Row>
      <Col>
        <div className="border border-success">1</div>
      </Col>
      <Col>
        <div className="border border-success">1</div>
      </Col>
      <Col>
        <div className="border border-success">1</div>
      </Col>
      <Col>
        <div className="border border-success">1</div>
      </Col>
      <Col xs={4}>
        <div className="border border-success">1</div>
      </Col>
      <Col>
        <div className="border border-success">1</div>
      </Col>
      <Col>
        <div className="border border-success">1</div>
      </Col>
      <Col>
        <div className="border border-success">1</div>
      </Col>
      <Col>
        <div className="border border-success">1</div>
      </Col>
    </Row>
  </Container>
  <Container size="sm" className="mb-5">
    <div className="border border-success">This is a container</div>
  </Container>
  <Container size="md" className="mb-5">
    <div className="border border-success">This is a container</div>
  </Container>
  <Container size="lg" className="mb-5">
    <div className="border border-success">This is a container</div>
  </Container>
  <Container size="xl" className="mb-5">
    <div className="border border-success">This is a container</div>
  </Container>
  <Layout showMinimizedTitle hideFooterComponentMenu>
    <div className="bg-dark text-white text-center py-5">
      <p className="x-small text-uppercase text-monospace mb-0">
        Technical Documentation{' '}
      </p>
      <h1 className="display-3 text-white">Paragon Design System</h1>
      <p className="lead mx-auto my-3 mb-4" style={{ maxWidth: '28em' }}>
        An accessible, theme-ready, and open source design system built for
        learning applications.
      </p>
      <div className="mb-5">
        <Button
          variant="inverse-outline-primary mr-2"
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://openedx.atlassian.net/wiki/spaces/BPL/overview"
        >
          Design Documentation
        </Button>
        <Button
          variant="inverse-outline-primary"
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.figma.com/file/eGmDp94FlqEr4iSqy1Uc1K/Paragon-2021"
        >
          Figma Library
        </Button>
      </div>
    </div>
    <Menu />
  </Layout>
  </>
);

export default HomePage;
