import React from 'react';
import { render, screen } from '@testing-library/react';

import ModalDialog from '../ModalDialog';

describe('ModalDialog', () => {
  it('renders a dialog with aria-label and content', () => {
    const onClose = jest.fn();
    render(
      <ModalDialog
        title="My dialog"
        isOpen
        onClose={onClose}
        size="md"
        variant="default"
        hasCloseButton
        isOverflowVisible
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

    const dialogNode = screen.getByRole('dialog');

    expect(dialogNode).toBeInTheDocument();
    expect(dialogNode).toHaveAttribute('aria-label', 'My dialog');
    expect(screen.getByText('The content')).toBeInTheDocument();
  });

  it('is hidden by default', () => {
    const onClose = jest.fn();
    render(
      <ModalDialog
        title="My dialog"
        onClose={onClose}
      >
        <ModalDialog.Header><ModalDialog.Title>The title</ModalDialog.Title></ModalDialog.Header>
        <ModalDialog.Body><p>The hidden content</p></ModalDialog.Body>
        <ModalDialog.Footer><ModalDialog.CloseButton>Cancel</ModalDialog.CloseButton></ModalDialog.Footer>
      </ModalDialog>,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

describe('ModalDialog with Hero', () => {
  it('renders a dialog with aria-label and hero with img', () => {
    const onClose = jest.fn();
    render(
      <ModalDialog
        title="My dialog"
        isOpen
        onClose={onClose}
        size="md"
        variant="default"
        hasCloseButton
        isOverflowVisible
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
    const dialogNode = screen.getByRole('dialog');

    expect(dialogNode).toBeInTheDocument();
    expect(dialogNode).toHaveAttribute('aria-label', 'My dialog');

    const heroContentNode = screen.getByTestId('modal-hero-content');
    expect(heroContentNode.previousSibling).toHaveStyle('backgroundImage: url(imageurl)');
  });
});
