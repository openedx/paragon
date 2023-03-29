import React from 'react';
import { mount } from 'enzyme';

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

let wrapper;

describe('<Icon />', () => {
  describe('props received correctly', () => {
    it('receives required props', () => {
      wrapper = mount(<Icon className={classNames} />);
      const iconSpans = wrapper.find('span');
      const iconSpan = iconSpans.at(0);

      expect(iconSpan.prop('id')).toContain('Icon');
      expect(iconSpan.hasClass(classNames[0])).toEqual(true);
      expect(iconSpan.hasClass(classNames[1])).toEqual(true);
    });
    it('handles null id properly', () => {
      const nullId = null;
      wrapper = mount(<Icon id={nullId} className={classNames} />);
      const iconSpans = wrapper.find('span');
      const iconSpan = iconSpans.at(0);

      expect(iconSpan.prop('id')).toContain('Icon');
      expect(iconSpan.hasClass(classNames[0])).toEqual(true);
      expect(iconSpan.hasClass(classNames[1])).toEqual(true);
    });
    it('generates unique ids when no id is provided', () => {
      wrapper = mount(<><Icon className={classNames} /><Icon className={classNames} /></>);
      const iconSpans = wrapper.find('span');
      const iconSpan1 = iconSpans.at(0);
      const iconSpan2 = iconSpans.at(1);
      const id1 = iconSpan1.prop('id');
      const id2 = iconSpan2.prop('id');

      expect(id1).toContain('Icon');
      expect(id2).toContain('Icon');
      expect(id1).not.toEqual(id2);
    });
    it('handles screenReaderText correctly', () => {
      wrapper = mount(<Icon id={testId} className={classNames} screenReaderText={srTest} />);
      const iconSpans = wrapper.find('span');

      expect(iconSpans.length).toEqual(2);
      expect(iconSpans.at(0).prop('id')).toEqual(testId);
      expect(iconSpans.at(1).hasClass('sr-only')).toEqual(true);
    });
    it('receives size prop correctly', () => {
      wrapper = mount(<Icon src={BlankSrc} className={classNames} size="xs" />);
      const iconSpans = wrapper.find('span');
      const iconSpan = iconSpans.at(0);

      expect(iconSpan.hasClass('pgn__icon__xs')).toEqual(true);
    });
  });
});
