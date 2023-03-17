import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { IntlProvider } from 'react-intl';
import FormAutosuggest from '../FormAutosuggest';
import FormAutosuggestOption from '../FormAutosuggestOption';

const createDocumentListenersMock = () => {
  const listeners = {};
  const handler = (domEl, e) => listeners?.[e]?.({ target: domEl });

  document.addEventListener = jest.fn((e, fn) => { listeners[e] = fn; });
  document.removeEventListener = jest.fn(e => { delete listeners[e]; });

  return {
    click: domEl => handler(domEl, 'click'),
  };
};

function FormAutosuggestWrapper(props) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <FormAutosuggest {...props} />
    </IntlProvider>
  );
}

describe('FormAutosuggest', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const onSelected = jest.fn();

  const container = mount(
    <FormAutosuggestWrapper
      name="FormAutosuggest"
      floatingLabel="floatingLabel text"
      helpMessage="Example help message"
      errorMessageText="Example error message"
      onSelected={onSelected}
    >
      <FormAutosuggestOption>Option 1</FormAutosuggestOption>
      <FormAutosuggestOption>Option 2</FormAutosuggestOption>
      <FormAutosuggestOption>Learn from more than 160 member universities</FormAutosuggestOption>
    </FormAutosuggestWrapper>,
  );

  describe('render behavior', () => {
    it('renders component without error', () => {
      mount(<FormAutosuggestWrapper />);
    });

    it('render without loading state', () => {
      expect(container.exists('.pgn__form-autosuggest__dropdown-loading')).toBe(false);
      expect(container.props().isLoading).toBeUndefined();
    });

    it('render with loading state', () => {
      const wrapper = mount(<FormAutosuggestWrapper isLoading />);

      expect(wrapper.exists('.pgn__form-autosuggest__dropdown-loading')).toBe(true);
      expect(wrapper.props().isLoading).toBe(true);
    });

    it('renders component with options', () => {
      container.find('input').simulate('click');
      const optionsList = container.find('.pgn__form-autosuggest__dropdown').find('button');

      expect(optionsList.length).toEqual(3);
    });
  });

  describe('controlled behavior', () => {
    it('selects option', () => {
      container.find('input').simulate('click');
      container.find('.pgn__form-autosuggest__dropdown').find('button')
        .at(0).simulate('click');

      expect(container.find('input').instance().value).toEqual('Option 1');
      expect(onSelected).toHaveBeenCalledWith('Option 1');
      expect(onSelected).toHaveBeenCalledTimes(1);
    });

    it('options list depends on empty field value', () => {
      container.find('input').simulate('change', { target: { value: '' } });

      expect(container.find('input').instance().value).toEqual('');
    });

    it('options list depends on filled field value', () => {
      container.find('input').simulate('change', { target: { value: 'option 1' } });

      expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(1);
      expect(onSelected).toHaveBeenCalledTimes(0);
    });

    it('toggles options list', () => {
      const dropdownContainer = '.pgn__form-autosuggest__dropdown';

      expect(container.find(dropdownContainer).find('button').length).toEqual(1);

      container.find('button.pgn__form-autosuggest__icon-button').simulate('click');
      expect(container.find(dropdownContainer).find('button').length).toEqual(0);

      container.find('button.pgn__form-autosuggest__icon-button').simulate('click');
      expect(container.find(dropdownContainer).find('button').length).toEqual(3);
    });

    it('shows options list depends on field value', () => {
      container.find('input').simulate('change', { target: { value: '1' } });

      expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(2);
    });

    it('closes options list on click outside', () => {
      const fireEvent = createDocumentListenersMock();
      const dropdownContainer = '.pgn__form-autosuggest__dropdown';

      container.find('input').simulate('click');
      expect(container.find(dropdownContainer).find('button').length).toEqual(2);

      act(() => { fireEvent.click(document.body); });
      container.update();

      expect(container.find(dropdownContainer).find('button').length).toEqual(0);
    });
  });
});
