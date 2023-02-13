import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Row, Col,
} from '~paragon-react';
import AutoToc from './AutoToc';

export interface IContentWrapper {
  children: React.ReactNode,
  tab?: string,
  addAnchors?: boolean,
}

function ContentWrapper({
  children, tab, addAnchors,
}: IContentWrapper) {
  return (
    <Container fluid size={undefined}>
      <Row className="flex-xl-nowrap">
        <Col className="d-none d-xl-block" xl={2} />
        <Col
          xl={8}
          lg={9}
          md={12}
          as="main"
          className="flex-grow-1"
        >
          {children}
        </Col>
        <Col
          xl={2}
          lg={3}
          as={AutoToc}
          tab={tab}
          addAnchors={addAnchors}
          className="d-none d-lg-block"
        />
      </Row>
    </Container>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  addAnchors: PropTypes.bool,
  tab: PropTypes.string,
};

ContentWrapper.defaultProps = {
  children: undefined,
  addAnchors: undefined,
  tab: undefined,
};

export default ContentWrapper;
