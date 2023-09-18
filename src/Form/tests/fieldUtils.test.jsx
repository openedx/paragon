import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  callAllHandlers,
  useHasValue,
  mergeAttributeValues,
  useIdList,
  omitUndefinedProperties,
} from '../fieldUtils';

describe('omitUndefinedProperties', () => {
  it('removes undefined properties from an object', () => {
    const source = {
      one: 1,
      two: undefined,
      three: 3,
      four: null,
      five: '',
    };
    const output = omitUndefinedProperties(source);
    expect(output).toMatchObject({
      one: 1,
      three: 3,
      four: null,
      five: '',
    });
  });
  it('returns an empty object if no source is given', () => {
    const source = undefined;
    const output = omitUndefinedProperties(source);
    expect(output).toMatchObject({});
  });
});

describe('callAllHandlers', () => {
  it('returns a handler to call all handlers with a common parameter', () => {
    const parameter = 123;
    const first = jest.fn();
    const second = jest.fn();
    const third = jest.fn();
    const sharedHandler = callAllHandlers(first, second, third);
    sharedHandler(parameter);
    expect(first).toHaveBeenCalledWith(parameter);
    expect(second).toHaveBeenCalledWith(parameter);
    expect(third).toHaveBeenCalledWith(parameter);
  });
});

// eslint-disable-next-line react/prop-types
function IdListExample({ prefix, initialList }) {
  const [ids, useRegisteredId] = useIdList(prefix, initialList);
  const id1 = useRegisteredId();
  const id2 = useRegisteredId('explicit-id');
  return (
    <div>
      <span data-testid="id-list">{ids.join(' ')}</span>
      <span data-testid="first">{id1}</span>
      <span data-testid="second">{id2}</span>
    </div>
  );
}

describe('useIdList', () => {
  describe('with default', () => {
    it('starts with the default id', () => {
      render(
        <IdListExample prefix="prefix" initialList={['id-0']} />,
      );
      const idList = screen.getByTestId('id-list');
      const renderedIds = idList.textContent.split(' ');
      expect(renderedIds[0]).toBe('id-0');
    });
    it('generates a registered id', () => {
      render(
        <IdListExample prefix="prefix" initialList={['id-0']} />,
      );
      const idList = screen.getByTestId('id-list');
      const renderedIds = idList.textContent.split(' ');
      expect(renderedIds[1]).toBe('prefix-2');
    });
    it('registers an explicit id', () => {
      render(
        <IdListExample prefix="prefix" initialList={['id-0']} />,
      );
      const idList = screen.getByTestId('id-list');
      const renderedIds = idList.textContent.split(' ');
      expect(renderedIds[2]).toBe('explicit-id');
    });
  });
  describe('with no default', () => {
    it('only has the two ids', () => {
      render(<IdListExample prefix="prefix" />);
      const idList = screen.getByTestId('id-list');
      const renderedIds = idList.textContent.split(' ');
      expect(renderedIds.length).toBe(2);
    });
  });
});

describe('mergeAttributeValues', () => {
  it('joins not empty values with a space-delimited list', () => {
    const output = mergeAttributeValues('one', 'two', undefined, null, 'four');
    expect(output).toBe('one two four');
  });
  it('returns undefined if there are no values', () => {
    const output = mergeAttributeValues(undefined, null);
    expect(output).toBe(undefined);
  });
});

// eslint-disable-next-line react/prop-types
function HasValueExample({ defaultValue, value }) {
  const [hasValue, handleInputEvent] = useHasValue({ defaultValue, value });
  return (
    <div>
      {hasValue && <div data-testid="has-value">Has value</div>}
      <input data-testid="input" type="text" onBlur={handleInputEvent} />
    </div>
  );
}

describe('useHasValue', () => {
  describe('uncontrolled input with no default', () => {
    it('starts with the default id', () => {
      render(<HasValueExample />);
      expect(screen.queryByText('Has value')).toBe(null);
    });
    it('has value when a target blur event has a value', async () => {
      render(<HasValueExample />);
      const input = screen.getByTestId('input');
      await userEvent.type(input, 'hello');
      await userEvent.tab();

      expect(screen.getByTestId('has-value')).toBeInTheDocument();
    });
  });
});

describe('uncontrolled input with a default value', () => {
  it('starts with the default id', () => {
    render(
      <HasValueExample defaultValue="My value" />,
    );
    expect(screen.getByTestId('has-value')).toBeInTheDocument();
  });
  it('has no value when a target blur event has no value', async () => {
    render(
      <HasValueExample defaultValue="My value" />,
    );
    const input = screen.getByTestId('input');
    await userEvent.type(input, '');
    await userEvent.tab();

    expect(screen.queryByTestId('has-value')).toBe(null);
  });
});

describe('controlled value', () => {
  it('starts with the default id', () => {
    render(<HasValueExample value="My value" />);
    expect(screen.getByTestId('has-value')).toBeInTheDocument();
  });
  it(
    'continues to have a value despite a blur event saying there is not one but props say there is',
    async () => {
      render(<HasValueExample value="My value" />);
      const input = screen.getByTestId('input');
      await userEvent.type(input, '');
      await userEvent.tab();

      expect(screen.getByTestId('has-value')).toBeInTheDocument();
    },
  );
});
