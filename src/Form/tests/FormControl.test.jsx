import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import FormControl from '../FormControl';

const ref = {
  current: null,
};

describe('FormControl', () => {
  it('textarea changes its height with autoResize prop', () => {
    const useReferenceSpy = jest.spyOn(React, 'useRef').mockReturnValue(ref);
    const onChangeFunc = jest.fn();
    render(
      <FormControl as="textarea" autoResize onChange={onChangeFunc} data-testid="form-control-textarea" />,
    );

    ref.scrollHeight = 180;
    ref.offsetHeight = 90;
    ref.clientHeight = 88;

    const textarea = screen.getByTestId('form-control-textarea');

    expect(useReferenceSpy).toHaveBeenCalledTimes(1);
    expect(ref.current.style.height).toBe('0px');

    fireEvent.change(textarea, { target: { value: 'new text' } });

    expect(onChangeFunc).toHaveBeenCalledTimes(1);
    expect(ref.current.style.height).toEqual(`${ref.current.scrollHeight + ref.current.offsetHeight}px`);
  });
});
