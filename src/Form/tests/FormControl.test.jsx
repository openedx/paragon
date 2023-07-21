import React from 'react';
import { mount } from 'enzyme';

import FormControl from '../FormControl';

const ref = {
  current: null,
};

describe('FormControl', () => {
  it('textarea changes its height with autoResize prop', () => {
    const useReferenceSpy = jest.spyOn(React, 'useRef').mockReturnValue(ref);
    const onChangeFunc = jest.fn();
    const wrapper = mount((
      <FormControl as="textarea" autoResize onChange={onChangeFunc} />
    ));
    ref.scrollHeight = 180;
    ref.offsetHeight = 90;
    ref.clientHeight = 88;
    expect(useReferenceSpy).toHaveBeenCalledTimes(1);
    expect(ref.current.style.height).toBe('0px');
    wrapper.find('textarea').simulate('change');
    expect(onChangeFunc).toHaveBeenCalledTimes(1);
    expect(ref.current.style.height).toEqual(`${ref.current.scrollHeight + ref.current.offsets}px`);
  });
});
