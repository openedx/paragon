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

const firstAction = ({ as }) => React.createElement(
  as || Button,
  {
    key: 'First Action',
    onClick: () => {},
    className: 'class1',
    variant: 'brand',
  },
  'First Action',
);

const secondAction = ({ as }) => React.createElement(
  as || Button,
  {
    key: 'Second Action',
    onClick: () => {},
    className: 'class2',
    variant: 'outline-primary',
  },
  'Second Action',
);

const selectedFlatRows = [{ id: 1 }, { id: 2 }];

const twoActions = [
  firstAction,
  secondAction,
];

const buttonFunction = ({ as, selectedFlatRows: selectedRows }) => React.createElement(
  as || Button,
  {
    key: 'buttonFunction',
    onClick: () => {},
    className: 'class2',
  },
  selectedRows.length,
);

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
    ({ as }) => React.createElement(
      as || Button,
      {},
      'Extra 1',
    ),
    ({ as }) => React.createElement(
      as || Button,
      {},
      'Extra 2',
    ),
    ({ as }) => React.createElement(
      as || Button,
      {},
      'Extra 3',
    ),
  ],
};

// eslint-disable-next-line react/prop-types
const BulkActionsWrapper = ({ value = instance }) => (
  <DataTableContext.Provider value={value}><BulkActions /></DataTableContext.Provider>);

describe('<BulkActions />', () => {
  describe('with one action', () => {
    it('displays the primary button as an brand button', () => {
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: [firstAction] }} />);
      const button = wrapper.find(Button);
      expect(button.length).toEqual(1);
      expect(button.props().variant).toEqual('brand');
    });
    it('displays the primary action with the user\'s variant', () => {
      const variant = 'my-variant';
      const action = ({ as }) => React.createElement(
        as || Button,
        { variant },
        'Extra 1',
      );
      const wrapper = mount(
        <BulkActionsWrapper value={{ ...instance, bulkActions: [action] }} />,
      );
      const button = wrapper.find(Button);
      expect(button.props().variant).toEqual(variant);
    });
    it('passes button classnames', () => {
      const customClass = 'class1';
      const action = ({ as }) => React.createElement(
        as || Button,
        { className: customClass },
        'Extra 1',
      );
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: [action] }} />);
      const button = wrapper.find(Button);
      expect(button.props().className).toContain(customClass);
    });
    it('disables the button', () => {
      const action = ({ as }) => React.createElement(
        as || Button,
        { disabled: true },
        'Extra 1',
      );
      const wrapper = mount(
        <BulkActionsWrapper value={{ ...instance, bulkActions: [action] }} />,
      );
      const button = wrapper.find(Button);
      expect(button.props().disabled).toEqual(true);
    });
    it('performs the button action on click', () => {
      const onClickSpy = jest.fn();
      const action = ({ as }) => React.createElement(
        as || Button,
        { onClick: onClickSpy },
        'Extra 1',
      );
      const wrapper = mount(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [action] }}
        />,
      );
      const button = wrapper.find('button');
      expect(button.length).toEqual(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
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
      expect(buttons.get(1).props.variant).toEqual('brand');
      expect(buttons.get(0).props.variant).toEqual('outline-primary');
    });
  });
  describe('controlled table selections', () => {
    it('passed correct number of selected rows', () => {
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: [buttonFunction] }} />);
      const button = wrapper.find(Button);
      expect(button.length).toEqual(1);
      expect(button.text()).toEqual(selectedFlatRows.length.toString());
    });
    it('handles action on click with full table selection (all rows across all pages)', () => {
      const onClickSpy = jest.fn();
      const action = ({ as }) => React.createElement(
        as || Button,
        { onClick: onClickSpy },
        'Extra 1',
      );
      const wrapper = mount(
        <BulkActionsWrapper
          value={{
            ...instance,
            bulkActions: [action, secondAction],
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
    });
  });
  describe('two actions on click', () => {
    it('performs the primary button action on click', () => {
      const onClickSpy = jest.fn();
      const action = ({ as }) => React.createElement(
        as || Button,
        { onClick: onClickSpy },
        'Extra 1',
      );
      const wrapper = mount(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [action, secondAction] }}
        />,
      );
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
      const wrapper = mount(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [firstAction, action] }}
        />,
      );
      const button = wrapper.find(Button).at(0);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('with more than two actions', () => {
    it('displays the user\'s first button as an brand button', () => {
      const wrapper = mount(<BulkActionsWrapper />);
      const buttons = wrapper.find(Button);
      expect(buttons.length).toEqual(2);
      expect(buttons.get(1).props.variant).toEqual('brand');
    });
    it('displays the user\'s second button as an outline button', () => {
      const wrapper = mount(<BulkActionsWrapper />);
      const buttons = wrapper.find(Button);
      expect(buttons.get(0).props.variant).toEqual('outline-primary');
    });
    describe('dropdown', () => {
      const onClickSpy = jest.fn();
      const itemClassName = 'itemClickTest';
      const itemText = 'Yet another action';
      let wrapper;
      let dropdownButton;
      beforeEach(() => {
        const action = ({ as }) => React.createElement(
          as || Button,
          { onClick: onClickSpy, className: itemClassName, key: 'action0' },
          itemText,
        );
        wrapper = mount(
          <BulkActionsWrapper
            value={{
              ...instance,
              // eslint-disable-next-line max-len
              bulkActions: [...instance.bulkActions, action],
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
      expect(wrapper.text().length).toBeGreaterThan(0);
    });
    it('renders the correct alt text for the dropdown', () => {
      useWindowSize.mockReturnValue({ width: 500 });
      const wrapper = mount(<BulkActionsWrapper />);
      const dropdownToggle = wrapper.find('DropdownToggle');
      expect(dropdownToggle.props().alt).toEqual(SMALL_SCREEN_DROPDOWN_BUTTON_TEXT);
    });
  });
});
