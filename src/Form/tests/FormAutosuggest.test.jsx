import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import FormAutosuggest from '../FormAutosuggest';
import FormAutosuggestOption from '../FormAutosuggestOption';

const createDocumentListenersMock = () => {
  const listeners = {};
  const handler = (domEl, event) => listeners?.[event]?.({ target: domEl });

  document.addEventListener = jest.fn((event, cb) => {
    listeners[event] = cb;
  });

  document.removeEventListener = jest.fn(event => {
    delete listeners[event];
  });

  return {
    mouseDown: domEl => handler(domEl, 'mousedown'),
    click: domEl => handler(domEl, 'click'),
  };
};

const props = {
  as: 'input',
  name: 'FormAutosuggest',
  floatingLabel: 'floatingLabel text',
  value: null,
  errorMessageText: null,
  readOnly: false,
};

describe('FormAutosuggest', () => {
  it('renders component without error', () => {
    mount(<FormAutosuggest {...props} />);
  });

  it('renders component with options', () => {
    const container = mount(
      <FormAutosuggest>
        <FormAutosuggestOption>option 1</FormAutosuggestOption>
        <FormAutosuggestOption>option 2</FormAutosuggestOption>
        <FormAutosuggestOption>option 3</FormAutosuggestOption>
      </FormAutosuggest>,
    );

    container.find('input').simulate('click');
    container.update();

    const optionsList = container.find('.pgn__form-autosuggest__dropdown').find('button');
    expect(optionsList.length).toEqual(3);
  });

  it('selects option', () => {
    const container = mount(
      <FormAutosuggest>
        <FormAutosuggestOption>option 1</FormAutosuggestOption>
        <FormAutosuggestOption>option 2</FormAutosuggestOption>
        <FormAutosuggestOption>option 3</FormAutosuggestOption>
      </FormAutosuggest>,
    );

    container.find('input').simulate('click');
    container.find('.pgn__form-autosuggest__dropdown').find('button').at(0).simulate('click');
    expect(container.find('input').instance().value).toEqual('option 1');
  });

  it('options list depends on empty field value', () => {
    const container = mount(
      <FormAutosuggest>
        <FormAutosuggestOption>option 1</FormAutosuggestOption>
        <FormAutosuggestOption>option 2</FormAutosuggestOption>
        <FormAutosuggestOption>option 3</FormAutosuggestOption>
      </FormAutosuggest>,
    );

    container.find('input').simulate('change', { target: { value: '' } });
    expect(container.find('input').instance().value).toEqual('');
  });

  it('options list depends on empty field value 2', () => {
    const container = mount(
      <FormAutosuggest>
        <FormAutosuggestOption>option 1</FormAutosuggestOption>
        <FormAutosuggestOption>option 2</FormAutosuggestOption>
        <FormAutosuggestOption>option 3</FormAutosuggestOption>
      </FormAutosuggest>,
    );

    container.find('input').simulate('change', { target: { value: 'option 1' } });
    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(1);
  });

  it('toggles options list', () => {
    const container = mount(
      <FormAutosuggest>
        <FormAutosuggestOption>option 1</FormAutosuggestOption>
        <FormAutosuggestOption>option 2</FormAutosuggestOption>
        <FormAutosuggestOption>option 3</FormAutosuggestOption>
      </FormAutosuggest>,
    );

    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(0);
    container.find('button.pgn__form-autosuggest__icon-button').simulate('click');
    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(3);
    container.find('button.pgn__form-autosuggest__icon-button').simulate('click');
    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(0);
  });

  it('shows options list depends on field value', () => {
    const container = mount(
      <FormAutosuggest>
        <FormAutosuggestOption>learn from more than 160 member universities</FormAutosuggestOption>
        <FormAutosuggestOption>option 2</FormAutosuggestOption>
        <FormAutosuggestOption>option 3</FormAutosuggestOption>
      </FormAutosuggest>,
    );

    container.find('input').simulate('change', { target: { value: '1' } });
    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(1);
  });

  it('closes options list on click outside', () => {
    const fireEvent = createDocumentListenersMock();
    const container = mount(
      <FormAutosuggest>
        <FormAutosuggestOption>option 1</FormAutosuggestOption>
        <FormAutosuggestOption>option 2</FormAutosuggestOption>
        <FormAutosuggestOption>option 3</FormAutosuggestOption>
      </FormAutosuggest>,
    );
    const dropdownContainer = '.pgn__form-autosuggest__dropdown';

    container.find('input').simulate('click');
    expect(container.find(dropdownContainer).find('button').length).toEqual(3);
    act(() => { fireEvent.click(document.body); });
    container.update();
    expect(container.find(dropdownContainer).find('button').length).toEqual(0);
  });
});
