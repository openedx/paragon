import React from 'react';
import { mount } from 'enzyme';
import classNames from 'classnames';

import { waitFor } from '@testing-library/react';
import TableActions from '../TableActions';
import {
  ACTION_OVERFLOW_BUTTON_TEXT, SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT,
} from '../CollapsibleButtonGroup';
import {
  useWindowSize,
  Button,
  IconButton,
  ModalPopup,
} from '../..';
import DataTableContext from '../DataTableContext';
import { waitForComponentToPaint } from './utils';

jest.mock('../../hooks/useWindowSize');
useWindowSize.mockReturnValue({ width: 800 });

// eslint-disable-next-line react/prop-types
function FirstAction({ as: Component, onClick, className }) {
  return (
    <Component variant="brand" className={classNames('class1', className)} onClick={onClick}>
      First Action
    </Component>
  );
}

// eslint-disable-next-line react/prop-types
function SecondAction({ onClick, className }) {
  return (
    <Button variant="outline-primary" className={classNames('class2', className)} onClick={onClick}>
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
  <FirstAction />,
  <SecondAction />,
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
      const wrapper = mount(<TableActionsWrapper value={{ ...instance, tableActions: myFunction }} />);
      const button = wrapper.find(Button);
      expect(button.length).toEqual(1);
    });
  });
  describe('with one action', () => {
    it('performs the button action on click', () => {
      const onClickSpy = jest.fn();
      const tableInstance = { ...instance, tableActions: [<FirstAction onClick={onClickSpy} />] };
      const wrapper = mount(
        <TableActionsWrapper value={tableInstance} />,
      );
      const button = wrapper.find('button');
      expect(button.length).toEqual(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('with two actions', () => {
    const wrapper = mount(<TableActionsWrapper value={{ ...instance, tableActions: twoActions }} />);
    it('displays the user\'s first button as an brand button', () => {
      const buttons = wrapper.find(Button);
      expect(buttons.length).toEqual(2);
      expect(buttons.get(0).props.variant).toEqual('outline-primary');
    });
    it('displays the user\'s second button as an outline button', () => {
      const buttons = wrapper.find(Button);
      expect(buttons.get(1).props.variant).toEqual('brand');
    });
    it('reverses the button order so that the primary button is on the right', () => {
      const buttons = wrapper.find(Button);
      expect(buttons.get(1).props.variant).toEqual('brand');
      expect(buttons.get(0).props.variant).toEqual('outline-primary');
    });
  });
  describe('two actions on click', () => {
    it('performs the primary button action on click', () => {
      const onClickSpy = jest.fn();
      const tableInstance = { ...instance, tableActions: [<FirstAction onClick={onClickSpy} />, <SecondAction />] };
      const wrapper = mount(<TableActionsWrapper value={tableInstance} />);
      const button = wrapper.find(Button).at(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('performs the second button action on click', () => {
      const onClickSpy = jest.fn();
      const tableInstance = { ...instance, tableActions: [<FirstAction />, <SecondAction onClick={onClickSpy} />] };
      const wrapper = mount(<TableActionsWrapper value={tableInstance} />);
      const button = wrapper.find(Button).at(0);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('with more than two actions', () => {
    it('displays the user\'s first button as an brand button', () => {
      const wrapper = mount(<TableActionsWrapper />);
      waitForComponentToPaint(wrapper);
      const buttons = wrapper.find(Button);
      expect(buttons.length).toEqual(2);
      expect(buttons.get(1).props.variant).toEqual('brand');
    });
    it('displays the user\'s second button as an outline button', async () => {
      await waitFor(() => {
        const wrapper = mount(<TableActionsWrapper />);
        const buttons = wrapper.find(Button);
        expect(buttons.get(0).props.variant).toEqual('outline-primary');
      });
    });
    describe('overflow menu', () => {
      const onClickSpy = jest.fn();
      const itemClassName = 'itemClickTest';
      let tableInstance;
      let wrapper;
      let overflowButton;
      beforeEach(async () => {
        tableInstance = {
          ...instance,
          tableActions: [...instance.tableActions, <FirstAction onClick={onClickSpy} className={itemClassName} />],
        };
        wrapper = mount(
          <TableActionsWrapper value={tableInstance} />,
        );
        await waitFor(() => {
          // the overflow toggle button is the first button
          overflowButton = wrapper.find(IconButton);
          overflowButton.simulate('click');
        });
      });
      afterEach(() => {
        onClickSpy.mockClear();
      });
      it('displays additional actions in a ModalPopup', () => {
        const overflowToggle = wrapper.find(IconButton);
        expect(overflowToggle.props().alt).toEqual(ACTION_OVERFLOW_BUTTON_TEXT);
        const actionItems = wrapper.find(ModalPopup).find('button');
        // we subtract two for the two main buttons that aren't in the dropdown
        expect(actionItems.length).toEqual(4);
      });
      it('performs actions when dropdown items are clicked', () => {
        wrapper.find(`button.${itemClassName}`).simulate('click');
        expect(onClickSpy).toHaveBeenCalledTimes(1);
      });
      it('passes the class names to the dropdown item', () => {
        const item = wrapper.find(`button.${itemClassName}`);
        expect(item.length).toEqual(1);
      });
    });
  });
  describe('small screen', () => {
    const actions = [[[<FirstAction />]], [[<FirstAction />, <SecondAction />]], [instance.tableActions]];
    test.each(actions)('puts all actions in a dropdown %#', (testActions) => {
      useWindowSize.mockReturnValue({ width: 500 });
      const wrapper = mount(<TableActionsWrapper value={{ ...instance, tableActions: testActions }} />);
      const iconButton = wrapper.find(IconButton);
      expect(iconButton.length).toEqual(1);
      const wrapperText = wrapper.text();
      const buttons = wrapper.find('button');
      expect(buttons.length).toEqual(1);
      const dropdownButton = buttons.at(0);
      dropdownButton.simulate('click');
      wrapper.update();
      expect(wrapper.text()).not.toEqual(wrapperText);
    });
    it('renders the correct alt text for the dropdown', () => {
      useWindowSize.mockReturnValue({ width: 500 });
      const wrapper = mount(<TableActionsWrapper />);
      const overflowToggle = wrapper.find(IconButton);
      expect(overflowToggle.props().alt).toEqual(SMALL_SCREEN_ACTION_OVERFLOW_BUTTON_TEXT);
    });
  });
});
