import React from 'react';
import {
  render, fireEvent, waitFor, within,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import classNames from 'classnames';

import BulkActions from '../BulkActions';
import {
  ACTION_OVERFLOW_BUTTON_TEXT, SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT,
} from '../CollapsibleButtonGroup';
import { useWindowSize, Button } from '../..';
import DataTableContext from '../DataTableContext';
import { waitForComponentToPaint } from './utils';

jest.mock('../../hooks/useWindowSize');
useWindowSize.mockReturnValue({ width: 800 });

function FirstAction({
  // eslint-disable-next-line react/prop-types
  as: Component, onClick, className, ...rest
}) {
  return (
    <Component variant="brand" className={classNames('class1', className)} onClick={onClick} {...rest}>
      First Action
    </Component>
  );
}

// eslint-disable-next-line react/prop-types
function SecondAction({ onClick, className, ...rest }) {
  return (
    <Button variant="outline-primary" className={classNames('class2', className)} onClick={onClick} {...rest}>
      Second Action
    </Button>
  );
}

// eslint-disable-next-line react/prop-types
function ExtraAction({ text }) {
  return (
    <Button>
      {`Extra Action ${text}`}
    </Button>
  );
}

const selectedFlatRows = [{ id: 1 }, { id: 2 }];

const twoActions = [
  <FirstAction data-testid="action" />,
  <SecondAction data-testid="action" />,
];

const instance = {
  selectedFlatRows,
  controlledTableSelections: [
    {
      selectedRows: [],
      isEntireTableSelected: false,
    },
    jest.fn(),
  ],
  bulkActions: [
    ...twoActions,
    <ExtraAction text="1" />,
    <ExtraAction text="2" />,
    <ExtraAction text="3" />,
  ],
};

// eslint-disable-next-line react/prop-types
function BulkActionsWrapper({ value = instance, ...rest }) {
  return (
    <DataTableContext.Provider value={value}>
      <BulkActions {...rest} />
    </DataTableContext.Provider>
  );
}

describe('<BulkActions />', () => {
  describe('with functional rendering', () => {
    it('renders the function', () => {
      const myFunction = () => <Button>Some Button</Button>;
      const { container } = render(<BulkActionsWrapper value={{ ...instance, bulkActions: myFunction }} />);
      const button = within(container).getByText('Some Button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('with one action', () => {
    it('displays the primary button as a brand button', () => {
      const { getByTestId } = render(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [<FirstAction data-testid="brand" />] }}
        />,
      );
      const button = getByTestId('brand');
      expect(button).toBeInTheDocument();
    });
  });

  describe('with two actions', () => {
    let getAllByRole;
    let buttons;
    beforeEach(() => {
      const { getAllByRole: gabr } = render(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: twoActions }}
        />,
      );
      getAllByRole = gabr;
      buttons = getAllByRole('button');
    });

    it('displays the user\'s first button as a brand button', () => {
      expect(buttons.length).toEqual(2);
      expect(buttons[1].textContent).toBe('First Action');
    });

    it('displays the user\'s second button as an outline button', () => {
      expect(buttons[0].textContent).toBe('Second Action');
    });

    it('reverses the button order so that the primary button is on the right', () => {
      expect(buttons[1].textContent).toBe('First Action');
      expect(buttons[0].textContent).toBe('Second Action');
    });
  });

  describe('controlled table selections', () => {
    it('passed correct number of selected rows', () => {
      const { container } = render(
        <BulkActionsWrapper value={{ ...instance, bulkActions: [<FirstAction />] }} />,
      );
      const button = within(container).getByText('First Action');
      expect(button).toBeInTheDocument();
    });
    it('handles action on click with full table selection (all rows across all pages)', () => {
      const onClickSpy = jest.fn();
      const { getAllByRole } = render(
        <BulkActionsWrapper
          value={{
            ...instance,
            bulkActions: [<FirstAction onClick={onClickSpy} />, <SecondAction />],
            controlledTableSelections: [
              {
                selectedRows: [],
                isEntireTableSelected: true,
              },
              jest.fn(),
            ],
          }}
        />,
      );
      const button = getAllByRole('button')[1];
      fireEvent.click(button);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('two actions on click', () => {
    it('performs the primary button action on click', () => {
      const onClickSpy = jest.fn();
      const { getAllByRole } = render(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [<FirstAction onClick={onClickSpy} />, <SecondAction />] }}
        />,
      );
      const button = getAllByRole('button')[1];
      fireEvent.click(button);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('performs the second button action on click', () => {
      const onClickSpy = jest.fn();
      const { getAllByRole } = render(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [<FirstAction />, <SecondAction onClick={onClickSpy} />] }}
        />,
      );
      const button = getAllByRole('button')[0];
      fireEvent.click(button);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('with more than two actions', () => {
    it('displays the user\'s first button as a brand button', () => {
      const { getAllByTestId } = render(<BulkActionsWrapper />);
      const buttons = getAllByTestId('action');
      expect(buttons.length).toEqual(2);
      expect(buttons[1].textContent).toBe('First Action');
    });

    it('displays the user\'s second button as an outline button', () => {
      const { container } = render(<BulkActionsWrapper />);
      waitForComponentToPaint(container);
      const buttons = within(container).getAllByTestId('action');
      expect(buttons[0].textContent).toBe('Second Action');
    });

    describe('overflow menu', () => {
      const onClickSpy = jest.fn();
      const itemTestId = 'itemTestId';
      let wrapper;
      let overflowButton;
      beforeEach(() => {
        const { container } = render(
          <BulkActionsWrapper
            value={{
              ...instance,
              bulkActions: [...instance.bulkActions, <FirstAction onClick={onClickSpy} data-testid={itemTestId} />],
            }}
          />,
        );
        wrapper = container;
        // the overflow toggle button is the first button
        overflowButton = within(container).getByRole('button', { name: ACTION_OVERFLOW_BUTTON_TEXT });
        fireEvent.click(overflowButton);
      });
      afterEach(() => {
        onClickSpy.mockClear();
      });
      it('displays additional actions in a ModalPopup', () => {
        expect(overflowButton).toBeInTheDocument();
        const actionItems = within(wrapper).getAllByRole('button');
        // subtract two for the two main buttons that aren't in the overflow menu
        expect(actionItems.length).toEqual(4);
      });
      it('performs actions when overflow items are clicked', () => {
        const item = within(wrapper).getByTestId(itemTestId);
        fireEvent.click(item);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
      });
      it('passes the class names to the dropdown item', () => {
        const item = within(wrapper).getByTestId(itemTestId);
        expect(item).toBeInTheDocument();
      });
    });
  });

  describe('small screen', () => {
    const actions = [[[<FirstAction />]], [[<FirstAction />, <SecondAction />]], [instance.bulkActions]];
    test.each(actions)('puts all actions in a dropdown %#', (testActions) => {
      useWindowSize.mockReturnValue({ width: 500 });
      const { container, getByRole } = render(<BulkActionsWrapper value={{ ...instance, bulkActions: testActions }} />);
      const button = getByRole('button', { name: SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT });
      expect(button).toBeInTheDocument();
      expect(container.textContent).not.toContain('First Action');
      fireEvent.click(button);
      waitFor(() => expect(container.textContent.length).toBeGreaterThan(0));
    });
    it('renders the correct alt text for the dropdown', () => {
      useWindowSize.mockReturnValue({ width: 500 });
      const { getByRole } = render(<BulkActionsWrapper />);
      const overflowToggle = getByRole('button', { name: SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT });
      expect(overflowToggle).toBeInTheDocument();
    });
  });
});
