import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import Collapsible from '.';

const EXAMPLE_CONTENT = 'Example content';

const collapsibleContent = (
  <>
    <Collapsible.Trigger className="trigger d-flex align-items-center">
      <h4 className="flex-grow-1">A heading</h4>

      <span className="collapsible-card-header-icon" aria-hidden>
        <Collapsible.Visible whenClosed>+</Collapsible.Visible>
        <Collapsible.Visible whenOpen>-</Collapsible.Visible>
      </span>
    </Collapsible.Trigger>

    <Collapsible.Trigger data-testid="close-only" className="close-only" closeOnly>Close</Collapsible.Trigger>
    <Collapsible.Trigger data-testid="open-only" className="open-only" openOnly>Open</Collapsible.Trigger>

    <Collapsible.Body transitionWrapper={<div />}>
      <p className="example-content">
        {EXAMPLE_CONTENT}
      </p>
    </Collapsible.Body>
  </>
);

describe('<Collapsible />', () => {
  describe('Uncontrolled Rendering', () => {
    it('renders closed by default', () => {
      const tree = renderer.create((
        <Collapsible.Advanced>
          {collapsibleContent}
        </Collapsible.Advanced>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders open by default', () => {
      const tree = renderer.create((
        <Collapsible.Advanced defaultOpen>
          {collapsibleContent}
        </Collapsible.Advanced>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Controlled Rendering', () => {
    it('renders closed by default', () => {
      const tree = renderer.create((
        <Collapsible.Advanced open={false}>
          {collapsibleContent}
        </Collapsible.Advanced>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders open by default', () => {
      const tree = renderer.create((
        <Collapsible.Advanced>
          {collapsibleContent}
        </Collapsible.Advanced>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Imperative Methods', () => {
    const ref = React.createRef();
    beforeEach(() => {
      render(
        <Collapsible.Advanced ref={ref}>{collapsibleContent}</Collapsible.Advanced>,
      );
    });
    it('opens on .open()', () => {
      expect(screen.queryByText(EXAMPLE_CONTENT)).not.toBeInTheDocument();
      ref.current.open();
      expect(screen.getByText(EXAMPLE_CONTENT)).toBeInTheDocument();
    });

    it('closes on .close()', () => {
      ref.current.open();
      expect(screen.getByText(EXAMPLE_CONTENT)).toBeInTheDocument();
      ref.current.close();
      expect(screen.queryByText(EXAMPLE_CONTENT)).not.toBeInTheDocument();
    });

    it('correct behavior with unmountOnExit', () => {
      let i = 0;
      function Comp() {
        i += 1;
        return <h1>Hello world</h1>;
      }
      render(
        <Collapsible.Advanced ref={ref} unmountOnExit={false}>
          <Collapsible.Body>
            <Comp />
          </Collapsible.Body>
        </Collapsible.Advanced>,
      );
      ref.current.open();
      expect(i).toEqual(1);
      ref.current.close();
      ref.current.open();
      expect(i).toEqual(1);
    });
  });

  describe('Mouse Interactions', () => {
    let collapsible;
    const ref = React.createRef();
    beforeEach(() => {
      render(
        <Collapsible.Advanced ref={ref}>{collapsibleContent}</Collapsible.Advanced>,
      );
      collapsible = ref.current;
    });

    it('opens on trigger click', async () => {
      expect(screen.getAllByRole('button')[0]).toBeInTheDocument();
      await userEvent.click(screen.getAllByRole('button')[0]); // Open
      expect(screen.getByText(EXAMPLE_CONTENT)).toBeInTheDocument();
    });

    it('closes on trigger click', async () => {
      collapsible.open();
      expect(screen.getByText(EXAMPLE_CONTENT)).toBeInTheDocument();
      await userEvent.click(screen.getAllByRole('button')[0]); // Close
      expect(screen.queryByText(EXAMPLE_CONTENT)).not.toBeInTheDocument();
    });

    it('does not open on close only trigger click', async () => {
      collapsible.close();
      await userEvent.click(screen.getByTestId('close-only')); // No-op
      expect(screen.queryByText(EXAMPLE_CONTENT)).not.toBeInTheDocument();
    });

    it('closes on close only trigger click', async () => {
      collapsible.open();
      await userEvent.click(screen.getByTestId('close-only')); // Close
      expect(screen.queryByText(EXAMPLE_CONTENT)).not.toBeInTheDocument();
    });

    it('does not close on open only trigger click', async () => {
      collapsible.open();
      await userEvent.click(screen.getByTestId('open-only')); // No-op
      expect(screen.getByText(EXAMPLE_CONTENT)).toBeInTheDocument();
    });

    it('opens on open only trigger click', async () => {
      collapsible.close();
      await userEvent.click(screen.getByTestId('open-only')); // Open
      expect(screen.getByText(EXAMPLE_CONTENT)).toBeInTheDocument();
    });
  });

  describe('Keyboard Interactions', () => {
    let collapsible;
    const ref = React.createRef();
    beforeEach(() => {
      render(
        <Collapsible.Advanced ref={ref}>{collapsibleContent}</Collapsible.Advanced>,
      );
      collapsible = ref.current;
    });

    it('opens on trigger enter keydown', async () => {
      screen.getAllByRole('button')[0].focus();
      await userEvent.keyboard('{enter}'); // Open
      expect(screen.getByText(EXAMPLE_CONTENT)).toBeInTheDocument();
    });

    it('closes on trigger enter keydown', async () => {
      collapsible.open();
      screen.getAllByRole('button')[0].focus();
      await userEvent.keyboard('{enter}'); // Close
      expect(screen.queryByText(EXAMPLE_CONTENT)).not.toBeInTheDocument();
    });

    it('does not open on close only trigger enter keydown', async () => {
      collapsible.close();
      screen.getByTestId('close-only').focus();
      await userEvent.keyboard('{enter}'); // No-op
      expect(screen.queryByText(EXAMPLE_CONTENT)).not.toBeInTheDocument();
    });

    it('closes on close only trigger enter keydown', async () => {
      collapsible.open();
      screen.getByTestId('close-only').focus();
      await userEvent.keyboard('{enter}'); // Close
      expect(screen.queryByText(EXAMPLE_CONTENT)).not.toBeInTheDocument();
    });

    it('does not close on open only trigger enter keydown', async () => {
      collapsible.open();
      screen.getByTestId('open-only').focus();
      await userEvent.keyboard('{enter}'); // No-op
      expect(screen.getByText(EXAMPLE_CONTENT)).toBeInTheDocument();
    });

    it('opens on open only trigger enter keydown', async () => {
      collapsible.close();
      screen.getByTestId('open-only').focus();
      await userEvent.keyboard('{enter}'); // Open
      expect(screen.getByText(EXAMPLE_CONTENT)).toBeInTheDocument();
    });
  });
});
