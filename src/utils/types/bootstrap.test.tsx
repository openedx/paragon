/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import type { BsPropsWithAs, ComponentWithAsProp } from './bootstrap';

// Note: these are type-only tests. They don't actually do much at runtime; the important checks are at transpile time.

describe('BsPropsWithAs', () => {
  interface Props<As extends React.ElementType = 'table'> extends BsPropsWithAs<As> {
    otherProp?: number;
  }

  it('defines optional bsPrefix, className, and as but no other props', () => {
    const checkProps = <As extends React.ElementType = 'table'>(_props: Props<As>) => {};
    // These are all valid props per the prop definition:
    checkProps({ });
    checkProps({ bsPrefix: 'bs' });
    checkProps({ className: 'foo bar' });
    checkProps({ as: 'tr' });
    checkProps({ className: 'foo bar', as: 'button', otherProp: 15 });
    // But these are all invalid:
    // @ts-expect-error
    checkProps({ newProp: 10 });
    // @ts-expect-error
    checkProps({ onClick: () => {} });
    // @ts-expect-error
    checkProps({ id: 'id' });
    // @ts-expect-error
    checkProps({ children: <tr /> });
  });
});

describe('ComponentWithAsProp', () => {
  interface MyProps extends BsPropsWithAs {
    customProp?: string;
  }
  const MyComponent: ComponentWithAsProp<'div', MyProps> = (
    React.forwardRef<HTMLDivElement, MyProps>(
      ({ as: Inner = 'div', ...props }, ref) => <Inner {...props} ref={ref} />,
    )
  );

  // eslint-disable-next-line react/function-component-definition
  const CustomComponent: React.FC<{ requiredProp: string }> = () => <span />;

  it('is defined to wrap a <div> by default, and accepts related props', () => {
    // This is valid - by default it is a DIV so accepts props and ref related to DIV:
    const divClick: React.MouseEventHandler<HTMLDivElement> = () => {};
    const divRef: React.RefObject<HTMLDivElement> = { current: null };
    const valid = <MyComponent ref={divRef} onClick={divClick} customProp="foo" />;
  });

  it('is defined to wrap a <div> by default, and rejects unrelated props', () => {
    const btnRef: React.RefObject<HTMLButtonElement> = { current: null };
    // @ts-expect-error because the ref is to a <button> ref, but this is wrapping a <div>
    const invalidRef = <MyComponent ref={btnRef} customProp="foo" />;

    const btnClick: React.MouseEventHandler<HTMLButtonElement> = () => {};
    // @ts-expect-error because the handler is for a <button> event, but this is wrapping a <div>
    const invalidClick = <MyComponent onClick={btnClick} />;
  });

  it('can be changed to wrap a <canvas>, and accepts related props', () => {
    const canvasClick: React.MouseEventHandler<HTMLCanvasElement> = () => {};
    const canvasRef: React.RefObject<HTMLCanvasElement> = { current: null };
    const valid = <MyComponent as="canvas" ref={canvasRef} onClick={canvasClick} customProp="foo" />;
  });

  it('can be changed to wrap a <canvas>, and rejects unrelated props', () => {
    const btnRef: React.RefObject<HTMLButtonElement> = { current: null };
    // @ts-expect-error because the ref is to a <button> ref, but this is wrapping an <canvas>
    const invalidRef = <MyComponent as="canvas" ref={btnRef} customProp="foo" />;

    const btnClick: React.MouseEventHandler<HTMLButtonElement> = () => {};
    // @ts-expect-error because the handler is for a <button> event, but this is wrapping an <canvas>
    const invalidClick = <MyComponent as="canvas" onClick={btnClick} />;
  });

  it('can be changed to wrap a custom component, and accepts related props', () => {
    const valid = <MyComponent as={CustomComponent} requiredProp="hello" />;
  });

  it('can be changed to wrap a custom component, and rejects unrelated props', () => {
    // @ts-expect-error The onClick prop has not been declared for our custom component.
    const valid = <MyComponent as={CustomComponent} requiredProp="hello" onClick={() => {}} />;
  });
});
