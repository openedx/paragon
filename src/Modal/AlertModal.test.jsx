import React from 'react';
import { shallow } from 'enzyme';
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
  describe('when isOpen', () => {
    const wrapper = shallow((
      <AlertModal
        title="some title"
        isOpen={isOpen}
        onClose={closeFn}
        footerNode={<p>footer</p>}
      >
        <Body />
      </AlertModal>
    ));

    it('renders the body', () => {
      const body = wrapper.find(Body);
      expect(body.length).toBe(1);
    });
  });
  describe('with variant prop', () => {
    it('renders warning variant', () => {
      const wrapper = shallow((
        <AlertModal
          title="some title"
          isOpen={isOpen}
          onClose={closeFn}
          icon="warning"
          footerNode={<p>footer</p>}
        >
          <Body />
        </AlertModal>
      ));
      const modalTitleIcon = wrapper.find('.pgn__alert-modal__title_icon');
      const src = modalTitleIcon.prop('src');
      expect(src).toEqual('warning');
    });
    it('renders success variant', () => {
      const wrapper = shallow((
        <AlertModal
          title="some title"
          isOpen={isOpen}
          onClose={closeFn}
          icon="success"
          footerNode={<p>footer</p>}
        >
          <Body />
        </AlertModal>
      ));
      const modalTitleIcon = wrapper.find('.pgn__alert-modal__title_icon');
      const src = modalTitleIcon.prop('src');
      expect(src).toEqual('success');
    });
    it('renders danger variant', () => {
      const wrapper = shallow((
        <AlertModal
          title="some title"
          isOpen={isOpen}
          onClose={closeFn}
          icon="danger"
          footerNode={<p>footer</p>}
        >
          <Body />
        </AlertModal>
      ));
      const modalTitleIcon = wrapper.find('.pgn__alert-modal__title_icon');
      const src = modalTitleIcon.prop('src');
      expect(src).toEqual('danger');
    });
  });
});
