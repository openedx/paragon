import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Collapsible from '.';

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
        Example content
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
    let getByText;
    let queryByText;
    const ref = React.createRef();
    beforeEach(() => {
      const { getByText: gbt, queryByText: qbt } = render(
        <Collapsible.Advanced ref={ref}>{collapsibleContent}</Collapsible.Advanced>,
      );
      getByText = gbt;
      queryByText = qbt;
      queryByText = qbt;
    });
    it('opens on .open()', () => {
      expect(queryByText('Example content')).not.toBeInTheDocument();
      ref.current.open();
      expect(getByText('Example content')).toBeInTheDocument();
    });

    it('closes on .close()', () => {
      ref.current.open();
      expect(getByText('Example content')).toBeInTheDocument();
      ref.current.close();
      expect(queryByText('Example content')).not.toBeInTheDocument();
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
    let getByText;
    let getByTestId;
    let getAllByRole;
    let queryByText;
    let trigger;
    let closeOnlyTrigger;
    let openOnlyTrigger;
    let collapsible;
    const ref = React.createRef();
    beforeEach(() => {
      const {
        getAllByRole: gabr, getByText: gbt, getByTestId: gbti, queryByText: qbt,
      } = render(
        <Collapsible.Advanced ref={ref}>{collapsibleContent}</Collapsible.Advanced>,
      );
      getByText = gbt;
      getByTestId = gbti;
      getAllByRole = gabr;
      queryByText = qbt;
      // eslint-disable-next-line prefer-destructuring
      trigger = getAllByRole('button')[0];
      closeOnlyTrigger = getByTestId('close-only');
      openOnlyTrigger = getByTestId('open-only');
      collapsible = ref.current;
    });

    it('opens on trigger click', () => {
      expect(trigger).toBeInTheDocument();
      fireEvent.click(trigger); // Open
      expect(getByText('Example content')).toBeInTheDocument();
    });

    it('closes on trigger click', () => {
      collapsible.open();
      expect(getByText('Example content')).toBeInTheDocument();
      fireEvent.click(trigger); // Close
      expect(queryByText('Example content')).not.toBeInTheDocument();
    });

    it('does not open on close only trigger click', () => {
      collapsible.close();
      fireEvent.click(closeOnlyTrigger); // No-op
      expect(queryByText('Example content')).not.toBeInTheDocument();
    });

    it('closes on close only trigger click', () => {
      collapsible.open();
      fireEvent.click(closeOnlyTrigger); // Close
      expect(queryByText('Example content')).not.toBeInTheDocument();
    });

    it('does not close on open only trigger click', () => {
      collapsible.open();
      fireEvent.click(openOnlyTrigger); // No-op
      expect(getByText('Example content')).toBeInTheDocument();
    });

    it('opens on open only trigger click', () => {
      collapsible.close();
      fireEvent.click(openOnlyTrigger); // Open
      expect(getByText('Example content')).toBeInTheDocument();
    });
  });

  describe('Keyboard Interactions', () => {
    let getAllByRole;
    let getByTestId;
    let getByText;
    let queryByText;
    let collapsible;
    let trigger;
    let closeOnlyTrigger;
    let openOnlyTrigger;
    const ref = React.createRef();
    beforeEach(() => {
      const {
        getAllByRole: gabr, getByText: gbt, getByTestId: gbti, queryByText: qbt,
      } = render(
        <Collapsible.Advanced ref={ref}>{collapsibleContent}</Collapsible.Advanced>,
      );
      getAllByRole = gabr;
      getByTestId = gbti;
      getByText = gbt;
      queryByText = qbt;
      [trigger] = getAllByRole('button');
      closeOnlyTrigger = getByTestId('close-only');
      openOnlyTrigger = getByTestId('open-only');
      collapsible = ref.current;
    });

    it('opens on trigger enter keydown', () => {
      fireEvent.keyDown(trigger, { key: 'Enter' }); // Open
      expect(getByText('Example content')).toBeInTheDocument();
    });

    it('closes on trigger enter keydown', () => {
      collapsible.open();
      fireEvent.keyDown(trigger, { key: 'Enter' }); // Close
      expect(queryByText('Example content')).not.toBeInTheDocument();
    });

    it('does not open on close only trigger enter keydown', () => {
      collapsible.close();
      fireEvent.keyDown(closeOnlyTrigger, { key: 'Enter' }); // No-op
      expect(queryByText('Example content')).not.toBeInTheDocument();
    });

    it('closes on close only trigger enter keydown', () => {
      collapsible.open();
      fireEvent.keyDown(closeOnlyTrigger, { key: 'Enter' }); // Close
      expect(queryByText('Example content')).not.toBeInTheDocument();
    });

    it('does not close on open only trigger enter keydown', () => {
      collapsible.open();
      fireEvent.keyDown(openOnlyTrigger, { key: 'Enter' }); // No-op
      expect(getByText('Example content')).toBeInTheDocument();
    });

    it('opens on open only trigger enter keydown', () => {
      collapsible.close();
      fireEvent.keyDown(openOnlyTrigger, { key: 'Enter' }); // Open
      expect(getByText('Example content')).toBeInTheDocument();
    });
  });
});
