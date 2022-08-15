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

const mockHandleChange = jest.fn();

const props = {
  as: 'input',
  name: 'FormAutosuggest',
  floatingLabel: 'floatingLabel text',
  options: null,
  handleFocus: null,
  handleChange: mockHandleChange,
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
    const optionsList = container.find('.pgn__form-autosuggest__container').find('button');
    expect(optionsList.length).toEqual(newProps.options.length);
  });

  it('selects option', () => {
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);
    container.find('input').simulate('click');
    container.find('.pgn__form-autosuggest__container').find('button').at(0).simulate('click');
    expect(container.find('input').instance().value).toEqual(newProps.options[0]);
  });

  it('shows options list depends on field value', () => {
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);

    container.find('input').simulate('change', { target: { value: '' } });
    expect(container.find('input').instance().value).toEqual('');
  });

  it('toggles options list', () => {
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);
    expect(container.find('.pgn__form-autosuggest__container').find('button').length).toEqual(0);
    container.find('button.expand-more').simulate('click');
    expect(container.find('.pgn__form-autosuggest__container').find('button').length).toEqual(newProps.options.length);
    container.find('button.expand-less').simulate('click');
    expect(container.find('.pgn__form-autosuggest__container').find('button').length).toEqual(0);
  });

  it('shows options list depends on field value', () => {
    const newProps = { ...props, options: ['learn from more than 160 member universities', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);

    container.find('input').simulate('change', { target: { value: '1' } });
    expect(container.find('.pgn__form-autosuggest__container')
      .find('button').length).toEqual(1);
  });

  it('closes options list on click outside', () => {
    const fireEvent = createDocumentListenersMock();
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);
    container.find('input').simulate('click');
    expect(container.find('.pgn__form-autosuggest__container').find('button').length).toEqual(2);
    act(() => { fireEvent.click(document.body); });
    container.update();
    expect(container.find('.dropdown-container').find('button').length).toEqual(0);
  });
  it('closes options list on click outside', () => {
    const newProps = { ...props, options: ['option1', 'option2'] };
    const container = mount(<FormAutosuggest {...newProps} />);
    container.find('input').at(0).simulate('click');
    expect(mockHandleChange).toHaveBeenCalled();
  });
});
//
// describe('FormAutosuggesttest', () => {
//   let props;
//   let mockHandleChange;
//   let mockHandleFocus;
//   let mockHandleClick;
//   let mockHandleBlur;
//
//   beforeEach(() => {
//     mockHandleChange = jest.fn();
//     mockHandleFocus = jest.fn();
//     mockHandleClick = jest.fn();
//     mockHandleBlur = jest.fn();
//     props = {
//       handleBlur: mockHandleBlur,
//       handleChange: mockHandleChange,
//       handleFocus: mockHandleFocus,
//       handleClick: mockHandleClick,
//       helpText: 'helpText text',
//       options: null,
//       trailingElement: null,
//       type: 'text',
//       children: null,
//       className: '',
//       floatingLabel: 'floatingLabel text',
//       name: 'title',
//       value: '',
//     };
//   });
//   it('handles element focus', () => {
//     const container = mount(<FormAutosuggest {...props} />);
//     container.find('input').at(0).simulate('focus');
//
//     expect(mockHandleFocus).toHaveBeenCalled();
//   });
//
//   it('handles element blur', () => {
//     const container = mount(<FormAutosuggest {...props} />);
//     container.find('input').at(0).simulate('focus');
//     container.find('input').at(0).simulate('blur');
//
//     expect(mockHandleBlur).toHaveBeenCalled();
//   });
//
//   it('handles element click', () => {
//     const newProps = { ...props, options: ['opt1', 'opt2'] };
//     const container = mount(<FormAutosuggest {...newProps} />);
//     container.find('input').at(0).simulate('click');
//
//     expect(mockHandleClick).toHaveBeenCalled();
//   });
// });
