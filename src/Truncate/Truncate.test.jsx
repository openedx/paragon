import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Truncate from './Truncate';
import { assembleStringFromChildrenArray } from './utils';

jest.mock('./utils', () => ({
  assembleStringFromChildrenArray: jest.fn(
    (children) => `Assembled text from ${children.length} elements`,
  ),
}));

describe('Truncate Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default line clamp of 1', () => {
    const testContent = 'This is a test string.';
    render(<Truncate>{testContent}</Truncate>);

    const element = screen.getByTestId('truncate-element');
    expect(element.style.WebkitLineClamp).toBe('1');

    expect(element).toHaveAttribute('title', testContent);
    expect(element).toHaveAttribute('aria-label', testContent);
  });

  it('should render with custom line clamp value', () => {
    const testContent = 'Another long string here.';
    const customLines = 5;
    render(<Truncate lines={customLines}>{testContent}</Truncate>);

    const element = screen.getByTestId('truncate-element');

    expect(element.style.WebkitLineClamp).toBe(String(customLines));

    expect(element).toHaveAttribute('title', testContent);
    expect(element).toHaveAttribute('aria-label', testContent);
  });

  it('should not call assembleStringFromChildrenArray if children is a string', () => {
    const testContent = 'Simple string content.';
    render(<Truncate>{testContent}</Truncate>);

    expect(assembleStringFromChildrenArray).not.toHaveBeenCalled();
  });

  it('should call assembleStringFromChildrenArray if children is complex', () => {
    // Complex children structure (an array of elements)
    const complexChildren = [
      <span key="a">Part A</span>,
      <strong key="b">Part B</strong>,
      'Part C',
    ];

    (assembleStringFromChildrenArray).mockReturnValue('This is the mocked full string.');

    render(<Truncate>{complexChildren}</Truncate>);

    expect(assembleStringFromChildrenArray).toHaveBeenCalledTimes(1);

    expect(assembleStringFromChildrenArray).toHaveBeenCalledWith(complexChildren);
  });
});
