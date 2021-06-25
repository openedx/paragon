import React from 'react';
import { mount } from 'enzyme';

import BulkActions from '../BulkActions';
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
  bulkActions: [
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
};

// eslint-disable-next-line react/prop-types
const BulkActionsWrapper = ({ value = instance }) => (
  <DataTableContext.Provider value={value}><BulkActions /></DataTableContext.Provider>);

describe('<BulkActions />', () => {
  describe('with one action', () => {
    it('displays the primary button as an outline button', () => {
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: [firstAction] }} />);
      const button = wrapper.find(Button);
      expect(button.length).toEqual(1);
      expect(button.props().variant).toEqual('outline-primary');
    });
    it('displays the primary action with the user\'s variant', () => {
      const variant = 'my-variant';
      const wrapper = mount(
        <BulkActionsWrapper value={{ ...instance, bulkActions: [{ ...firstAction, variant }] }} />,
      );
      const button = wrapper.find(Button);
      expect(button.props().variant).toEqual(variant);
    });
    it('passes button classnames', () => {
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: [firstAction] }} />);
      const button = wrapper.find(Button);
      expect(button.props().className).toContain(firstAction.className);
    });
    it('disables the button', () => {
      const wrapper = mount(
        <BulkActionsWrapper value={{ ...instance, bulkActions: [{ ...firstAction, disabled: true }] }} />,
      );
      const button = wrapper.find(Button);
      expect(button.props().disabled).toEqual(true);
    });
    it('performs the button action on click', () => {
      const onClickSpy = jest.fn();
      const wrapper = mount(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [{ ...firstAction, handleClick: onClickSpy }] }}
        />,
      );
      const button = wrapper.find('button');
      expect(button.length).toEqual(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
      expect(onClickSpy).toHaveBeenCalledWith({
        selectedRows: selectedFlatRows,
      });
    });
  });
  describe('with two actions', () => {
    const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: twoActions }} />);
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
  describe('controlled table selections', () => {
    it('handles action on click with full table selection (all rows across all pages)', () => {
      const onClickSpy = jest.fn();
      const wrapper = mount(
        <BulkActionsWrapper
          value={{
            ...instance,
            bulkActions: [{ ...firstAction, handleClick: onClickSpy }, secondAction],
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
      const button = wrapper.find(Button).at(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
      expect(onClickSpy).toHaveBeenCalledWith({
        isEntireTableSelected: true,
        selectedRows: selectedFlatRows,
      });
    });
  });
  describe('two actions on click', () => {
    it('performs the primary button action on click', () => {
      const onClickSpy = jest.fn();
      const wrapper = mount(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [{ ...firstAction, handleClick: onClickSpy }, secondAction] }}
        />,
      );
      const button = wrapper.find(Button).at(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
      expect(onClickSpy).toHaveBeenCalledWith({
        selectedRows: selectedFlatRows,
      });
    });
    it('performs the second button action on click', () => {
      const onClickSpy = jest.fn();
      const wrapper = mount(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [firstAction, { ...secondAction, handleClick: onClickSpy }] }}
        />,
      );
      const button = wrapper.find(Button).at(0);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
      expect(onClickSpy).toHaveBeenCalledWith({
        selectedRows: selectedFlatRows,
      });
    });
  });
  describe('with more than two actions', () => {
    it('displays the user\'s first button as an brand button', () => {
      const wrapper = mount(<BulkActionsWrapper />);
      const buttons = wrapper.find(Button);
      expect(buttons.length).toEqual(3);
      expect(buttons.get(2).props.variant).toEqual('brand');
    });
    it('displays the user\'s second button as an outline button', () => {
      const wrapper = mount(<BulkActionsWrapper />);
      const buttons = wrapper.find(Button);
      expect(buttons.get(1).props.variant).toEqual('outline-primary');
    });
    describe('dropdown', () => {
      const onClickSpy = jest.fn();
      const itemClassName = 'itemClickTest';
      const itemText = 'Yet another action';
      let wrapper;
      let dropdownButton;
      beforeEach(() => {
        wrapper = mount(
          <BulkActionsWrapper
            value={{
              ...instance,
              // eslint-disable-next-line max-len
              bulkActions: [...instance.bulkActions, { buttonText: itemText, handleClick: onClickSpy, className: itemClassName }],
            }}
          />,
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
          selectedRows: selectedFlatRows,
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
    const actions = [[[firstAction]], [[firstAction, secondAction]], [instance.bulkActions]];
    test.each(actions)('puts all actions in a dropdown %#', (testActions) => {
      useWindowSize.mockReturnValue({ width: 500 });
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: testActions }} />);
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
      const wrapper = mount(<BulkActionsWrapper />);
      const icon = wrapper.find(Icon);
      expect(icon.props().screenReaderText).toEqual(SMALL_SCREEN_DROPDOWN_BUTTON_TEXT);
    });
  });
});
