import React from 'react';
import { render } from '@testing-library/react';
import Layout from '.';

function TestLayout(props) {
  return (
    <Layout
      lg={[{ span: 4, offset: 0 }, { span: 4, offset: 0 }, { span: 4, offset: 0 }]}
      md={[{ span: 'auto', offset: 0 }, { span: 'auto', offset: 0 }, { span: 'auto', offset: 0 }]}
      sm={[{ span: 8, offset: 0 }, { span: 4, offset: 0 }, { span: 6, offset: 6 }]}
      xs={[{ span: 4, offset: 0 }, { span: 4, offset: 0 }, { span: 4, offset: 0 }]}
      xl={[{ span: 3 }, { span: 6 }, { span: 3 }]}
      {...props}
    >
      <Layout.Element>first block</Layout.Element>
      <Layout.Element>second block</Layout.Element>
      <Layout.Element>third block</Layout.Element>
    </Layout>
  );
}

describe('<Layout />', () => {
  describe('correct rendering', () => {
    it('renders correct number of children', () => {
      const { container } = render(<TestLayout />);
      const children = container.querySelectorAll('.row div');
      expect(children.length).toEqual(3);
    });

    it('renders children with correct class names', () => {
      const { container } = render(<TestLayout />);
      const children = container.querySelectorAll('.row div');

      const classNames = 'col-xl-3 col-lg-4 col-md-auto col-sm-8 col-4 offset-xl-0 offset-lg-0 offset-md-0 offset-sm-0 offset-0';
      expect(children[0].className).toEqual(classNames);
    });

    it('renders correctly even with incorrect dimensions', () => {
      const { container } = render(
        <TestLayout lg={[{ span: 6, offset: 0 }, { span: 6, offset: 0 }, { span: 6, offset: 0 }]} />,
      );
      const children = container.querySelectorAll('.row div');
      expect(children.length).not.toEqual(0);
    });
  });
});
