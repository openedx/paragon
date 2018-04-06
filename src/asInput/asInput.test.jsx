/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';

import asInput, { getDisplayName } from './index';

function testComponent(props) {
  return (
    <input
      id={props.id}
      defaultValue={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
    />
  );
}

const InputTestComponent = asInput(testComponent);
const baseProps = {
  type: 'text',
  name: 'test',
  label: 'test component',
  description: 'i am a test component',
};

describe('getDisplayName', () => {
  it('returns the proper display name', () => {
    expect(getDisplayName({ displayName: 'foo' })).toEqual('foo');
    expect(getDisplayName({ name: 'bar' })).toEqual('bar');
    expect(getDisplayName({})).toEqual('Component');
  });
});

describe('asInput()', () => {
  it('renders', () => {
    const props = {
      ...baseProps,
      value: 'foofoo',
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.find('label').text()).toEqual(props.label);
    expect(wrapper.find('#description-asInput1').text()).toEqual(props.description);
    expect(wrapper.prop('value')).toEqual(props.value);
  });

  it('creates generic prop id', () => {
    const props = {
      ...baseProps,
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.state('id')).toContain('asInput');
    expect(wrapper.find('label').prop('id')).toContain('asInput');
    expect(wrapper.find('input').prop('id')).toContain('asInput');
    expect(wrapper.find('small').prop('id')).toContain('asInput');
  });

  it('creates generic prop id when passed null id value', () => {
    const testId = null;
    const props = {
      ...baseProps,
      id: testId,
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.state('id')).toContain('asInput');
    expect(wrapper.find('label').prop('id')).toContain('asInput');
    expect(wrapper.find('input').prop('id')).toContain('asInput');
    expect(wrapper.find('small').prop('id')).toContain('asInput');
  });

  it('uses passed in prop id', () => {
    const testId = 'testId';
    const props = {
      ...baseProps,
      id: testId,
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.state('id')).toEqual(testId);
    expect(wrapper.find('label').prop('id')).toEqual(`label-${testId}`);
    expect(wrapper.find('input').prop('id')).toEqual(testId);
    expect(wrapper.find('small').prop('id')).toEqual(`description-${testId}`);
  });

  it('uses label as element type', () => {
    const testLabel = (<span lang="en">Label</span>);
    const props = {
      ...baseProps,
      label: testLabel,
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.find('label').children()).toHaveLength(1);
    expect(wrapper.find('label').children().at(0).text()).toEqual('Label');
    expect(wrapper.find('label').children().at(0).prop('lang')).toEqual('en');
  });

  it('overrides state value when props value changes', () => {
    const initValue = 'foofoo';
    const newValue = 'barbar';
    const props = {
      ...baseProps,
      value: initValue,
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.state('value')).toEqual(initValue);
    wrapper.setProps({
      value: newValue,
    });
    expect(wrapper.state('value')).toEqual(newValue);
  });

  describe('fires', () => {
    it('blur handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onBlur: spy,
      };
      const wrapper = mount(<InputTestComponent {...props} />);
      wrapper.find('input').simulate('blur');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('change handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onChange: spy,
      };
      const wrapper = mount(<InputTestComponent {...props} />);
      wrapper.find('input').simulate('change');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('validation properties', () => {
      it('ignores props if validator is defined', () => {
        const spy = jest.fn();
        spy.mockReturnValue({ isValid: false });
        const props = {
          ...baseProps,
          validator: spy,
          isValid: false,
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        expect(wrapper.state('isValid')).toEqual(true); // default is true, ignoring our prop

        wrapper.setProps({ isValid: true });
        wrapper.find('input').simulate('blur'); // trigger validation
        expect(wrapper.state('isValid')).toEqual(false); // validator set false, ignoring our prop

        wrapper.setProps({ isValid: true });
        expect(wrapper.state('isValid')).toEqual(false); // resetting prop changes nothing
      });

      it('ignores validationMessage prop if validator is defined', () => {
        const spy = jest.fn();
        spy.mockReturnValue({ validationMessage: 'Spy' });
        const props = {
          ...baseProps,
          validator: spy,
          validationMessage: 'Prop',
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        expect(wrapper.state('validationMessage')).toEqual(''); // default is '', ignoring our prop

        wrapper.find('input').simulate('blur'); // trigger validation
        expect(wrapper.state('validationMessage')).toEqual('Spy'); // validator set Spy, ignoring our prop

        wrapper.setProps({ validationMessage: 'Reset' });
        expect(wrapper.state('validationMessage')).toEqual('Spy'); // resetting prop changes nothing
      });

      it('ignores dangerIconDescription prop if validator is defined', () => {
        const spy = jest.fn();
        spy.mockReturnValue({ dangerIconDescription: 'Spy' });
        const props = {
          ...baseProps,
          validator: spy,
          dangerIconDescription: 'Prop',
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        expect(wrapper.state('dangerIconDescription')).toEqual(''); // default is '', ignoring our prop

        wrapper.find('input').simulate('blur'); // trigger validation
        expect(wrapper.state('dangerIconDescription')).toEqual('Spy'); // validator set Spy, ignoring our prop

        wrapper.setProps({ dangerIconDescription: 'Reset' });
        expect(wrapper.state('dangerIconDescription')).toEqual('Spy'); // resetting prop changes nothing
      });

      it('uses props if validator becomes undefined', () => {
        const spy = jest.fn();
        spy.mockReturnValue({ validationMessage: 'Spy' });
        const props = {
          ...baseProps,
          validator: spy,
          isValid: false,
          validationMessage: 'Prop',
          dangerIconDescription: 'Prop',
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        expect(wrapper.state('validationMessage')).toEqual('');
        expect(wrapper.state('dangerIconDescription')).toEqual('');

        wrapper.setProps({ validator: null });
        expect(wrapper.state('validationMessage')).toEqual('Prop');
        expect(wrapper.state('dangerIconDescription')).toEqual('Prop');
      });

      it('uses validationMessage as element type', () => {
        const testMessage = (<span lang="en">Validation Message</span>);
        const props = {
          ...baseProps,
          isValid: false,
          validationMessage: testMessage,
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        expect(wrapper.state('validationMessage')).toEqual(testMessage);
      });

      it('uses isValid to display validation message', () => {
        const props = {
          ...baseProps,
          isValid: false,
          validationMessage: 'Nope!',
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        const err = wrapper.find('.form-control-feedback');
        expect(err.text()).toEqual('Nope!');

        wrapper.setProps({ validationMessage: 'New Message' });
        expect(err.text()).toEqual('New Message');

        wrapper.setProps({ isValid: true });
        expect(err.text()).toEqual('');
      });

      it('uses isValid to display validation message and danger icon with danger theme', () => {
        const props = {
          ...baseProps,
          themes: ['danger'],
          isValid: false,
          validationMessage: 'Nope!',
          dangerIconDescription: 'Error ',
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        const err = wrapper.find('.form-control-feedback');
        expect(err.text()).toEqual('Error Nope!');

        wrapper.setProps({ validationMessage: 'New Message' });
        expect(err.text()).toEqual('Error New Message');

        wrapper.setProps({ dangerIconDescription: 'Danger, Will Robinson! ' });
        expect(err.text()).toEqual('Danger, Will Robinson! New Message');

        wrapper.setProps({ isValid: true });
        expect(err.text()).toEqual('');
      });
    });

    describe('validator', () => {
      it('on blur', () => {
        const spy = jest.fn();
        spy.mockReturnValueOnce({ isValid: true });
        const props = {
          ...baseProps,
          validator: spy,
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        wrapper.find('input').simulate('blur');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      describe('and display error message when invalid', () => {
        let spy;
        let validationResult;
        let wrapper;

        beforeEach(() => {
          spy = jest.fn();
          validationResult = {
            isValid: false,
            validationMessage: 'Invalid!!1',
          };
          spy.mockReturnValueOnce(validationResult);
          const props = {
            ...baseProps,
            validator: spy,
          };
          wrapper = mount(<InputTestComponent {...props} />);
        });

        it('without theme', () => {
          wrapper.find('input').simulate('blur');
          expect(spy).toHaveBeenCalledTimes(1);
          const err = wrapper.find('.form-control-feedback');
          expect(err.exists()).toEqual(true);
          expect(err.text()).toEqual(validationResult.validationMessage);
        });

        it('with danger theme', () => {
          wrapper.setProps({ themes: ['danger'] });
          validationResult.dangerIconDescription = 'Error';

          // error div exists on the page when form is loaded
          const err = wrapper.find('.form-control-feedback');
          expect(err.exists()).toEqual(true);
          expect(err.hasClass('invalid-feedback')).toEqual(true);
          expect(err.prop('aria-live')).toEqual('polite');
          expect(err.text()).toEqual('');

          wrapper.find('input').simulate('blur');
          expect(spy).toHaveBeenCalledTimes(1);
          expect(err.exists()).toEqual(true);
          expect(err.text()).toEqual(validationResult.dangerIconDescription +
                                     validationResult.validationMessage);

          const dangerIcon = wrapper.find('.fa-exclamation-circle');
          expect(dangerIcon.exists()).toEqual(true);
          expect(dangerIcon.hasClass('fa')).toEqual(true);

          const dangerIconDescription = wrapper.find('.sr-only');
          expect(dangerIconDescription.exists()).toEqual(true);
          expect(dangerIconDescription.text()).toEqual(validationResult.dangerIconDescription);

          const inputElement = wrapper.find('.form-control');
          expect(inputElement.hasClass('is-invalid')).toEqual(true);
        });
      });
    });

    it('displayed inline', () => {
      const props = {
        ...baseProps,
        inline: true,
      };
      const wrapper = mount(<InputTestComponent {...props} />);
      const input = wrapper.find('.form-group');
      expect(input.hasClass('form-inline')).toEqual(true);
    });

    describe('input group addons', () => {
      it('does not create an input-group div if no input group addons are given', () => {
        const wrapper = mount(<InputTestComponent {...baseProps} />);
        const input = wrapper.find('.form-group');
        expect(input.find('.input-group').exists()).toEqual(false);
      });

      it('displays inputGroupPrepend', () => {
        const props = {
          ...baseProps,
          inputGroupPrepend: (
            <div className="input-group-text">
              {'$'}
            </div>
          ),
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        const input = wrapper.find('.form-group');
        expect(input.find('.input-group').exists()).toEqual(true);
        expect(input.find('.input-group-prepend').exists()).toEqual(true);
        expect(input.find('.input-group-prepend').text()).toEqual('$');
      });

      it('displays inputGroupAppend', () => {
        const props = {
          ...baseProps,
          inputGroupAppend: (
            <div className="input-group-text">
              {'.00'}
            </div>
          ),
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        const input = wrapper.find('.form-group');
        expect(input.find('.input-group').exists()).toEqual(true);
        expect(input.find('.input-group-append').exists()).toEqual(true);
        expect(input.find('.input-group-append').text()).toEqual('.00');
      });

      it('displays both inputGroupPrepend and inputGroupAppend', () => {
        const props = {
          ...baseProps,
          inputGroupPrepend: (
            <div className="input-group-text">
              {'$'}
            </div>
          ),
          inputGroupAppend: (
            <div className="input-group-text">
              {'.00'}
            </div>
          ),
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        const input = wrapper.find('.form-group');
        expect(input.find('.input-group').exists()).toEqual(true);
        expect(input.find('.input-group-prepend').exists()).toEqual(true);
        expect(input.find('.input-group-prepend').text()).toEqual('$');
        expect(input.find('.input-group-append').exists()).toEqual(true);
        expect(input.find('.input-group-append').text()).toEqual('.00');
      });
    });
  });
});
