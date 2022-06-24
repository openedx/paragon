import React from 'react';
import renderer from 'react-test-renderer';
import Sheet, { POSITIONS, VARIANTS } from './index';

/* eslint-disable react/prop-types */
jest.mock('./SheetContainer', () => function (props) {
  const { children, ...otherProps } = props;
  return (
    <sheet-container {...otherProps}>
      {children}
    </sheet-container>
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
      expect(renderJSON(<Sheet show={false} />)).toEqual(null);
      expect(renderJSON(<Sheet />)).not.toEqual(null);
    });
  });
});
