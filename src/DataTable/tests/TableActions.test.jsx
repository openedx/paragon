import React from 'react';
import { mount } from 'enzyme';

import TableActions from '../TableActions';
import { DROPDOWN_BUTTON_TEXT, SMALL_SCREEN_DROPDOWN_BUTTON_TEXT } from '../CollapsibleButtonGroup';
import {
  useWindowSize, Dropdown, Button, Icon,
} from '../..';
import DataTableContext from '../DataTableContext';

jest.mock('../../hooks/useWindowSize');
useWindowSize.mockReturnValue({ width: 800 });

const firstAction = {
  buttonText: 'Primary action',
  handleClick: () => {},
  className: 'class1',
};

const secondAction = {
  buttonText: 'Secondary action',
  handleClick: () => {},
  className: 'class2',
};

const twoActions = [
  firstAction,
  secondAction,
];

const buttonFunction = () => <Button>foo</Button>;

const instance = {
  randomInstanceVar: 'foo',
  tableActions: [
    ...twoActions,
    {
      buttonText: 'Extra1',
      handleClick: () => {},
      className: 'extra3',
    },
    {
      buttonText: 'Extra2',
      handleClick: () => {},
      className: 'extra2',
    },
    {
      buttonText: 'Extra3',
      handleClick: () => {},
      className: 'disabledTest',
      disabled: true,
    },
  ],
  controlledTableSelections: [
    {
      isEntireTableSelected: false,
      selectedRows: [],
    },
    jest.fn(),
  ],
  rows: [],
};

// eslint-disable-next-line react/prop-types
const TableActionsWrapper = ({ value = instance }) => (
  <DataTableContext.Provider value={value}><TableActions /></DataTableContext.Provider>);

