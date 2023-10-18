import React from 'react';
import { render, screen } from '@testing-library/react';

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
