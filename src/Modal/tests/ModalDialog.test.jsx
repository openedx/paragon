import React from 'react';
import { render, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ModalDialog from '../ModalDialog';

jest.mock('../ModalLayer', () => function ModalLayerMock(props) {
  // eslint-disable-next-line react/prop-types
  const { children, ...otherProps } = props;
  return (
    <modal-layer {...otherProps}>
      {children}
    </modal-layer>
  );
});

describe('ModalDialog', () => {
  const onClose = jest.fn();
  let dialogNode;
  beforeEach(() => {
    const { getByRole } = render(
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
      </ModalDialog>,
    );
    // eslint-disable-next-line prefer-destructuring
    dialogNode = getByRole('dialog');
  });

  it('renders a dialog', () => {
    expect(dialogNode).toBeInTheDocument();
  });

  it('has a label', () => {
    expect(dialogNode).toHaveAttribute('aria-label', 'My dialog');
  });

  it('has content', () => {
    expect(within(dialogNode).getByText('The content')).toBeInTheDocument();
  });
});

describe('ModalDialog with Hero', () => {
  const onClose = jest.fn();
  let dialogNode;
  beforeEach(() => {
    const { getByRole } = render(
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
          <ModalDialog.Hero.Content data-testid="modal-hero-content">
            <ModalDialog.Title>The title</ModalDialog.Title>
          </ModalDialog.Hero.Content>
        </ModalDialog.Hero>

        <ModalDialog.Body>
          <p>The content</p>
        </ModalDialog.Body>

        <ModalDialog.Footer>
          <ModalDialog.CloseButton>Cancel</ModalDialog.CloseButton>
        </ModalDialog.Footer>
      </ModalDialog>,
    );
    dialogNode = getByRole('dialog');
  });

  it('renders a dialog', () => {
    expect(dialogNode).toBeInTheDocument();
  });

  it('has a label', () => {
    expect(dialogNode).toHaveAttribute('aria-label', 'My dialog');
  });

  it('has a hero with image', () => {
    const heroContentNode = within(dialogNode).getByTestId('modal-hero-content');
    expect(heroContentNode.previousSibling).toHaveStyle('backgroundImage: url(imageurl)');
  });
});