describe('<TableActions />', () => {
  describe('with one action', () => {
    it('displays the primary button as an outline button', () => {
      const wrapper = mount(<TableActionsWrapper value={{ ...instance, tableActions: [firstAction] }} />);
      const button = wrapper.find(Button);
      expect(button.length).toEqual(1);
      expect(button.props().variant).toEqual('outline-primary');
    });
    it('displays the primary action with the user\'s variant', () => {
      const variant = 'my-variant';
      const wrapper = mount(
        <TableActionsWrapper value={{ ...instance, tableActions: [{ ...firstAction, variant }] }} />,
      );
      const button = wrapper.find(Button);
      expect(button.props().variant).toEqual(variant);
    });
    it('passes button classnames', () => {
      const wrapper = mount(<TableActionsWrapper value={{ ...instance, tableActions: [firstAction] }} />);
      const button = wrapper.find(Button);
      expect(button.props().className).toContain(firstAction.className);
    });
    it('disables the button', () => {
      const wrapper = mount(
        <TableActionsWrapper value={{ ...instance, tableActions: [{ ...firstAction, disabled: true }] }} />,
      );
      const button = wrapper.find(Button);
      expect(button.props().disabled).toEqual(true);
    });
    it('performs the button action on click', () => {
      const onClickSpy = jest.fn();
      const tableInstance = { ...instance, tableActions: [{ ...firstAction, handleClick: onClickSpy }] };
      const wrapper = mount(
        <TableActionsWrapper value={tableInstance} />,
      );
      const button = wrapper.find('button');
      expect(button.length).toEqual(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
      expect(onClickSpy).toHaveBeenCalledWith({
        selectedRows: [],
        tableInstance: expect.any(Object),
      });
    });
  });
  describe('with two actions', () => {
    const wrapper = mount(<TableActionsWrapper value={{ ...instance, tableActions: twoActions }} />);
    it('displays the user\'s first button as an brand button', () => {
      const buttons = wrapper.find(Button);
      expect(buttons.length).toEqual(2);
      expect(buttons.get(1).props.variant).toEqual('brand');
    });
    it('displays the user\'s second button as an outline button', () => {
      const buttons = wrapper.find(Button);
      expect(buttons.get(0).props.variant).toEqual('outline-primary');
    });
    it('reverses the button order so that the primary button is on the right', () => {
      const buttons = wrapper.find(Button);
      expect(buttons.at(0).text()).toEqual(twoActions[1].buttonText);
      expect(buttons.at(1).text()).toEqual(twoActions[0].buttonText);
    });
    it('passes button classnames', () => {
      const buttons = wrapper.find(Button);
      expect(buttons.at(0).props().className).toContain(twoActions[1].className);
      expect(buttons.at(1).props().className).toContain(twoActions[0].className);
    });
  });
  describe('two actions on click', () => {
    it('performs the primary button action on click', () => {
      const onClickSpy = jest.fn();
      const tableInstance = { ...instance, tableActions: [{ ...firstAction, handleClick: onClickSpy }, secondAction] };
      const wrapper = mount(<TableActionsWrapper value={tableInstance} />);
      const button = wrapper.find(Button).at(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
      expect(onClickSpy).toHaveBeenCalledWith({
        selectedRows: [],
        tableInstance: expect.any(Object),
      });
    });
    it('performs the second button action on click', () => {
      const onClickSpy = jest.fn();
      const tableInstance = { ...instance, tableActions: [firstAction, { ...secondAction, handleClick: onClickSpy }] };
      const wrapper = mount(<TableActionsWrapper value={tableInstance} />);
      const button = wrapper.find(Button).at(0);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
      expect(onClickSpy).toHaveBeenCalledWith({
        selectedRows: [],
        tableInstance: expect.any(Object),
      });
    });
  });
  describe('with more than two actions', () => {
    it('displays the user\'s first button as an brand button', () => {
      const wrapper = mount(<TableActionsWrapper />);
      const buttons = wrapper.find(Button);
      expect(buttons.length).toEqual(3);
      expect(buttons.get(2).props.variant).toEqual('brand');
    });
    it('displays the user\'s second button as an outline button', () => {
      const wrapper = mount(<TableActionsWrapper />);
      const buttons = wrapper.find(Button);
      expect(buttons.get(1).props.variant).toEqual('outline-primary');
    });
    describe('dropdown', () => {
      const onClickSpy = jest.fn();
      const itemClassName = 'itemClickTest';
      const itemText = 'Yet another action';
      let tableInstance;
      let wrapper;
      let dropdownButton;
      beforeEach(() => {
        tableInstance = {
          ...instance,
          // eslint-disable-next-line max-len
          tableActions: [...instance.tableActions, { buttonText: itemText, handleClick: onClickSpy, className: itemClassName }],
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
        const icon = wrapper.find(Icon);
        expect(icon.props().screenReaderText).toEqual(DROPDOWN_BUTTON_TEXT);
        const actionItems = wrapper.find(Dropdown.Item);
        // we subtract two for the two main buttons that aren't in the dropdown
        expect(actionItems.length).toEqual(4);
      });
      it('performs actions when dropdown items are clicked', () => {
        wrapper.find(`a.${itemClassName}`).simulate('click');
        expect(onClickSpy).toHaveBeenCalledTimes(1);
        expect(onClickSpy).toHaveBeenCalledWith({
          selectedRows: [],
          tableInstance: expect.any(Object),
        });
      });
      it('displays the action text', () => {
        const item = wrapper.find(`a.${itemClassName}`);
        expect(item.text()).toEqual(itemText);
      });
      it('passes the class names to the dropdown item', () => {
        const item = wrapper.find(`a.${itemClassName}`);
        expect(item.length).toEqual(1);
      });
      it('disables actions', () => {
        // This should be the Dropdown.Item
        const item = wrapper.find('.disabledTest').first();
        expect(item.props().disabled).toEqual(true);
      });
    });
  });

  describe('small screen', () => {
    const actions = [[[firstAction]], [[firstAction, secondAction]], [instance.tableActions]];
    test.each(actions)('puts all actions in a dropdown %#', (testActions) => {
      useWindowSize.mockReturnValue({ width: 500 });
      const wrapper = mount(<TableActionsWrapper value={{ ...instance, tableActions: testActions }} />);
      const button = wrapper.find(Icon);
      expect(button.length).toEqual(1);
      expect(wrapper.text()).not.toContain(firstAction.buttonText);
      const buttons = wrapper.find('button');
      expect(buttons.length).toEqual(1);
      const dropdownButton = buttons.at(0);
      dropdownButton.simulate('click');
      wrapper.update();
      testActions.forEach((action) => {
        expect(wrapper.text()).toContain(action.buttonText);
      });
    });
    it('renders the correct alt text for the dropdown', () => {
      useWindowSize.mockReturnValue({ width: 500 });
      const wrapper = mount(<TableActionsWrapper />);
      const icon = wrapper.find(Icon);
      expect(icon.props().screenReaderText).toEqual(SMALL_SCREEN_DROPDOWN_BUTTON_TEXT);
    });
  });

  describe('with function', () => {
    it('passed correct number of selected rows', () => {
      const wrapper = mount(<TableActionsWrapper value={{ ...instance, tableActions: buttonFunction }} />);
      const button = wrapper.find(Button);
      expect(button.length).toEqual(1);
      expect(button.text()).toEqual('foo');
    });
  });
});
