import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AlertModal from './AlertModal';

/* eslint-disable react/prop-types */
jest.mock('./Portal', () => function PortalMock(props) {
  const { children, ...otherProps } = props;
  return (
    <paragon-portal {...otherProps}>
      {children}
    </paragon-portal>
  );
});

jest.mock('react-focus-on', () => ({
  FocusOn: (props) => {
    const { children, ...otherProps } = props;
    return (
      <focus-on {...otherProps}>{children}</focus-on>
    );
  },
}));

function Body() {
  return (
    <div>
      The body of alert.
    </div>
  );
}

describe('<AlertModal />', () => {
  const isOpen = true;
  const closeFn = jest.fn();

  it('renders the body when isOpen', () => {
    const { getByText } = render(
      <AlertModal
        title="some title"
        isOpen={isOpen}
        onClose={closeFn}
        footerNode={<p>footer</p>}
      >
        <Body />
      </AlertModal>,
    );

    const body = getByText('The body of alert.');
    expect(body).toBeInTheDocument();
  });

  describe('with variant prop', () => {
    it('renders warning variant', () => {
      const { getByTestId } = render(
        <AlertModal
          title="warning"
          isOpen={isOpen}
          onClose={closeFn}
          icon="warning"
          footerNode={<p>footer</p>}
        >
          <Body />
        </AlertModal>,
      );

      const modalTitle = getByTestId('title-icon');
      expect(modalTitle.nextSibling.textContent).toEqual('warning');
    });

    it('renders success variant', () => {
      const { getByTestId } = render(
        <AlertModal
          title="success"
          isOpen={isOpen}
          onClose={closeFn}
          icon="success"
          footerNode={<p>footer</p>}
        >
          <Body />
        </AlertModal>,
      );

      const modalTitle = getByTestId('title-icon');
      expect(modalTitle.nextSibling.textContent).toEqual('success');
    });

    it('renders danger variant', () => {
      const { getByTestId } = render(
        <AlertModal
          title="danger"
          isOpen={isOpen}
          onClose={closeFn}
          icon="danger"
          footerNode={<p>footer</p>}
        >
          <Body />
        </AlertModal>,
      );

      const modalTitle = getByTestId('title-icon');
      expect(modalTitle.nextSibling.textContent).toEqual('danger');
    });
  });
});
