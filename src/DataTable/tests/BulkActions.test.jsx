import React from 'react';
import { mount } from 'enzyme';
import classNames from 'classnames';

import BulkActions from '../BulkActions';
import { DROPDOWN_BUTTON_TEXT, SMALL_SCREEN_DROPDOWN_BUTTON_TEXT } from '../CollapsibleButtonGroup';
import {
  useWindowSize, Dropdown, Button, Icon,
} from '../..';
import DataTableContext from '../DataTableContext';

jest.mock('../../hooks/useWindowSize');
useWindowSize.mockReturnValue({ width: 800 });

// eslint-disable-next-line react/prop-types
const FirstAction = ({ as: Component, onClick, className }) => (
  <Component variant="brand" className={classNames('class1', className)} onClick={onClick}>
    First Action
  </Component>
);

// eslint-disable-next-line react/prop-types
const SecondAction = ({ as: Component, onClick, className }) => (
  <Component variant="outline-primary" className={classNames('class2', className)} onClick={onClick}>
    Second Action
  </Component>
);

// eslint-disable-next-line react/prop-types
const ExtraAction = ({ text, as: Component }) => (
  <Component>
    {`Extra Action ${text}`}
  </Component>
);

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
  bulkActions: [
    ...twoActions,
    <ExtraAction text="1" />,
    <ExtraAction text="2" />,
    <ExtraAction text="3" />,
  ],
};

// eslint-disable-next-line react/prop-types
const BulkActionsWrapper = ({ value = instance }) => (
  <DataTableContext.Provider value={value}><BulkActions /></DataTableContext.Provider>);

describe('<BulkActions />', () => {
  describe('with functional rendering', () => {
    it('renders the function', () => {
      const myFunction = () => <Button>Some Button</Button>;
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: myFunction }} />);
      const button = wrapper.find(Button);
      expect(button.length).toEqual(1);
    });
  });
  describe('with one action', () => {
    it('displays the primary button as an brand button', () => {
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: [<FirstAction />] }} />);
      const button = wrapper.find(Button);
      expect(button.length).toEqual(1);
      expect(button.props().variant).toEqual('brand');
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
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: [<FirstAction />] }} />);
      const button = wrapper.find(Button);
      expect(button.length).toEqual(1);
      expect(button.text()).toEqual('First Action');
    });
    it('handles action on click with full table selection (all rows across all pages)', () => {
      const onClickSpy = jest.fn();
      const wrapper = mount(
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
      const button = wrapper.find(Button).at(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('two actions on click', () => {
    it('performs the primary button action on click', () => {
      const onClickSpy = jest.fn();
      const wrapper = mount(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [<FirstAction onClick={onClickSpy} />, <SecondAction />] }}
        />,
      );
      const button = wrapper.find(Button).at(1);
      button.simulate('click');
      expect(onClickSpy).toHaveBeenCalledTimes(1);
    });
    it('performs the second button action on click', () => {
      const onClickSpy = jest.fn();
      const wrapper = mount(
        <BulkActionsWrapper
          value={{ ...instance, bulkActions: [<FirstAction />, <SecondAction onClick={onClickSpy} />] }}
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
      let wrapper;
      let dropdownButton;
      beforeEach(() => {
        wrapper = mount(
          <BulkActionsWrapper
            value={{
              ...instance,
              // eslint-disable-next-line max-len
              bulkActions: [...instance.bulkActions, <FirstAction onClick={onClickSpy} className={itemClassName} />],
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
      it('passes the class names to the dropdown item', () => {
        const item = wrapper.find(`a.${itemClassName}`);
        expect(item.length).toEqual(1);
      });
    });
  });

  describe('small screen', () => {
    const actions = [[[<FirstAction />]], [[<FirstAction />, <SecondAction />]], [instance.bulkActions]];
    test.each(actions)('puts all actions in a dropdown %#', (testActions) => {
      useWindowSize.mockReturnValue({ width: 500 });
      const wrapper = mount(<BulkActionsWrapper value={{ ...instance, bulkActions: testActions }} />);
      const button = wrapper.find(Icon);
      expect(button.length).toEqual(1);
      expect(wrapper.text()).not.toContain('First Action');
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
