import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import asInput, { getDisplayName } from './index';

function testComponent(props) {
  return (
    <input
      id={props.id}
      defaultValue={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
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
    const { getByText } = render(<InputTestComponent {...props} />);
    const label = getByText(props.label);
    const description = getByText(baseProps.description);
    const input = getByText(baseProps.label);

    expect(label).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('creates generic prop id', () => {
    const props = {
      ...baseProps,
    };
    const { getByText } = render(<InputTestComponent {...props} />);
    const labelElement = getByText(baseProps.label);
    const inputElement = labelElement.nextSibling;
    const smallElement = getByText(baseProps.description);

    expect(labelElement.getAttribute('id')).toContain('asInput');
    expect(inputElement.getAttribute('id')).toContain('asInput');
    expect(smallElement.getAttribute('id')).toContain('asInput');
  });

  it('creates generic prop id when passed null id value', () => {
    const testId = null;
    const props = {
      ...baseProps,
      id: testId,
    };
    const { getByText } = render(<InputTestComponent {...props} />);
    const labelElement = getByText(baseProps.label);
    const inputElement = labelElement.nextSibling;
    const smallElement = getByText(baseProps.description);

    expect(labelElement.getAttribute('id')).toContain('asInput');
    expect(inputElement.getAttribute('id')).toContain('asInput');
    expect(smallElement.getAttribute('id')).toContain('asInput');
  });

  it('uses passed-in prop id', () => {
    const testId = 'testId';
    const props = {
      ...baseProps,
      id: testId,
    };
    const { getByText } = render(<InputTestComponent {...props} />);
    const labelElement = getByText(baseProps.label);
    const inputElement = labelElement.nextSibling;
    const smallElement = getByText(baseProps.description);

    expect(labelElement.getAttribute('id')).toEqual(`label-${testId}`);
    expect(inputElement.getAttribute('id')).toEqual(testId);
    expect(smallElement.getAttribute('id')).toEqual(`description-${testId}`);
  });

  it('uses label as an element type', () => {
    const testLabel = <span lang="en">Label</span>;
    const props = {
      ...baseProps,
      label: testLabel,
    };
    const { getByText } = render(<InputTestComponent {...props} />);
    const label = getByText('Label').parentElement;
    expect(label).toBeInTheDocument();
    expect(label.children).toHaveLength(1);
    expect(label.children[0]).toHaveAttribute('lang', 'en');
  });

  it('overrides state value when props value changes', () => {
    const initValue = 'foofoo';
    const newValue = 'barbar';
    const props = {
      ...baseProps,
      value: initValue,
    };
    const { getByText, rerender } = render(<InputTestComponent {...props} />);

    expect(getByText(baseProps.label).nextSibling.getAttribute('value')).toEqual(initValue);

    props.value = newValue;
    rerender(<InputTestComponent {...props} />);

    expect(getByText(baseProps.label).nextSibling.getAttribute('value')).toEqual(newValue);
  });

  describe('fires', () => {
    it('blur handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onBlur: spy,
      };
      const { getByText } = render(<InputTestComponent {...props} />);
      const input = getByText(baseProps.label).nextSibling;

      fireEvent.blur(input);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('change handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onChange: spy,
      };
      const { getByText } = render(<InputTestComponent {...props} />);
      const input = getByText(baseProps.label).nextSibling;

      fireEvent.change(input, { target: { value: 'new' } });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('keypress handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onKeyPress: spy,
      };
      const { getByText } = render(<InputTestComponent {...props} />);
      const input = getByText(baseProps.label).nextSibling;

      fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('validation properties', () => {
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
      const { rerender, getByText, queryByText } = render(<InputTestComponent {...props} />);

      expect(queryByText('Spy')).not.toBeInTheDocument();
      expect(queryByText('Prop')).not.toBeInTheDocument();

      props.validator = null;
      rerender(<InputTestComponent {...props} />);

      expect(getByText('Prop')).toBeInTheDocument();
    });

    it('uses validationMessage as element type', () => {
      const testMessage = <span lang="en">Validation Message</span>;
      const props = {
        ...baseProps,
        isValid: false,
        validationMessage: testMessage,
      };
      const { getByText } = render(<InputTestComponent {...props} />);
      const validationMessage = getByText('Validation Message');
      expect(validationMessage).toBeInTheDocument();
      expect(validationMessage).toHaveAttribute('lang', 'en');
    });

    it('uses isValid to display validation message', () => {
      const props = {
        ...baseProps,
        isValid: false,
        validationMessage: 'Nope!',
      };
      const { rerender, getByText, queryByText } = render(<InputTestComponent {...props} />);
      const errorElement = getByText('Nope!');
      expect(errorElement).toBeInTheDocument();

      props.validationMessage = 'New Message';
      rerender(<InputTestComponent {...props} />);
      expect(getByText('New Message')).toBeInTheDocument();

      props.isValid = true;
      rerender(<InputTestComponent {...props} />);
      expect(queryByText('New Message')).not.toBeInTheDocument();
    });

    it('uses isValid to display validation message and danger icon with danger theme', () => {
      const props = {
        ...baseProps,
        themes: ['danger'],
        isValid: false,
        validationMessage: 'Nope!',
        dangerIconDescription: 'Error ',
      };
      const { rerender, getByText, getByTestId } = render(<InputTestComponent {...props} />);
      const validationMessage = getByTestId('validation-message');
      expect(validationMessage.textContent).toEqual('Error Nope!');

      const dangerIcon = getByText('Error');
      expect(dangerIcon).toBeInTheDocument();

      props.validationMessage = 'New Message';
      rerender(<InputTestComponent {...props} />);
      expect(validationMessage.textContent).toEqual('Error New Message');

      props.dangerIconDescription = 'Danger, Will Robinson! ';
      rerender(<InputTestComponent {...props} />);
      expect(validationMessage.textContent).toEqual('Danger, Will Robinson! New Message');

      props.isValid = true;
      rerender(<InputTestComponent {...props} />);
      expect(validationMessage.textContent).toEqual('');
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
      const { getByText } = render(<InputTestComponent {...props} />);
      const input = getByText(baseProps.label).nextSibling;

      fireEvent.blur(input);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('and display error message when invalid', () => {
      const spy = jest.fn();
      const validationResult = {
        isValid: false,
        validationMessage: 'Invalid!!1',
      };
      const props = {
        ...baseProps,
        validator: spy,
      };

      beforeEach(() => {
        spy.mockReturnValueOnce(validationResult);
      });

      afterEach(() => {
        spy.mockClear();
      });

      it('without theme', () => {
        const { getByText } = render(<InputTestComponent {...props} />);
        const input = getByText(baseProps.label).nextSibling;

        fireEvent.blur(input);

        expect(spy).toHaveBeenCalledTimes(1);

        const err = getByText(validationResult.validationMessage);
        expect(err).toBeInTheDocument();
      });

      it('with danger theme', () => {
        const { getByText, getByTestId, rerender } = render(<InputTestComponent {...props} />);
        const input = getByText(baseProps.label).nextSibling;
        fireEvent.blur(input);
        expect(spy).toHaveBeenCalledTimes(1);

        const updatedProps = {
          ...props,
          themes: ['danger'],
        };
        validationResult.dangerIconDescription = 'Error';
        rerender(<InputTestComponent {...updatedProps} />);

        const err = getByTestId('validation-message');

        expect(err).toBeInTheDocument();
        expect(err.textContent).toEqual(validationResult.validationMessage);
      });
    });
  });

  it('displays inline', () => {
    const props = {
      ...baseProps,
      inline: true,
    };
    const { getByText } = render(<InputTestComponent {...props} />);
    const inputComponent = getByText(props.label).parentElement;
    expect(inputComponent.classList.contains('form-inline')).toEqual(true);
  });

  describe('input group addons', () => {
    it('does not create an input-group div if no input group addons are given', () => {
      const { queryByTestId } = render(<InputTestComponent {...baseProps} />);
      const inputGroup = queryByTestId('input-group-id');
      expect(inputGroup).not.toBeInTheDocument();
    });

    it('displays inputGroupPrepend', () => {
      const props = {
        ...baseProps,
        inputGroupPrepend: (
          <div className="input-group-text">
            $
          </div>
        ),
      };
      const { getByTestId, getByText } = render(<InputTestComponent {...props} />);
      const inputGroup = getByTestId('input-group-id');
      const inputGroupText = getByText('$');

      expect(inputGroup).toBeInTheDocument();
      expect(inputGroupText).toBeInTheDocument();
    });

    it('displays inputGroupAppend', () => {
      const props = {
        ...baseProps,
        inputGroupAppend: (
          <div className="input-group-text">
            .00
          </div>
        ),
      };
      const { getByText } = render(<InputTestComponent {...props} />);
      const inputGroupText = getByText('.00');

      expect(inputGroupText).toBeInTheDocument();
    });

    it('displays both inputGroupPrepend and inputGroupAppend', () => {
      const props = {
        ...baseProps,
        inputGroupPrepend: (
          <div className="input-group-text">
            $
          </div>
        ),
        inputGroupAppend: (
          <div className="input-group-text">
            .00
          </div>
        ),
      };
      const { getByText } = render(<InputTestComponent {...props} />);
      const inputGroupTextAppend = getByText('.00');
      const inputGroupTextPrepend = getByText('$');

      expect(inputGroupTextAppend).toBeInTheDocument();
      expect(inputGroupTextPrepend).toBeInTheDocument();
    });

    it('displays multiple inputGroupAppend elements', () => {
      const props = {
        ...baseProps,
        inputGroupAppend: [
          <div className="input-group-text">
            .00
          </div>,
          <div className="input-group-text">
            <button type="button" className="btn">Go</button>
          </div>,
        ],
      };
      const { getByText } = render(<InputTestComponent {...props} />);
      const inputGroupText = getByText('.00');
      const button = getByText('Go');

      expect(inputGroupText).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });

    it('displays multiple inputGroupPrepend elements', () => {
      const props = {
        ...baseProps,
        inputGroupPrepend: [
          <div className="input-group-text">
            $
          </div>,
          <div className="input-group-text">
            0.
          </div>,
        ],
      };
      const { getByText } = render(<InputTestComponent {...props} />);
      const inputGroupText1 = getByText('$');
      const inputGroupText2 = getByText('0.');

      expect(inputGroupText1).toBeInTheDocument();
      expect(inputGroupText2).toBeInTheDocument();
    });
  });
});
