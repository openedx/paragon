import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IntlProvider } from 'react-intl';
import ModalDialog from '../ModalDialog';

describe('ModalDialog', () => {
  it('renders a dialog with aria-label and content', () => {
    const onClose = jest.fn();
    render(
      <IntlProvider locale="en" messages={{}}>
        <ModalDialog
          title="My dialog"
          isOpen
          onClose={onClose}
          size="md"
          variant="default"
          hasCloseButton
          isOverflowVisible={false}
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
      </IntlProvider>,
    );

    const dialogNode = screen.getByRole('dialog');

    expect(dialogNode).toBeInTheDocument();
    expect(dialogNode).toHaveAttribute('aria-label', 'My dialog');
    expect(screen.getByText('The content')).toBeInTheDocument();
  });

  it('is hidden by default', () => {
    const onClose = jest.fn();
    render(
      <IntlProvider locale="en" messages={{}}>
        <ModalDialog
          title="My dialog"
          onClose={onClose}
          isOverflowVisible={false}
        >
          <ModalDialog.Header><ModalDialog.Title>The title</ModalDialog.Title></ModalDialog.Header>
          <ModalDialog.Body><p>The hidden content</p></ModalDialog.Body>
          <ModalDialog.Footer><ModalDialog.CloseButton>Cancel</ModalDialog.CloseButton></ModalDialog.Footer>
        </ModalDialog>
      </IntlProvider>,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders a dialog with hasFullscreenButton', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(
      <IntlProvider locale="en" messages={{}}>
        <ModalDialog
          title="My dialog"
          isOpen
          onClose={onClose}
          size="md"
          variant="default"
          hasCloseButton
          hasFullscreenButton
          isOverflowVisible={false}
        >
          <ModalDialog.Body>
            <p>The content</p>
          </ModalDialog.Body>
        </ModalDialog>
      </IntlProvider>,
    );
    const dialogNode = screen.getByRole('dialog');

    expect(dialogNode).toBeInTheDocument();

    const fullscreenButton = screen.getByRole('button', { name: 'Fullscreen' });
    expect(fullscreenButton).toBeInTheDocument();
    expect(fullscreenButton).toHaveAttribute('aria-label', 'Fullscreen');

    await user.click(fullscreenButton);

    expect(dialogNode).toHaveClass('pgn__modal-fullscreen');
    expect(dialogNode).not.toHaveClass('pgn__modal-md');

    await user.click(fullscreenButton);

    expect(dialogNode).toHaveClass('pgn__modal-md');
    expect(dialogNode).not.toHaveClass('pgn__modal-fullscreen');
  });

  it('should not render fullscreen button if isFullscreenOnMobile is true and viewport is mobile', async () => {
    const onClose = jest.fn();

    // Mock useMediaQuery
    // eslint-disable-next-line global-require
    const reactResponsiveUseMediaQuery = require('react-responsive');
    jest.spyOn(reactResponsiveUseMediaQuery, 'useMediaQuery').mockImplementation(() => true);

    render(
      <IntlProvider locale="en" messages={{}}>
        <ModalDialog
          title="My dialog"
          isOpen
          onClose={onClose}
          size="md"
          variant="default"
          hasCloseButton
          hasFullscreenButton
          isFullscreenOnMobile
          isOverflowVisible={false}
        >
          <ModalDialog.Body>
            <p>The content</p>
          </ModalDialog.Body>
        </ModalDialog>
      </IntlProvider>,
    );
    const dialogNode = screen.getByRole('dialog');

    expect(dialogNode).toBeInTheDocument();

    const fullscreenButton = screen.queryByRole('button', { name: 'Fullscreen' });
    expect(fullscreenButton).not.toBeInTheDocument();
  });

  it('should not render fullscreen button if size is fullscreen', async () => {
    const onClose = jest.fn();

    render(
      <IntlProvider locale="en" messages={{}}>
        <ModalDialog
          title="My dialog"
          isOpen
          onClose={onClose}
          size="fullscreen"
          variant="default"
          hasCloseButton
          hasFullscreenButton
          isOverflowVisible={false}
        >
          <ModalDialog.Body>
            <p>The content</p>
          </ModalDialog.Body>
        </ModalDialog>
      </IntlProvider>,
    );
    const dialogNode = screen.getByRole('dialog');

    expect(dialogNode).toBeInTheDocument();

    const fullscreenButton = screen.queryByRole('button', { name: 'Fullscreen' });
    expect(fullscreenButton).not.toBeInTheDocument();
  });
});

describe('ModalDialog with Hero', () => {
  it('renders a dialog with aria-label and hero with img', () => {
    const onClose = jest.fn();
    render(
      <IntlProvider locale="en" messages={{}}>
        <ModalDialog
          title="My dialog"
          isOpen
          onClose={onClose}
          size="md"
          variant="default"
          hasCloseButton
          isOverflowVisible={false}
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
        </ModalDialog>
      </IntlProvider>,
    );
    const dialogNode = screen.getByRole('dialog');

    expect(dialogNode).toBeInTheDocument();
    expect(dialogNode).toHaveAttribute('aria-label', 'My dialog');

    const heroContentNode = screen.getByTestId('modal-hero-content');
    expect(heroContentNode.previousSibling).toHaveStyle('backgroundImage: url(imageurl)');
  });
});
