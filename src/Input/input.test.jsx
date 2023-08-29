import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Input from './index';

describe('<Input />', () => {
  const label = 'label';
  const name = 'name';
  const className = 'input';
  const props = {
    label,
    name,
    className,
  };
  const types = [
    'textarea',
    'select',
    'checkbox',
    'color',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ];

  const groupInput = (
    <Input
      type="select"
      defaultValue="Foo Bar"
      options={[
        { value: 'Foo Bar', label: 'Foo Bar' },
        { value: 'Foos Bar', label: 'Bar foo' },
        { value: 'Foo sBar', label: 'FoBaro' },
        { value: 'Foo ssBar', label: 'Farboo' },
        {
          label: 'But there is more',
          group: [
            { value: 'vFoo Bar', label: 'Foov Bar' },
            { value: 'vFoos Bar', label: 'Barv foo' },
            { value: 'vFoo sBar', label: 'FoBarov' },
            { value: 'vFoo ssBar', label: 'Farboov' },
          ],
        },
      ]}
    />
  );

  describe('rendering', () => {
    it('should render with forwardRef', () => {
      const refSpy = jest.fn();
      render(<Input type="text" ref={refSpy} {...props} />);
      expect(refSpy).toHaveBeenCalled();
    });

    it('should render each input type', () => {
      types.forEach((type) => {
        const { container } = render(<Input type={type} {...props} />);
        const input = container.querySelector('.input');
        expect(input).toBeInTheDocument();
      });
    });

    it('properly renders groups', () => {
      const tree = renderer.create(groupInput).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
