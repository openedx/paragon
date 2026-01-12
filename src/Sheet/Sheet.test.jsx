import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Sheet, { POSITIONS, VARIANTS } from '.';

/* eslint-disable react/prop-types */
jest.mock('./SheetContainer', () => function SheetContainerMock(props) {
  const { children, className, ...otherProps } = props;
  const allClasses = ['sheet-container', className].filter(Boolean).join(' ');
  return (
    <div data-testid="sheet-container" className={allClasses} {...otherProps}>
      {children}
    </div>
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

const testContent = (<div className="sheet-content">Hi</div>);

const renderJSON = (jsxContent) => renderer.create(jsxContent).toJSON();

describe('<Sheet />', () => {
  describe('snapshots', () => {
    test('default args snapshot: bottom, show, light', () => {
      const el = renderJSON(<Sheet>{testContent}</Sheet>);
      expect(el).toMatchSnapshot();
    });

    test('blocking, left snapshot', () => {
      expect(
        renderJSON(<Sheet blocking position={POSITIONS.left} />),
      ).toMatchSnapshot();
    });

    test('dark, right snapshot', () => {
      expect(
        renderJSON(<Sheet position={POSITIONS.right} variant={VARIANTS.dark} />),
      ).toMatchSnapshot();
    });
  });
  describe('correct rendering', () => {
    it('returns empty render if show is false', () => {
      const { container } = render(<Sheet show={false} />);
      expect(container.firstChild).toBeNull();
      const { container: container2 } = render(<Sheet />);
      expect(container2.firstChild).not.toBeNull();
    });

    it('renders with custom className', () => {
      const customClassName = 'custom-class';
      const { container } = render(<Sheet className={customClassName} />);
      const sheetElement = container.querySelector('.pgn__sheet-component');

      expect(sheetElement).toBeInTheDocument();
      expect(sheetElement).toHaveClass('pgn__sheet-component');
      expect(sheetElement).toHaveClass(customClassName);
    });

    it('handles multiple custom className', () => {
      const customClasses = 'class-one class-two';
      const { container } = render(<Sheet className={customClasses} />);
      const sheetElement = container.querySelector('.pgn__sheet-component');

      expect(sheetElement).toHaveClass('pgn__sheet-component');
      expect(sheetElement).toHaveClass('class-one');
      expect(sheetElement).toHaveClass('class-two');
    });

    it('renders with custom className on SheetContainer', () => {
      const customClassName = 'custom-container-class';
      const { getByTestId } = render(<Sheet containerClassName={customClassName} />);
      const sheetContainer = getByTestId('sheet-container');

      expect(sheetContainer).toBeInTheDocument();
      expect(sheetContainer).toHaveClass('sheet-container');
      expect(sheetContainer).toHaveClass(customClassName);
    });

    it('handles multiple custom className values on SheetContainer', () => {
      const customClasses = 'container-one container-two';
      const { getByTestId } = render(<Sheet containerClassName={customClasses} />);
      const sheetContainer = getByTestId('sheet-container');

      expect(sheetContainer).toBeInTheDocument();
      expect(sheetContainer).toHaveClass('sheet-container');
      expect(sheetContainer).toHaveClass('container-one');
      expect(sheetContainer).toHaveClass('container-two');
    });

    it('handles className and containerClassName simultaneously', () => {
      const containerClass = 'container-class';
      const sheetClass = 'sheet-class';
      const { getByTestId, container } = render(
        <Sheet containerClassName={containerClass} className={sheetClass} />,
      );
      const sheetContainer = getByTestId('sheet-container');
      const sheetElement = container.querySelector('.pgn__sheet-component');

      expect(sheetContainer).toBeInTheDocument();
      expect(sheetContainer).toHaveClass('sheet-container');
      expect(sheetContainer).toHaveClass(containerClass);

      expect(sheetElement).toBeInTheDocument();
      expect(sheetElement).toHaveClass('pgn__sheet-component');
      expect(sheetElement).toHaveClass(sheetClass);
    });

    it('renders with correct size classes', () => {
      const { unmount } = render(<Sheet size="sm" />);
      const sheetSm = screen.getByRole('alert');

      expect(sheetSm).toHaveClass('pgn__sheet-sm');

      unmount();

      render(<Sheet size="lg" />);
      const sheetLg = screen.getByRole('alert');

      expect(sheetLg).toHaveClass('pgn__sheet-lg');
    });

    it('renders default size (md) when no size is provided', () => {
      render(<Sheet />);
      const sheet = screen.getByRole('alert');
      expect(sheet).toHaveClass('pgn__sheet-md');
    });
  });
});
