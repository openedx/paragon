import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import InputText from './index';

describe('<InputText />', () => {
  const label = 'label';
  const name = 'name';
  const props = {
    label,
    name,
  };

  describe('rendering', () => {
    it('should render with default type when type is not defined', () => {
      const { container } = render(<InputText {...props} />);
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
      expect(input.type).toEqual('text');
    });

    it('should render with default type when type is defined as undefined', () => {
      const { container } = render(<InputText {...props} type={undefined} />);
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
      expect(input.type).toEqual('text');
    });

    it('should render with default type when type is defined as null', () => {
      const { container } = render(<InputText {...props} type={null} />);
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
      expect(input.type).toEqual('text');
    });

    it('should render with specified type when type is defined', () => {
      const type = 'foobar';
      const { getByRole } = render(<InputText {...props} type={type} />);
      const input = getByRole('textbox', { type: 'foobar' });
      expect(input).toBeInTheDocument();
      expect(input.getAttribute('type')).toEqual(type);
    });

    it('should render with the autoComplete property if set', () => {
      const { container } = render(<InputText {...props} autoComplete="off" />);
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
      expect(input.getAttribute('autocomplete')).toEqual('off');
    });

    it('should render with custom classNames if set', () => {
      const { container } = render(<InputText {...props} className={['first', 'last']} />);
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
      expect(input.type).toEqual('text');
      expect(input.classList.contains('first')).toBe(true);
      expect(input.classList.contains('last')).toBe(true);
    });

    it('should not be readOnly if the readOnly property is not set', () => {
      const { container } = render(<InputText {...props} />);
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
      expect(input.readOnly).toBe(false);
    });

    it('should render with the readOnly property if set', () => {
      const { container } = render(<InputText {...props} readOnly />);
      const input = container.querySelector('input');
      expect(input).toBeInTheDocument();
      expect(input.readOnly).toBe(true);
    });
  });
});
