import React from 'react';
import { mount } from 'enzyme';
import ModalDialog from '../ModalDialog';

/* eslint-disable react/prop-types */
jest.mock('../ModalLayer', () => function ModalLayerMock(props) {
  const { children, ...otherProps } = props;
  return (
    <modal-layer {...otherProps}>
      {children}
    </modal-layer>
  );
});

describe('ModalDialog', () => {
  const onClose = jest.fn();
  const wrapper = mount((
    <ModalDialog
      title="My dialog"
      isOpen
      onClose={onClose}
      size="md"
      variant="default"
      hasCloseButton
    >
      <ModalDialog.Header>
        <ModalDialog.Title>The title</ModalDialog.Title>
      </ModalDialog.Header>

      <ModalDialog.Body>
        <p>The content</p>
      </ModalDialog.Body>

      <ModalDialog.Footer>
        <ModalDialog.CloseButton>Cancel</ModalDialog.CloseButton>
      </ModalDialog.Footer>
    </ModalDialog>
  ));

  const dialogNode = wrapper.find('div[role="dialog"]').hostNodes().first();

  it('renders a dialog', () => {
    expect(wrapper.exists('div[role="dialog"]')).toBe(true);
  });

  it('has a label', () => {
    expect(dialogNode.props()['aria-label']).toBe('My dialog');
  });

  it('has content', () => {
    expect(wrapper.exists({ children: 'The content' })).toBe(true);
  });
});

describe('ModalDialog with Hero', () => {
  const onClose = jest.fn();
  const wrapper = mount((
    <ModalDialog
      title="My dialog"
      isOpen
      onClose={onClose}
      size="md"
      variant="default"
      hasCloseButton
    >
      <ModalDialog.Hero>
        <ModalDialog.Hero.Background backgroundSrc="imageurl" />
        <ModalDialog.Hero.Content>
          <ModalDialog.Title>The title</ModalDialog.Title>
        </ModalDialog.Hero.Content>
      </ModalDialog.Hero>

      <ModalDialog.Body>
        <p>The content</p>
      </ModalDialog.Body>

      <ModalDialog.Footer>
        <ModalDialog.CloseButton>Cancel</ModalDialog.CloseButton>
      </ModalDialog.Footer>
    </ModalDialog>
  ));

  const dialogNode = wrapper.find('div[role="dialog"]').hostNodes().first();

  it('renders a dialog', () => {
    expect(wrapper.exists('div[role="dialog"]')).toBe(true);
  });

  it('has a label', () => {
    expect(dialogNode.props()['aria-label']).toBe('My dialog');
  });

  it('has a hero with image', () => {
    expect(wrapper.exists({
      style: {
        backgroundImage: 'url(imageurl)',
      },
    })).toBe(true);
  });
});
