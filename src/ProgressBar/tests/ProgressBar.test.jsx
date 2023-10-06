import React from 'react';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ProgressBar, { ANNOTATION_CLASS } from '..';

const ref = {
  current: {
    style: {
      marginLeft: '',
    },
    children: [
      {
        className: `${ANNOTATION_CLASS} someClass`,
        getBoundingClientRect: () => ({
          width: 24.58123,
        }),
      },
      {
        className: 'anotherClass',
        getBoundingClientRect: () => ({
          width: 55.96844,
        }),
      },
    ],
  },
};

function ProgressBarElement(props) {
  return (
    <ProgressBar.Annotated
      now={20}
      label="20%"
      threshold={50}
      thresholdLabel="50%"
      {...props}
    />
  );
}

describe('<ProgressBar.Annotated />', () => {
  describe('correct rendering', () => {
    it('renders without props', () => {
      const tree = renderer.create((
        <ProgressBar.Annotated />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders info blocks with calculated margins', () => {
      jest.spyOn(React, 'useRef').mockReturnValue(ref);
      render(<ProgressBarElement />);
      expect(ref.current.style.marginLeft).not.toBeFalsy();
    });
    it('renders correct variant for progress bar and annotation', () => {
      const progressVariant = 'success';
      const thresholdVariant = 'error';
      const wrapper = mount(<ProgressBarElement variant={progressVariant} thresholdVariant={thresholdVariant} />);
      expect(wrapper.find(`.pgn__annotation-${progressVariant}-bottom`).length).toBeGreaterThan(0);
      expect(wrapper.find(`.pgn__progress-bar--${progressVariant}`).length).toBeGreaterThan(0);
      expect(wrapper.find(`.pgn__annotation-${thresholdVariant}-top`).length).toBeGreaterThan(0);
      expect(wrapper.find(`.pgn__progress-bar--${thresholdVariant}`).length).toBeGreaterThan(0);
    });
    it('renders default variant for progress bar and annotation', () => {
      const wrapper = mount(<ProgressBarElement />);
      expect(wrapper.find('.pgn__annotation-warning-bottom').length).toBeGreaterThan(0);
      expect(wrapper.find('.pgn__progress-bar--warning').length).toBeGreaterThan(0);
      expect(wrapper.find('.pgn__annotation-dark-top').length).toBeGreaterThan(0);
      expect(wrapper.find('.pgn__progress-bar--dark').length).toBeGreaterThan(0);
    });
    it('renders hints with text', () => {
      const progressHint = 'first hint';
      const thresholdHint = 'second hint';
      const wrapper = mount(<ProgressBarElement progressHint={progressHint} thresholdHint={thresholdHint} />);
      expect(wrapper.find('.pgn__progress-hint').length).toBeGreaterThan(0);
      expect(wrapper.find('.pgn__progress-hint').at(0).text()).toEqual(progressHint);
      expect(wrapper.find('.pgn__progress-hint').at(1).text()).toEqual(thresholdHint);
    });
    it('renders hints with text', () => {
      const wrapper = mount(<ProgressBarElement now={30} threshold={40} />);
      expect(wrapper.find('.pgn__progress-hint').length).toBeGreaterThan(0);
      expect(wrapper.find('.pgn__progress-info').get(0).props.children[0]).toEqual(false);
      expect(wrapper.find('.pgn__progress-info').get(1).props.children[0]).toEqual(false);
      wrapper.setProps({ now: 70, threshold: 70 });
      expect(wrapper.find('.pgn__progress-info').get(0).props.children[2]).toEqual(false);
      expect(wrapper.find('.pgn__progress-info').get(1).props.children[2]).toEqual(false);
    });
    it('should apply styles based on direction for threshold', () => {
      window.getComputedStyle = jest.fn().mockReturnValue({ getPropertyValue: () => 'rtl' });
      const { container } = render(<ProgressBarElement />);
      const progressInfo = container.querySelector('.pgn__progress-info');
      const computedStyles = window.getComputedStyle(progressInfo);

      expect(computedStyles.getPropertyValue('directory')).toBe('rtl');
      window.getComputedStyle.mockRestore();
    });
  });
});
