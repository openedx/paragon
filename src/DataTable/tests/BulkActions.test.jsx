import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

const FIRST_ACTION = 'First Action';
const SECOND_ACTION = 'Second Action';

function FirstAction({
  // eslint-disable-next-line react/prop-types
  as: Component, onClick, className, ...rest
}) {
  return (
    <Component
      variant="brand"
      className={classNames('class1', className)}
      onClick={onClick}
      {...rest}
    >
      {FIRST_ACTION}
    </Component>
  );
}

// eslint-disable-next-line react/prop-types
function SecondAction({ onClick, className, ...rest }) {
  return (
    <Button
      variant="outline-primary"
      className={classNames('class2', className)}
      onClick={onClick}
      {...rest}
    >
      {SECOND_ACTION}
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
      render(<BulkActionsWrapper value={{ ...instance, bulkActions: myFunction }} />);
      const button = screen.getByText('Some Button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('with one action', () => {
    it('displays the primary button as a brand button', () => {
      render(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [<FirstAction data-testid="brand" />] }}
        />,
      );
      const button = screen.getByTestId('brand');
      expect(button).toBeInTheDocument();
    });
  });

  describe('with two actions', () => {
    beforeEach(() => {
      render(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: twoActions }}
        />,
      );
    });

    it('displays the user\'s first button as a brand button', () => {
      expect(screen.getAllByRole('button').length).toEqual(2);
      expect(screen.getAllByRole('button')[1].textContent).toBe(FIRST_ACTION);
    });

    it('displays the user\'s second button as an outline button', () => {
      expect(screen.getAllByRole('button')[0].textContent).toBe(SECOND_ACTION);
    });

    it('reverses the button order so that the primary button is on the right', () => {
      expect(screen.getAllByRole('button')[1].textContent).toBe(FIRST_ACTION);
      expect(screen.getAllByRole('button')[0].textContent).toBe(SECOND_ACTION);
    });
  });

  describe('controlled table selections', () => {
    it('passed correct number of selected rows', () => {
      render(
        <BulkActionsWrapper value={{ ...instance, bulkActions: [<FirstAction />] }} />,
      );
      const button = screen.getByText(FIRST_ACTION);
      expect(button).toBeInTheDocument();
    });
    it('handles action on click with full table selection (all rows across all pages)', async () => {
      const onClickSpy = jest.fn();
      render(
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
      const button = screen.getAllByRole('button')[1];
      await userEvent.click(button);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('two actions on click', () => {
    it('performs the primary button action on click', async () => {
      const onClickSpy = jest.fn();
      render(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [<FirstAction onClick={onClickSpy} />, <SecondAction />] }}
        />,
      );
      const button = screen.getAllByRole('button')[1];
      await userEvent.click(button);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('performs the second button action on click', async () => {
      const onClickSpy = jest.fn();
      render(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [<FirstAction />, <SecondAction onClick={onClickSpy} />] }}
        />,
      );
      const button = screen.getAllByRole('button')[0];
      await userEvent.click(button);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('with more than two actions', () => {
    it('displays the user\'s first button as a brand button', () => {
      render(<BulkActionsWrapper />);
      const buttons = screen.getAllByTestId('action');
      expect(buttons.length).toEqual(2);
      expect(buttons[1].textContent).toBe(FIRST_ACTION);
    });

    it('displays the user\'s second button as an outline button', () => {
      const { container } = render(<BulkActionsWrapper />);
      waitForComponentToPaint(container);
      const buttons = screen.getAllByTestId('action');
      expect(buttons[0].textContent).toBe(SECOND_ACTION);
    });

    describe('overflow menu', () => {
      const onClickSpy = jest.fn();
      const itemTestId = 'itemTestId';
      beforeEach(async () => {
        render(
          <BulkActionsWrapper
            value={{
              ...instance,
              bulkActions: [...instance.bulkActions, <FirstAction onClick={onClickSpy} data-testid={itemTestId} />],
            }}
          />,
        );
        // the overflow toggle button is the first button
        await userEvent.click(screen.getByRole('button', { name: ACTION_OVERFLOW_BUTTON_TEXT }));
      });
      afterEach(() => {
        onClickSpy.mockClear();
      });
      it('displays additional actions in a ModalPopup', async () => {
        const actionItems = screen.getAllByRole('button');
        // subtract two for the two main buttons that aren't in the overflow menu
        expect(actionItems.length).toEqual(4);
      });
      it('performs actions when overflow items are clicked', async () => {
        const item = screen.getByTestId(itemTestId);
        await userEvent.click(item);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
      });
      it('passes the class names to the dropdown item', () => {
        const item = screen.getByTestId(itemTestId);
        expect(item).toBeInTheDocument();
      });
    });
  });

  describe('small screen', () => {
    const actions = [[[<FirstAction />]], [[<FirstAction />, <SecondAction />]], [instance.bulkActions]];
    test.each(actions)('puts all actions in a dropdown %#', async (testActions) => {
      useWindowSize.mockReturnValue({ width: 500 });
      const { container } = render(<BulkActionsWrapper value={{ ...instance, bulkActions: testActions }} />);
      const button = screen.getByRole('button', { name: SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT });
      expect(button).toBeInTheDocument();
      expect(container.textContent).not.toContain(FIRST_ACTION);
      await userEvent.click(button);
      expect(container.textContent.length).toBeGreaterThan(0);
    });
    it('renders the correct alt text for the dropdown', () => {
      useWindowSize.mockReturnValue({ width: 500 });
      render(<BulkActionsWrapper />);
      const overflowToggle = screen.getByRole('button', { name: SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT });
      expect(overflowToggle).toBeInTheDocument();
    });
  });
});
