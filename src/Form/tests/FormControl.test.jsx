import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormControl from '../FormControl';

const ref = {
  current: null,
};

let unmaskedInputValue;

// eslint-disable-next-line react/prop-types
function Component({ isClearValue }) {
  const [inputValue, setInputValue] = useState('');
  unmaskedInputValue = inputValue;

  return (
    <FormControl
      inputMask="+{1} (000) 000-0000"
      value={inputValue}
      onChange={(e) => (!isClearValue ? setInputValue(e.target.value) : null)}
      /* eslint-disable-next-line no-underscore-dangle */
      onAccept={(_, mask) => (isClearValue ? setInputValue(mask._unmaskedValue) : null)}
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

    userEvent.type(textarea, inputText);

    expect(onChangeFunc).toHaveBeenCalledTimes(inputText.length);
    expect(ref.current.style.height).toEqual(`${ref.current.scrollHeight + ref.current.offsetHeight}px`);
  });

  it('should apply and accept input mask for phone numbers', () => {
    render(<Component />);

    const input = screen.getByTestId('form-control-with-mask');
    userEvent.type(input, '5555555555');
    expect(input.value).toBe('+1 (555) 555-5555');
  });

  it('should be cleared from the mask elements value', () => {
    render(<Component isClearValue />);

    const input = screen.getByTestId('form-control-with-mask');
    userEvent.type(input, '5555555555');

    expect(input.value).toBe('+1 (555) 555-5555');
    expect(unmaskedInputValue).toBe('15555555555');
  });
});
