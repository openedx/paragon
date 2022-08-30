import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
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

const props = {
  name: 'FormAutosuggest',
  floatingLabel: 'floatingLabel text',
};

describe('FormAutosuggest', () => {
  it('renders component without error', () => {
    mount(<FormAutosuggest {...props} />);
  });

  const container = mount(
    <FormAutosuggest>
      <FormAutosuggestOption>option 1</FormAutosuggestOption>
      <FormAutosuggestOption>option 2</FormAutosuggestOption>
      <FormAutosuggestOption>learn from more than 160 member universities</FormAutosuggestOption>
    </FormAutosuggest>,
  );

  it('renders component with options', () => {
    container.find('input').simulate('click');
    const optionsList = container.find('.pgn__form-autosuggest__dropdown').find('button');

    expect(optionsList.length).toEqual(3);
  });

  it('selects option', () => {
    container.find('input').simulate('click');
    container.find('.pgn__form-autosuggest__dropdown').find('button')
      .at(0).simulate('click');

    expect(container.find('input').instance().value).toEqual('option 1');
  });

  it('options list depends on empty field value', () => {
    container.find('input').simulate('change', { target: { value: '' } });

    expect(container.find('input').instance().value).toEqual('');
  });

  it('options list depends on filled field value', () => {
    container.find('input').simulate('change', { target: { value: 'option 1' } });

    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(1);
  });

  it('toggles options list', () => {
    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(1);

    container.find('button.pgn__form-autosuggest__icon-button').simulate('click');
    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(0);

    container.find('button.pgn__form-autosuggest__icon-button').simulate('click');
    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(3);
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
