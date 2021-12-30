import React from 'react';
import { mount } from 'enzyme';

import TableActions from '../TableActions';
import { DROPDOWN_BUTTON_TEXT, SMALL_SCREEN_DROPDOWN_BUTTON_TEXT } from '../CollapsibleButtonGroup';
import {
  useWindowSize, Dropdown, Button, IconButton,
} from '../..';
import DataTableContext from '../DataTableContext';

jest.mock('../../hooks/useWindowSize');
useWindowSize.mockReturnValue({ width: 800 });

const firstAction = ({ as }) => React.createElement(
  as || Button,
  {
    key: 'First Action',
    onClick: () => {},
    className: 'class1',
  },
  'First Action',
);

const secondAction = ({ as }) => React.createElement(
  as || Button,
  {
    key: 'Second Action',
    onClick: () => {},
    className: 'class2',
    variant: 'brand',
  },
  'Second Action',
);

const selectedFlatRows = [{ id: 1 }, { id: 2 }];

const twoActions = [
  firstAction,
  secondAction,
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
    ({ as }) => React.createElement(
      as || Button,
      { key: 'action1' },
      'Extra 1',
    ),
    ({ as }) => React.createElement(
      as || Button,
      { key: 'action2' },
      'Extra 2',
    ),
    ({ as }) => React.createElement(
      as || Button,
      { key: 'action3' },
      'Extra 3',
    ),
  ],
};

// eslint-disable-next-line react/prop-types
const TableActionsWrapper = ({ value = instance }) => (
  <DataTableContext.Provider value={value}><TableActions /></DataTableContext.Provider>);

describe('<TableActions />', () => {
  describe('with one action', () => {
    it('displays the primary action with the user\'s variant', () => {
      const variant = 'my-variant';
      const action = ({ as }) => React.createElement(
        as || Button,
        { variant, key: 'action1' },
        'Extra 1',
      );
      const wrapper = mount(
        <TableActionsWrapper value={{ ...instance, tableActions: [action] }} />,
      );
      const button = wrapper.find(Button);
      expect(button.props().variant).toEqual(variant);
    });
    it('passes button classnames', () => {
      const customClass = 'class1';
      const action = ({ as }) => React.createElement(
        as || Button,
        { className: customClass, key: 'action1' },
        'Extra 1',
      );
      const wrapper = mount(<TableActionsWrapper value={{ ...instance, tableActions: [action] }} />);
      const button = wrapper.find(Button);
      expect(button.props().className).toContain(customClass);
    });
    it('disables the button', () => {
      const action = ({ as }) => React.createElement(
        as || Button,
        { disabled: true, key: 'action1' },
        'Extra 1',
      );
      const wrapper = mount(
        <TableActionsWrapper value={{ ...instance, tableActions: [action] }} />,
      );
      const button = wrapper.find(Button);
      expect(button.props().disabled).toEqual(true);
    });
    it('performs the button action on click', () => {
      const onClickSpy = jest.fn();
      const action = ({ as }) => React.createElement(
        as || Button,
        { onClick: onClickSpy, key: 'action1' },
        'Extra 1',
      );
      const tableInstance = { ...instance, tableActions: [action] };
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
      expect(buttons.get(0).props.variant).toEqual('brand');
    });
    it('displays the user\'s second button as an outline button', () => {
      const buttons = wrapper.find(Button);
      expect(buttons.get(1).props.variant).toEqual('primary');
    });
    it('reverses the button order so that the primary button is on the right', () => {
      const buttons = wrapper.find(Button);
      expect(buttons.get(1).props.variant).toEqual('primary');
      expect(buttons.get(0).props.variant).toEqual('brand');
    });
  });
  describe('two actions on click', () => {
    it('performs the primary button action on click', () => {
      const onClickSpy = jest.fn();
      const action = ({ as }) => React.createElement(
        as || Button,
        { onClick: onClickSpy, key: 'action1' },
        'Extra 1',
      );
      const tableInstance = { ...instance, tableActions: [action, secondAction] };
      const wrapper = mount(<TableActionsWrapper value={tableInstance} />);
      const button = wrapper.find(Button).at(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('performs the second button action on click', () => {
      const onClickSpy = jest.fn();
      const action = ({ as }) => React.createElement(
        as || Button,
        { onClick: onClickSpy },
        'Extra 1',
      );
      const tableInstance = { ...instance, tableActions: [firstAction, action] };
      const wrapper = mount(<TableActionsWrapper value={tableInstance} />);
      const button = wrapper.find(Button).at(0);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('with more than two actions', () => {
    it('displays the user\'s first button as an brand button', () => {
      const wrapper = mount(<TableActionsWrapper />);
      const buttons = wrapper.find(Button);
      expect(buttons.length).toEqual(2);
      expect(buttons.get(1).props.variant).toEqual('primary');
    });
    it('displays the user\'s second button as an outline button', () => {
      const wrapper = mount(<TableActionsWrapper />);
      const buttons = wrapper.find(Button);
      expect(buttons.get(0).props.variant).toEqual('brand');
    });
    describe('dropdown', () => {
      const onClickSpy = jest.fn();
      const itemClassName = 'itemClickTest';
      const itemText = 'Yet another action';
      let tableInstance;
      let wrapper;
      let dropdownButton;
      beforeEach(() => {
        const action = ({ as }) => React.createElement(
          as || Button,
          { onClick: onClickSpy, className: itemClassName, key: 'action0' },
          itemText,
        );
        tableInstance = {
          ...instance,
          tableActions: [...instance.tableActions, action],
        };
        wrapper = mount(
          <TableActionsWrapper value={tableInstance} />,
        );
        // the dropdown menu is the first button
        dropdownButton = wrapper.find('button').at(0);
        dropdownButton.simulate('click');
      });
      afterEach(() => {
        onClickSpy.mockClear();
      });
      it('displays additional actions in a dropdown', () => {
        const dropdownToggle = wrapper.find('DropdownToggle');
        expect(dropdownToggle.props().alt).toEqual(DROPDOWN_BUTTON_TEXT);
        const actionItems = wrapper.find(Dropdown.Item);
        // we subtract two for the two main buttons that aren't in the dropdown
        expect(actionItems.length).toEqual(4);
      });
      it('performs actions when dropdown items are clicked', () => {
        wrapper.find(`a.${itemClassName}`).simulate('click');
        expect(onClickSpy).toHaveBeenCalledTimes(1);
      });
      it('displays the action text', () => {
        const item = wrapper.find(`a.${itemClassName}`);
        expect(item.text()).toEqual(itemText);
      });
      it('passes the class names to the dropdown item', () => {
        const item = wrapper.find(`a.${itemClassName}`);
        expect(item.length).toEqual(1);
      });
    });
  });
  describe('small screen', () => {
    const actions = [[[firstAction]], [[firstAction, secondAction]], [instance.tableActions]];
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
      const dropdownToggle = wrapper.find('DropdownToggle');
      expect(dropdownToggle.props().alt).toEqual(SMALL_SCREEN_DROPDOWN_BUTTON_TEXT);
    });
  });
});
