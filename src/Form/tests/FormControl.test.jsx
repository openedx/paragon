import React, { useState } from 'react';
import {
   render, screen, act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormControl from '../FormControl';

const ref = {
  current: null,
};

// eslint-disable-next-line react/prop-types
function Component({ isClearValue }) {
  const onChangeFunc = jest.fn();
  const [inputValue, setInputValue] = useState('');

  return (
    <FormControl
      inputMask="+{1}(000)000-00-00"
      value={inputValue}
      onChange={isClearValue ? onChangeFunc : (e) => setInputValue(e.target.value)}
      onAccept={isClearValue ? onChangeFunc : (value) => setInputValue(value)}
      data-testid="form-control-with-mask"
    />
  );
}

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

  it('should apply and accept input mask for phone numbers', () => {
    render(<Component />);

    act(() => {
      const input = screen.getByTestId('form-control-with-mask');
      userEvent.type(input, '1234567890');
      expect(input.value).toBe('+1(234)567-89-0');
    });
  });
  it('should be cleared from the mask elements value', () => {
    render(<Component isClearValue />);

    const input = screen.getByTestId('form-control-with-mask');
    fireEvent.change(input, { target: { value: '1234567890' } });
    expect(input.value).toBe('1234567890');
  });
});
