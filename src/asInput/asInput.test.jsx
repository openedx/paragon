import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import asInput, { getDisplayName } from '.';

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
    render(<InputTestComponent {...props} />);
    const label = screen.getByText(props.label);
    const description = screen.getByText(baseProps.description);
    const input = screen.getByText(baseProps.label);

    expect(label).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('creates generic prop id', () => {
    const props = {
      ...baseProps,
    };
    render(<InputTestComponent {...props} />);
    const labelElement = screen.getByText(baseProps.label);
    const inputElement = labelElement.nextSibling;
    const smallElement = screen.getByText(baseProps.description);

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
    render(<InputTestComponent {...props} />);
    const labelElement = screen.getByText(baseProps.label);
    const inputElement = labelElement.nextSibling;
    const smallElement = screen.getByText(baseProps.description);

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
    render(<InputTestComponent {...props} />);
    const labelElement = screen.getByText(baseProps.label);
    const inputElement = labelElement.nextSibling;
    const smallElement = screen.getByText(baseProps.description);

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
    render(<InputTestComponent {...props} />);
    const label = screen.getByText('Label').parentElement;
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
    const { rerender } = render(<InputTestComponent {...props} />);

    expect(screen.getByText(baseProps.label).nextSibling.getAttribute('value')).toEqual(initValue);

    props.value = newValue;
    rerender(<InputTestComponent {...props} />);

    expect(screen.getByText(baseProps.label).nextSibling.getAttribute('value')).toEqual(newValue);
  });

  describe('fires', () => {
    it('blur handler', async () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onBlur: spy,
      };
      render(<InputTestComponent {...props} />);
      const input = screen.getByText(baseProps.label).nextSibling;
      input.focus();
      await userEvent.tab();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(input).not.toHaveFocus();
    });

    it('change handler', async () => {
      const message = 'new';
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onChange: spy,
      };
      render(<InputTestComponent {...props} />);
      const input = screen.getByText(baseProps.label).nextSibling;

      await userEvent.type(input, message);
      expect(spy).toHaveBeenCalledTimes(message.length);
    });

    it('keypress handler', async () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onKeyPress: spy,
      };
      render(<InputTestComponent {...props} />);
      const input = screen.getByText(baseProps.label).nextSibling;
      input.focus();

      await userEvent.keyboard('{enter}');
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
      const { rerender } = render(<InputTestComponent {...props} />);

      expect(screen.queryByText('Spy')).not.toBeInTheDocument();
      expect(screen.queryByText('Prop')).not.toBeInTheDocument();

      props.validator = null;
      rerender(<InputTestComponent {...props} />);

      expect(screen.getByText('Prop')).toBeInTheDocument();
    });

    it('uses validationMessage as element type', () => {
      const testMessage = <span lang="en">Validation Message</span>;
      const props = {
        ...baseProps,
        isValid: false,
        validationMessage: testMessage,
      };
      render(<InputTestComponent {...props} />);
      const validationMessage = screen.getByText('Validation Message');
      expect(validationMessage).toBeInTheDocument();
      expect(validationMessage).toHaveAttribute('lang', 'en');
    });

    it('uses isValid to display validation message', () => {
      const props = {
        ...baseProps,
        isValid: false,
        validationMessage: 'Nope!',
      };
      const { rerender } = render(<InputTestComponent {...props} />);
      const errorElement = screen.getByText('Nope!');
      expect(errorElement).toBeInTheDocument();

      props.validationMessage = 'New Message';
      rerender(<InputTestComponent {...props} />);
      expect(screen.getByText('New Message')).toBeInTheDocument();

      props.isValid = true;
      rerender(<InputTestComponent {...props} />);
      expect(screen.queryByText('New Message')).not.toBeInTheDocument();
    });

    it('uses isValid to display validation message and danger icon with danger theme', () => {
      const props = {
        ...baseProps,
        themes: ['danger'],
        isValid: false,
        validationMessage: 'Nope!',
        dangerIconDescription: 'Error ',
      };
      const { rerender } = render(<InputTestComponent {...props} />);
      const validationMessage = screen.getByTestId('validation-message');
      expect(validationMessage.textContent).toEqual('Error Nope!');

      const dangerIcon = screen.getByText('Error');
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
    it('on blur', async () => {
      const spy = jest.fn();
      spy.mockReturnValueOnce({ isValid: true });
      const props = {
        ...baseProps,
        validator: spy,
      };
      render(<InputTestComponent {...props} />);
      const input = screen.getByText(baseProps.label).nextSibling;
      input.focus();
      await userEvent.tab();

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

      it('without theme', async () => {
        render(<InputTestComponent {...props} />);
        const input = screen.getByText(baseProps.label).nextSibling;
        input.focus();
        await userEvent.tab();

        expect(spy).toHaveBeenCalledTimes(1);

        const err = screen.getByText(validationResult.validationMessage);
        expect(err).toBeInTheDocument();
      });

      it('with danger theme', async () => {
        const { rerender } = render(<InputTestComponent {...props} />);
        const input = screen.getByText(baseProps.label).nextSibling;
        input.focus();
        await userEvent.tab();
        expect(spy).toHaveBeenCalledTimes(1);

        const updatedProps = {
          ...props,
          themes: ['danger'],
        };
        validationResult.dangerIconDescription = 'Error';
        rerender(<InputTestComponent {...updatedProps} />);

        const err = screen.getByTestId('validation-message');

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
    render(<InputTestComponent {...props} />);
    const inputComponent = screen.getByText(props.label).parentElement;
    expect(inputComponent.classList.contains('form-inline')).toEqual(true);
  });

  describe('input group addons', () => {
    it('does not create an input-group div if no input group addons are given', () => {
      render(<InputTestComponent {...baseProps} />);
      const inputGroup = screen.queryByTestId('input-group');
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
      render(<InputTestComponent {...props} />);
      const inputGroup = screen.getByTestId('input-group');
      const inputGroupText = screen.getByText('$');

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
      render(<InputTestComponent {...props} />);
      const inputGroupText = screen.getByText('.00');

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
      render(<InputTestComponent {...props} />);
      const inputGroupTextAppend = screen.getByText('.00');
      const inputGroupTextPrepend = screen.getByText('$');

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
      render(<InputTestComponent {...props} />);
      const inputGroupText = screen.getByText('.00');
      const button = screen.getByText('Go');

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
      render(<InputTestComponent {...props} />);
      const inputGroupText1 = screen.getByText('$');
      const inputGroupText2 = screen.getByText('0.');

      expect(inputGroupText1).toBeInTheDocument();
      expect(inputGroupText2).toBeInTheDocument();
    });
  });
});
