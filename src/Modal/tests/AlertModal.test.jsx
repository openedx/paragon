import { render, screen } from '@testing-library/react';

import { IntlProvider } from 'react-intl';
import AlertModal from '../AlertModal';
import { Info } from '../../../icons';

/* eslint-disable react/prop-types */
jest.mock('../Portal', () => (function PortalMock(props) {
  const { children, ...otherProps } = props;
  return (
    <paragon-portal {...otherProps}>
      {children}
    </paragon-portal>
  );
}));

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
    render(
      <IntlProvider locale="en" messages={{}}>
        <AlertModal
          title="some title"
          isOpen={isOpen}
          onClose={closeFn}
          footerNode={<p>footer</p>}
          isOverflowVisible={false}
        >
          <Body />
        </AlertModal>
      </IntlProvider>,
    );

    const body = screen.getByText('The body of alert.');
    expect(body).toBeInTheDocument();
  });

  describe('with variant prop', () => {
    it('renders warning variant', () => {
      render(
        <IntlProvider locale="en" messages={{}}>
          <AlertModal
            title="warning"
            isOpen={isOpen}
            onClose={closeFn}
            icon={Info}
            footerNode={<p>footer</p>}
            isOverflowVisible={false}
          >
            <Body />
          </AlertModal>
        </IntlProvider>,
      );

      const modalTitle = screen.getByTestId('title-icon');
      expect(modalTitle.nextSibling.textContent).toEqual('warning');
    });

    it('renders success variant', () => {
      render(
        <IntlProvider locale="en" messages={{}}>
          <AlertModal
            title="success"
            isOpen={isOpen}
            onClose={closeFn}
            icon={Info}
            footerNode={<p>footer</p>}
            isOverflowVisible={false}
          >
            <Body />
          </AlertModal>
        </IntlProvider>,
      );

      const modalTitle = screen.getByTestId('title-icon');
      expect(modalTitle.nextSibling.textContent).toEqual('success');
    });

    it('renders danger variant', () => {
      render(
        <IntlProvider locale="en" messages={{}}>
          <AlertModal
            title="danger"
            isOpen={isOpen}
            onClose={closeFn}
            icon={Info}
            footerNode={<p>footer</p>}
            isOverflowVisible={false}
          >
            <Body />
          </AlertModal>
        </IntlProvider>,
      );

      const modalTitle = screen.getByTestId('title-icon');
      expect(modalTitle.nextSibling.textContent).toEqual('danger');
    });
  });
});
