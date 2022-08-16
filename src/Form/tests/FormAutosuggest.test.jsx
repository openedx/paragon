import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import FormAutosuggest from '../FormAutosuggest';

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
  options: null,
  handleFocus: null,
  handleChange: null,
  handleBlur: null,
  value: null,
  errorMessage: null,
  readOnly: false,
};

describe('FormAutosuggest', () => {
  it('renders component without error', () => {
    mount(<FormAutosuggest {...props} />);
  });

  it('handles element focus', () => {
    const mockHandleFocus = jest.fn();
    const newProps = { ...props, handleFocus: mockHandleFocus };
    const container = mount(<FormAutosuggest {...newProps} />);

    container.find('input').simulate('focus');
    expect(mockHandleFocus).toHaveBeenCalled();
  });

  it('handles element blur', () => {
    const mockHandleBlur = jest.fn();
    const newProps = { ...props, handleBlur: mockHandleBlur };
    const container = mount(<FormAutosuggest {...newProps} />);

    container.find('input').simulate('blur');
    expect(mockHandleBlur).toHaveBeenCalled();
  });

  it('renders component with options', () => {
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);

    container.find('input').simulate('click');
    container.update();

    const optionsList = container.find('.pgn__form-autosuggest__dropdown').find('button');
    expect(optionsList.length).toEqual(newProps.options.length);
  });

  it('selects option', () => {
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);

    container.find('input').simulate('click');
    container.find('.pgn__form-autosuggest__dropdown').find('button').at(0).simulate('click');
    expect(container.find('input').instance().value).toEqual(newProps.options[0]);
  });

  it('options list depends on empty field value', () => {
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);

    container.find('input').simulate('change', { target: { value: '' } });
    expect(container.find('input').instance().value).toEqual('');
  });

  it('toggles options list', () => {
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);

    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(0);
    container.find('button.pgn__form-autosuggest__icon-button').simulate('click');
    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(newProps.options.length);
    container.find('button.pgn__form-autosuggest__icon-button').simulate('click');
    expect(container.find('.pgn__form-autosuggest__dropdown').find('button').length).toEqual(0);
  });

  it('shows options list depends on field value', () => {
    const newProps = { ...props, options: ['learn from more than 160 member universities', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);

    container.find('input').simulate('change', { target: { value: '1' } });
    expect(container.find('.pgn__form-autosuggest__dropdown')
      .find('button').length).toEqual(1);
  });

  it('closes options list on click outside', () => {
    const fireEvent = createDocumentListenersMock();
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);
    const dropdownContainer = '.pgn__form-autosuggest__dropdown';

    container.find('input').simulate('click');
    expect(container.find(dropdownContainer).find('button').length).toEqual(2);
    act(() => { fireEvent.click(document.body); });
    container.update();
    expect(container.find(dropdownContainer).find('button').length).toEqual(0);
  });
});
