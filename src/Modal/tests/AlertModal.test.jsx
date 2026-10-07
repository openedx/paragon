import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IntlProvider } from 'react-intl';
import AlertModal from '../AlertModal';
import { Info } from '../../../icons';

/* eslint-disable react/prop-types */
jest.mock('../Portal', () => function PortalMock(props) {
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

  it('renders without optional props', () => {
    render(
      <IntlProvider locale="en" messages={{}}>
        <AlertModal title="minimal" isOpen>
          <Body />
        </AlertModal>
      </IntlProvider>,
    );
    expect(screen.getByText('The body of alert.')).toBeInTheDocument();
    expect(screen.queryByText('footer')).not.toBeInTheDocument();
  });

  it('close button click invokes default no-op onClose without error', async () => {
    render(
      <IntlProvider locale="en" messages={{}}>
        <AlertModal title="closeable" isOpen hasCloseButton>
          <Body />
        </AlertModal>
      </IntlProvider>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
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
