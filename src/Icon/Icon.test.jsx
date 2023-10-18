import React from 'react';
import { render } from '@testing-library/react';

import Icon from './index';

const testId = 'testId';
const classNames = [
  'fa',
  'fa-check',
];
const srTest = 'srTest';

function BlankSrc() {
  return <div />;
}

describe('<Icon />', () => {
  describe('props received correctly', () => {
    it('receives required props', () => {
      const { container } = render(<Icon className={classNames} />);
      const iconSpans = container.querySelectorAll('span');
      const iconSpan = iconSpans[0];

      expect(iconSpan.getAttribute('id')).toContain('Icon');
      expect(iconSpan.classList.contains(classNames[0])).toEqual(true);
      expect(iconSpan.classList.contains(classNames[1])).toEqual(true);
    });

    it('handles null id properly', () => {
      const nullId = null;
      const { container } = render(<Icon id={nullId} className={classNames} />);
      const iconSpans = container.querySelectorAll('span');
      const iconSpan = iconSpans[0];

      expect(iconSpan.getAttribute('id')).toContain('Icon');
      expect(iconSpan.classList.contains(classNames[0])).toEqual(true);
      expect(iconSpan.classList.contains(classNames[1])).toEqual(true);
    });

    it('generates unique ids when no id is provided', () => {
      const { container } = render(<><Icon className={classNames} /><Icon className={classNames} /></>);
      const iconSpans = container.querySelectorAll('span');
      const iconSpan1 = iconSpans[0];
      const iconSpan2 = iconSpans[1];
      const id1 = iconSpan1.getAttribute('id');
      const id2 = iconSpan2.getAttribute('id');

      expect(id1).toContain('Icon');
      expect(id2).toContain('Icon');
      expect(id1).not.toEqual(id2);
    });

    it('handles screenReaderText correctly', () => {
      const { container } = render(<Icon id={testId} className={classNames} screenReaderText={srTest} />);
      const iconSpans = container.querySelectorAll('span');

      expect(iconSpans.length).toEqual(2);
      expect(iconSpans[0].getAttribute('id')).toEqual(testId);
      expect(iconSpans[1].classList.contains('sr-only')).toEqual(true);
    });

    it('receives size prop correctly', () => {
      const { container } = render(<Icon src={BlankSrc} className={classNames} size="xs" />);
      const iconSpans = container.querySelectorAll('span');
      const iconSpan = iconSpans[0];

      expect(iconSpan.classList.contains('pgn__icon__xs')).toEqual(true);
    });
  });
});
