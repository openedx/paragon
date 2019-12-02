import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Table, Modal, Button, useToggleState } from '~paragon-react';
import { ComponentStatus } from '../components/doc-elements';
import SEO from '../components/seo';

import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Transitions = {};
Transitions.Fade = ({ children, in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
);

export default function () {
  const [isOpen, setIsOpen, open, close] = useToggleState(false);

  return (
    <div>
      <SEO title="Status" />

      <h1>Library Status</h1>
      <Button onClick={open}>Toggle</Button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Modal.Backdrop />
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>This modal</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>
            The content of the modal.
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-primary" onClick={close}>Save</Button>
            <Button className="btn-outline-primary" onClick={close}>Cancel</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>


      <h3>Components Status</h3>
      <StaticQuery
        query={graphql`query ComponentStatusQuery {
          allMdx(filter: {frontmatter: {type: {eq: "component"}}}, sort: {fields: frontmatter___title}) {
            nodes {
              frontmatter {
                designStatus
                devStatus
                status
                notes
                status
                title
                type
              }
            }
          }
        }`}
        render={({ allMdx }) => {
          if (!allMdx || !allMdx.nodes) return null;
          const components = allMdx.nodes.map(({ frontmatter }) => frontmatter);

          return (
            <Table
              className="pgn-doc__status-table"
              data={components.map(({
                title, status, designStatus, devStatus, notes,
              }) => ({
                name: (
                  <div>
                    <h6>{title} <ComponentStatus status={status} /></h6>
                    <pre>{notes}</pre>
                  </div>
                ),
                designStatus: <ComponentStatus status={designStatus} />,
                devStatus: <ComponentStatus status={devStatus} />,
              }))}
              columns={[
                {
                  label: 'Component',
                  key: 'name',
                  width: 'col-2',
                },
                {
                  label: 'Design',
                  key: 'designStatus',
                  width: 'col-3',
                },
                {
                  label: 'Development',
                  key: 'devStatus',
                  width: 'col-3',
                },
              ]}
            />
          );
        }}
      />
    </div>
  );
}

