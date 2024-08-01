import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormControl from '../FormControl';

const ref = {
  current: null,
};

describe('FormControl', () => {
  it('textarea changes its height with autoResize prop', async () => {
    const useReferenceSpy = jest.spyOn(React, 'useRef').mockReturnValue(ref);
    const onChangeFunc = jest.fn();
    const inputText = 'new text';
    render(
      <FormControl as="textarea" autoResize onChange={onChangeFunc} data-testid="form-control-textarea" />,
    );

    ref.scrollHeight = 180;
    ref.offsetHeight = 90;
    ref.clientHeight = 88;

    const textarea = screen.getByTestId('form-control-textarea');

    expect(useReferenceSpy).toHaveBeenCalledTimes(1);
    expect(ref.current.style.height).toBe('0px');

    await userEvent.type(textarea, inputText);

    expect(onChangeFunc).toHaveBeenCalledTimes(inputText.length);
    expect(ref.current.style.height).toEqual(`${ref.current.scrollHeight + ref.current.offsetHeight}px`);
  });
});
