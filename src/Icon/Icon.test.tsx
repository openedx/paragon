import React from 'react';
import { render } from '@testing-library/react';
import * as ParagonIcons from '../../icons';
import { type IconName } from '../../icons';

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

/** A compile time check. Whatever React elements this wraps won't run at runtime. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CompileCheck(_props: { children: React.ReactNode }) { return null; }

describe('IconName type', () => {
  it('has correct typing', () => {
    /* eslint-disable @typescript-eslint/no-unused-vars */

    const realName: IconName = 'ArrowCircleDown';
    // @ts-expect-error This should be a compile-time error, as 'FooBarIcon' doesn't exist.
    const wrongName: IconName = 'FooBarIcon';

    /* eslint-enable @typescript-eslint/no-unused-vars */
  });
});

describe('<Icon />', () => {
  it('has correct typing', () => {
    <CompileCheck>
      {/* Correct usage */}
      <Icon src={ParagonIcons.ArrowCircleDown} id="icon123" size="sm" />
      {/* An empty <Icon /> is allowed; if not, the checks below would need to be modified. */}
      <Icon />

      {/* @ts-expect-error Using a non-existent icon from @openedx/paragon/icons is a type error */}
      <Icon src={ParagonIcons.FooBarIcon} />
      {/* @ts-expect-error The 'src' prop cannot be a string. */}
      <Icon src="string" />
      {/* @ts-expect-error Random props cannot be added */}
      <Icon foo="bar" />
      {/* @ts-expect-error This is not a valid size property */}
      <Icon size="big" />
    </CompileCheck>;
  });

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

    it('receives style or other arbitrary HTML properties correctly', () => {
      const { container } = render(<Icon src={BlankSrc} style={{ color: 'red' }} size="xs" />);
      const iconSpans = container.querySelectorAll('span');
      const iconSpan = iconSpans[0];

      expect(iconSpan.style.color).toEqual('red');
    });
  });
});
