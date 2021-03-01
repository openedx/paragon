import React from 'react';
import { mount } from 'enzyme';
import { ModalContextProvider } from './ModalContext';
import ModalCloseButton from './ModalCloseButton';

describe('<ModalCloseButton />', () => {
  it('calls a modal context close function on click', () => {
    const mockClose = jest.fn();
    const wrapper = mount((
      <ModalContextProvider onClose={mockClose} isOpen>
        <ModalCloseButton>Close</ModalCloseButton>
      </ModalContextProvider>
    ));
    wrapper.find(ModalCloseButton).simulate('click');
    expect(mockClose).toHaveBeenCalled();
  });
  it('calls both the modal context close function and an passed click handler', () => {
    const mockClose = jest.fn();
    const mockOnClick = jest.fn();
    const wrapper = mount((
      <ModalContextProvider onClose={mockClose} isOpen>
        <ModalCloseButton onClick={mockOnClick}>Close</ModalCloseButton>
      </ModalContextProvider>
    ));
    wrapper.find(ModalCloseButton).simulate('click');
    expect(mockClose).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
