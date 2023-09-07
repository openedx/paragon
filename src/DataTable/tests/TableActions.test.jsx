import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import classNames from 'classnames';
import TableActions from '../TableActions';
import {
  ACTION_OVERFLOW_BUTTON_TEXT, SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT,
} from '../CollapsibleButtonGroup';
import {
  useWindowSize,
  Button,
} from '../..';
import DataTableContext from '../DataTableContext';

jest.mock('../../hooks/useWindowSize');
useWindowSize.mockReturnValue({ width: 800 });

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
      First Action
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
      Second Action
    </Button>
  );
}

// eslint-disable-next-line react/prop-types
function ExtraAction({ text }) {
  return (
    <Button data-testid="extra-action-btn">
      {`Extra Action ${text}`}
    </Button>
  );
}

const selectedFlatRows = [{ id: 1 }, { id: 2 }];

const twoActions = [
  <FirstAction data-testid="action-btn" />,
  <SecondAction data-testid="action-btn" />,
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
  tableActions: [
    ...twoActions,
    <ExtraAction text="1" />,
    <ExtraAction text="2" />,
    <ExtraAction text="3" />,
  ],
};

// eslint-disable-next-line react/prop-types
function TableActionsWrapper({ value = instance }) {
  return (
    <DataTableContext.Provider value={value}>
      <TableActions />
    </DataTableContext.Provider>
  );
}

describe('<TableActions />', () => {
  describe('with functional rendering', () => {
    it('renders the function', () => {
      const myFunction = () => <Button>Some Button</Button>;
      render(<TableActionsWrapper value={{ ...instance, tableActions: myFunction }} />);
      const button = screen.getByText('Some Button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('with one action', () => {
    it('performs the button action on click', () => {
      const onClickSpy = jest.fn();
      const tableInstance = { ...instance, tableActions: [<FirstAction onClick={onClickSpy} />] };
      render(<TableActionsWrapper value={tableInstance} />);
      const button = screen.getByText('First Action');
      fireEvent.click(button);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('with two actions', () => {
    it('displays the user\'s first button as a brand button', () => {
      render(<TableActionsWrapper value={{ ...instance, tableActions: twoActions }} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toEqual(2);
      expect(buttons[0]).toHaveClass('btn-outline-primary');
    });

    it('displays the user\'s second button as an outline button', () => {
      render(<TableActionsWrapper value={{ ...instance, tableActions: twoActions }} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons[1]).toHaveClass('btn-brand');
    });

    it('reverses the button order so that the primary button is on the right', () => {
      render(<TableActionsWrapper value={{ ...instance, tableActions: twoActions }} />);
      const buttons = screen.getAllByRole('button');
      expect(buttons[0]).toHaveClass('btn-outline-primary');
      expect(buttons[1]).toHaveClass('btn-brand');
    });
  });

  describe('two actions on click', () => {
    it('performs the primary button action on click', () => {
      const onClickSpy = jest.fn();
      const tableInstance = { ...instance, tableActions: [<FirstAction onClick={onClickSpy} />, <SecondAction />] };
      render(<TableActionsWrapper value={tableInstance} />);
      const button = screen.getByText('First Action');
      fireEvent.click(button);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });

    it('performs the second button action on click', () => {
      const onClickSpy = jest.fn();
      const tableInstance = { ...instance, tableActions: [<FirstAction />, <SecondAction onClick={onClickSpy} />] };
      render(<TableActionsWrapper value={tableInstance} />);
      const button = screen.getByText('Second Action');
      fireEvent.click(button);
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('with more than two actions', () => {
    it('displays the user\'s first button as a brand button', () => {
      render(<TableActionsWrapper />);
      const buttons = screen.getAllByTestId('action-btn');
      expect(buttons.length).toEqual(2);
      expect(buttons[1]).toHaveClass('btn-brand');
    });

    it('displays the user\'s second button as an outline button', () => {
      render(<TableActionsWrapper />);
      const buttons = screen.getAllByTestId('action-btn');
      expect(buttons[0]).toHaveClass('btn-outline-primary');
    });

    describe('overflow menu', () => {
      const onClickSpy = jest.fn();
      const itemClassName = 'itemClickTest';
      const tableInstance = {
        ...instance,
        tableActions: [
          ...instance.tableActions,
          <FirstAction
            onClick={onClickSpy}
            className={itemClassName}
            data-testid="extra-first-action"
          />,
        ],
      };

      beforeEach(async () => {
        render(<TableActionsWrapper value={tableInstance} />);
        // the overflow toggle button is the first button
        const overflowButton = screen.getByRole('button', { name: ACTION_OVERFLOW_BUTTON_TEXT });
        await userEvent.click(overflowButton);
      });

      afterEach(() => {
        onClickSpy.mockClear();
      });

      it('displays additional actions in a ModalPopup', () => {
        const actionItems = screen.getAllByRole('button');
        expect(actionItems.length).toEqual(4);
      });

      it('performs actions when dropdown items are clicked', async () => {
        const item = screen.getByTestId('extra-first-action');
        await userEvent.click(item);
        expect(onClickSpy).toHaveBeenCalledTimes(1);
      });

      it('passes the class names to the dropdown item', () => {
        const item = screen.getByTestId('extra-first-action');
        expect(item).toHaveClass(itemClassName);
      });
    });
  });

  describe('small screen', () => {
    const actions = [[[<FirstAction />]], [[<FirstAction />, <SecondAction />]], [instance.tableActions]];

    test.each(actions)('puts all actions in a dropdown %#', (testActions) => {
      useWindowSize.mockReturnValue({ width: 500 });
      render(<TableActionsWrapper value={{ ...instance, tableActions: testActions }} />);
      const overflowToggle = screen.getByRole('button', { name: SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT });
      expect(overflowToggle).toBeInTheDocument();

      userEvent.click(overflowToggle);

      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(1);
    });

    it('renders the correct alt text for the dropdown', () => {
      useWindowSize.mockReturnValue({ width: 500 });
      render(<TableActionsWrapper />);
      const overflowToggle = screen.getByRole('button', { name: SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT });
      expect(overflowToggle).toBeInTheDocument();
    });
  });
});
