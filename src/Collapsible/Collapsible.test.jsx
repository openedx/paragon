import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import Collapsible from '.';

const collapsibleContent = (
  <>
    <Collapsible.Trigger className="trigger d-flex align-items-center">
      <h4 className="flex-grow-1">A heading</h4>

      <span className="collapsible-card-header-icon" aria-hidden>
        <Collapsible.Visible whenClosed>+</Collapsible.Visible>
        <Collapsible.Visible whenOpen>-</Collapsible.Visible>
      </span>
    </Collapsible.Trigger>

    <Collapsible.Trigger className="close-only" closeOnly>Close</Collapsible.Trigger>
    <Collapsible.Trigger className="open-only" openOnly>Open</Collapsible.Trigger>

    <Collapsible.Body transitionWrapper={<div />}>
      <p className="example-content">
        Example content
      </p>
    </Collapsible.Body>
  </>
);

const collapsibleIsOpen = (wrapper) => {
  expect(wrapper.find('.example-content').length).toEqual(1);
};

const collapsibleIsClosed = (wrapper) => {
  expect(wrapper.find('.example-content').length).toEqual(0);
};

describe('<Collapsible />', () => {
  describe('Uncontrolled Rendering', () => {
    it('renders closed by default', () => {
      const tree = renderer.create((
        <Collapsible.Advanced>
          {collapsibleContent}
        </Collapsible.Advanced>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders open by default', () => {
      const tree = renderer.create((
        <Collapsible.Advanced defaultOpen>
          {collapsibleContent}
        </Collapsible.Advanced>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Controlled Rendering', () => {
    it('renders closed by default', () => {
      const tree = renderer.create((
        <Collapsible.Advanced open={false}>
          {collapsibleContent}
        </Collapsible.Advanced>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders open by default', () => {
      const tree = renderer.create((
        <Collapsible.Advanced>
          {collapsibleContent}
        </Collapsible.Advanced>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Imperative Methods', () => {
    const wrapper = mount(
      <Collapsible.Advanced>{collapsibleContent}</Collapsible.Advanced>,
    );

    collapsibleIsClosed(wrapper);

    it('opens on .open()', () => {
      wrapper.setProps({ open: true });
      wrapper.update();
      collapsibleIsOpen(wrapper);
    });

    it('closes on .close()', () => {
      wrapper.setProps({ open: false });
      wrapper.update();
      collapsibleIsClosed(wrapper);
    });
    it('correct behavior with unmountOnExit', async () => {
      let i = 0;
      function Comp() {
        i += 1;
        return <h1>Hello world</h1>;
      }
      const component = mount((
        <Collapsible.Advanced unmountOnExit={false}>
          <Collapsible.Body>
            <Comp />
          </Collapsible.Body>
        </Collapsible.Advanced>
      ));
      const instance = component.instance();
      await act(() => {
        instance.open();
        component.update();
        expect(i).toEqual(1);
        instance.close();
        component.update();
        instance.open();
        component.update();
        expect(i).toEqual(1);
      });
    });
  });

  describe('Mouse Interactions', () => {
    const wrapper = mount(<Collapsible.Advanced>{collapsibleContent}</Collapsible.Advanced>);
    const collapsible = wrapper.instance();
    const trigger = wrapper.find('.trigger[role="button"]');
    const closeOnlyTrigger = wrapper.find('.close-only[role="button"]');
    const openOnlyTrigger = wrapper.find('.open-only[role="button"]');

    it('opens on trigger click', () => {
      trigger.simulate('click'); // Open
      collapsibleIsOpen(wrapper);
    });

    it('closes on trigger click', () => {
      trigger.simulate('click'); // Close
      collapsibleIsClosed(wrapper);
    });

    it('does not open on close only trigger click', () => {
      collapsible.close();
      wrapper.update();
      closeOnlyTrigger.simulate('click'); // No-op
      collapsibleIsClosed(wrapper);
    });

    it('closes on close only trigger click', () => {
      collapsible.open();
      wrapper.update();
      closeOnlyTrigger.simulate('click'); // Close
      collapsibleIsClosed(wrapper);
    });

    it('does not close on open only trigger click', () => {
      collapsible.open();
      wrapper.update();
      openOnlyTrigger.simulate('click'); // No-op
      collapsibleIsOpen(wrapper);
    });

    it('opens on opens only trigger click', () => {
      collapsible.close();
      wrapper.update();
      openOnlyTrigger.simulate('click'); // Open
      collapsibleIsOpen(wrapper);
    });
  });

  describe('Keyboard Interactions', () => {
    const wrapper = mount(<Collapsible.Advanced>{collapsibleContent}</Collapsible.Advanced>);
    const collapsible = wrapper.instance();
    const trigger = wrapper.find('.trigger[role="button"]');
    const closeOnlyTrigger = wrapper.find('.close-only[role="button"]');
    const openOnlyTrigger = wrapper.find('.open-only[role="button"]');

    it('opens on trigger enter keydown', () => {
      trigger.simulate('keyDown', { key: 'Enter' }); // Open
      collapsibleIsOpen(wrapper);
    });

    it('closes on trigger enter keydown', () => {
      trigger.simulate('keyDown', { key: 'Enter' }); // Close
      collapsibleIsClosed(wrapper);
    });

    it('does not open on close only trigger enter keydown', () => {
      collapsible.close();
      wrapper.update();
      closeOnlyTrigger.simulate('keyDown', { key: 'Enter' }); // No-op
      collapsibleIsClosed(wrapper);
    });

    it('closes on close only trigger enter keydown', () => {
      collapsible.open();
      wrapper.update();
      closeOnlyTrigger.simulate('keyDown', { key: 'Enter' }); // Close
      collapsibleIsClosed(wrapper);
    });

    it('does not close on open only trigger enter keydown', () => {
      collapsible.open();
      wrapper.update();
      openOnlyTrigger.simulate('keyDown', { key: 'Enter' }); // No-op
      collapsibleIsOpen(wrapper);
    });

    it('opens on opens only trigger enter keydown', () => {
      collapsible.close();
      wrapper.update();
      openOnlyTrigger.simulate('keyDown', { key: 'Enter' }); // Open
      collapsibleIsOpen(wrapper);
    });
  });
});
