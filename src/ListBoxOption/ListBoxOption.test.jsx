import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ListBoxOption from '.';

describe('ListBoxOption', () => {
  const listBoxOptionChild = 'test';

  describe('rendering', () => {
    it('should have false aria-selected attribute by default', () => {
      const { getByTestId } = render(
        <ListBoxOption data-testid="listbox-option">{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');
      expect(listBoxOptionElement.getAttribute('aria-selected')).toEqual('false');
    });

    it('should have false aria-selected attribute when isSelected prop is false', () => {
      const { getByTestId, rerender } = render(
        <ListBoxOption data-testid="listbox-option" isSelected={false}>{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');
      expect(listBoxOptionElement.getAttribute('aria-selected')).toEqual('false');

      rerender(
        <ListBoxOption isSelected>{listBoxOptionChild}</ListBoxOption>,
      );

      expect(listBoxOptionElement.getAttribute('aria-selected')).toEqual('true');
    });

    it('should render a div by default', () => {
      const { container } = render(
        <ListBoxOption>{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = container.querySelector('div');
      expect(listBoxOptionElement).toBeInTheDocument();
    });

    it('should render an HTML element when tag prop is an HTML element', () => {
      const { container } = render(
        <ListBoxOption tag="li">{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = container.querySelector('li');
      expect(listBoxOptionElement).toBeInTheDocument();
    });

    it('should have correct default classNames', () => {
      const { getByTestId } = render(
        <ListBoxOption data-testid="listbox-option">{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');
      expect(listBoxOptionElement).toHaveClass('list-group-item');
      expect(listBoxOptionElement).toHaveClass('list-group-item-action');
    });

    it('should not have active className by default', () => {
      const { getByTestId } = render(
        <ListBoxOption data-testid="listbox-option">{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');
      expect(listBoxOptionElement).not.toHaveClass('active');
    });

    it('should have correct default id', () => {
      const { getByTestId } = render(
        <ListBoxOption data-testid="listbox-option">{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');
      expect(listBoxOptionElement.getAttribute('id')).toBeNull();
    });

    it('should have correct id when index prop is a number', () => {
      const { getByTestId, rerender } = render(
        <ListBoxOption data-testid="listbox-option" index={1}>{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');
      expect(listBoxOptionElement.getAttribute('id')).toEqual('list-box-option-1');

      rerender(
        <ListBoxOption index={2}>{listBoxOptionChild}</ListBoxOption>,
      );

      expect(listBoxOptionElement.getAttribute('id')).toEqual('list-box-option-2');
    });

    it('should have option role', () => {
      const { getByTestId } = render(
        <ListBoxOption data-testid="listbox-option">{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');
      expect(listBoxOptionElement.getAttribute('role')).toEqual('option');
    });

    it('should have active className when isSelected prop is true', () => {
      const { getByTestId, rerender } = render(
        <ListBoxOption data-testid="listbox-option" isSelected={false}>{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');
      expect(listBoxOptionElement).not.toHaveClass('active');

      rerender(
        <ListBoxOption isSelected>{listBoxOptionChild}</ListBoxOption>,
      );

      expect(listBoxOptionElement).toHaveClass('active');
    });
  });

  describe('behavior', () => {
    it('should call onSelect on mouse down', () => {
      const onSelectSpy = jest.fn();
      const { getByTestId } = render(
        <ListBoxOption data-testid="listbox-option" onSelect={onSelectSpy}>{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');

      fireEvent.mouseDown(listBoxOptionElement);

      expect(onSelectSpy).toHaveBeenCalledTimes(1);
    });

    it('should call onSelect when receiving new isSelected prop', () => {
      const onSelectSpy = jest.fn();
      const { getByTestId, rerender } = render(
        <ListBoxOption data-testid="listbox-option" onSelect={onSelectSpy}>{listBoxOptionChild}</ListBoxOption>,
      );

      const listBoxOptionElement = getByTestId('listbox-option');

      fireEvent.mouseDown(listBoxOptionElement);

      rerender(
        <ListBoxOption onSelect={onSelectSpy} isSelected>
          {listBoxOptionChild}
        </ListBoxOption>,
      );

      expect(onSelectSpy).toHaveBeenCalledTimes(2);
    });
  });
});
