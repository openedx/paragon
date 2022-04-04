import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import * as ParagonComponents from '~paragon-react';
import { Stack, Button } from '~paragon-react';
import Layout from '../components/PageLayout';
import SEO from '../components/SEO';
import DraggableComponentListItem from '../components/playground/DraggableComponentListItem';
import Dropzone from '../components/playground/Dropzone';

const SUPPORTED_PARAGON_COMPONENTS = Object.entries(ParagonComponents).filter(([_, Component]) => !!Component.playgroundConfig);

const AppNodes = [
  {
    node: Stack,
    props: {
      direction: 'horizontal',
      gap: 2,
    },
    children: [
      {
        node: Button,
        props: {
          variant: 'brand',
        },
        children: [
          {
            node: 'span',
            props: {},
            children: [
              'Hello!',
            ],
          },
        ],
      },
      {
        node: Button,
        props: {
          variant: 'primary',
        },
        children: [
          'World',
        ],
      },
    ],
  },
];

const PlaygroundPage = () => {
  const renderComponent = ({
    node: Component,
    props,
    children,
  }) => {
    console.log({
      Component,
      props,
      children
    });
    return (
      <Component key={uuidv4()} {...props}>
        {children.map((child) => {
          if (typeof child === 'object' && child !== null) {
            return renderComponent(child);
          }
          return child;
        })}
      </Component>
    );
  }

  return (
    <Layout hideFooterComponentMenu>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Playground" />
      <DndProvider backend={HTML5Backend}>
        <div className="d-flex" style={{ height: '100vh' }}>
          <div className="p-3 bg-primary-200" style={{ flex: '0 0 14rem', overflowY: 'scroll' }}>
            <nav>
              <ul className="list-unstyled">
                <Stack gap={2}>
                  {SUPPORTED_PARAGON_COMPONENTS.map(([componentName, Component]) => {
                    console.log('playgroundConfig for' + componentName, Component.playgroundConfig);
                    return (
                      <DraggableComponentListItem
                        key={uuidv4()}
                        item={Component}
                      >
                        {componentName}
                      </DraggableComponentListItem>
                    );
                  })}
                </Stack>
              </ul>
            </nav>
          </div>
          <Dropzone />
        </div>
      </DndProvider>
    </Layout>
  );
};

export default PlaygroundPage;
