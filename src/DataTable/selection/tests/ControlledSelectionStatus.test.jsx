import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ControlledSelectionStatus from '../ControlledSelectionStatus';
import { clearSelectionAction, setSelectAllRowsAllPagesAction, setSelectedRowsAction } from '../data/actions';
import DataTableContext from '../../DataTableContext';
import {
  SELECT_ALL_TEST_ID,
  CLEAR_SELECTION_TEST_ID,
  CLEAR_SELECTION_TEXT,
} from '../data/constants';

const instance = {
  itemCount: 18,
  controlledTableSelections: [
    {
      selectedRows: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      isEntireTableSelected: false,
    },
    jest.fn(),
  ],
  rows: [{ id: 1 }, { id: 2 }, { id: 5 }],
};

// eslint-disable-next-line react/prop-types
const ControlledSelectionStatusWrapper = ({ value, props = {} }) => (
  <IntlProvider locale="en" messages={{}}>
    <DataTableContext.Provider value={value}>
      <ControlledSelectionStatus {...props} />
    </DataTableContext.Provider>
  </IntlProvider>
);

describe('<ControlledSelectionStatus />', () => {
  it('accepts a class name', () => {
    const customClassName = 'classy';
    const wrapper = mount(<ControlledSelectionStatusWrapper value={instance} props={{ className: customClassName }} />);
    expect(wrapper.find(ControlledSelectionStatus).props().className).toEqual(customClassName);
  });
  describe('entire table selected', () => {
    it('shows that entire table is selected', () => {
      const selectedRows = Array(instance.itemCount).map((item, index) => ({ id: index + 1 }));
      const wrapper = mount(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              {
                selectedRows,
                isEntireTableSelected: true,
              },
              jest.fn(),
            ],
          }}
        />,
      );
      expect(wrapper.text()).toContain(`All ${instance.itemCount}`);
    });
    it('does not show select all button if entire table is selected', () => {
      const selectedRows = Array(instance.itemCount).map((item, index) => ({ id: index + 1 }));
      const wrapper = mount(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              {
                selectedRows,
                isEntireTableSelected: true,
              },
              jest.fn(),
            ],
          }}
        />,
      );
      const button = wrapper.find(`button.${SELECT_ALL_TEST_ID}`);
      expect(button.length).toEqual(0);
    });
    it('selects any unselected page rows', () => {
      const selectedRows = Array(instance.itemCount).map((item, index) => ({ id: index + 1 }));
      const dispatchSpy = jest.fn();
      mount(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              {
                selectedRows,
                isEntireTableSelected: true,
              },
              dispatchSpy,
            ],
          }}
        />,
      );
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      const action = setSelectedRowsAction(instance.rows, instance.itemCount);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
  describe('individual rows selected', () => {
    it('shows the number of rows selected', () => {
      const wrapper = mount(<ControlledSelectionStatusWrapper value={instance} />);
      const [selections] = instance.controlledTableSelections;
      expect(wrapper.text()).toContain(selections.selectedRows.length.toString());
    });
    it('renders default selection text', () => {
      const wrapper = mount(<ControlledSelectionStatusWrapper value={instance} />);
      expect(wrapper.text()).toContain(CLEAR_SELECTION_TEXT);
    });
    it('can accept clear selection text as a prop', () => {
      const customText = 'CLEAR ME';
      const wrapper = mount((
        <ControlledSelectionStatusWrapper value={instance} props={{ clearSelectionText: customText }} />
      ));
      expect(wrapper.text()).toContain(customText);
      expect(wrapper.text()).not.toContain(CLEAR_SELECTION_TEXT);
    });
    it('toggles select all on select all button click', () => {
      const dispatchSpy = jest.fn();
      const wrapper = mount(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              instance.controlledTableSelections[0],
              dispatchSpy,
            ],
          }}
        />,
      );
      const button = wrapper.find(`button.${SELECT_ALL_TEST_ID}`);
      button.simulate('click');
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      const action = setSelectAllRowsAllPagesAction();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
    it('clears selection on clear selection button click', () => {
      const dispatchSpy = jest.fn();
      const wrapper = mount(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              instance.controlledTableSelections[0],
              dispatchSpy,
            ],
          }}
        />,
      );
      const button = wrapper.find(`button.${CLEAR_SELECTION_TEST_ID}`);
      button.simulate('click');
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      const action = clearSelectionAction();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
  describe('no rows selected', () => {
    it('does not render the clear selection button', () => {
      const wrapper = mount(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              {
                selectedRows: [],
                isEntireTableSelected: false,
              },
              jest.fn(),
            ],
          }}
        />,
      );
      expect(wrapper.find(CLEAR_SELECTION_TEST_ID).length).toEqual(0);
    });
  });
});
