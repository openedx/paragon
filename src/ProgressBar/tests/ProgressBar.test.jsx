import React from 'react';
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
      const { container } = render(
        <ProgressBarElement
          variant={progressVariant}
          thresholdVariant={thresholdVariant}
        />,
      );
      expect(container.querySelector(`.pgn__annotation-${progressVariant}-bottom`)).toBeInTheDocument();
      expect(container.querySelector(`.pgn__progress-bar--${progressVariant}`)).toBeInTheDocument();
      expect(container.querySelector(`.pgn__annotation-${thresholdVariant}-top`)).toBeInTheDocument();
      expect(container.querySelector(`.pgn__progress-bar--${thresholdVariant}`)).toBeInTheDocument();
    });
    it('renders default variant for progress bar and annotation', () => {
      const { container } = render(<ProgressBarElement />);
      expect(container.querySelector('.pgn__annotation-warning-bottom')).toBeInTheDocument();
      expect(container.querySelector('.pgn__progress-bar--warning')).toBeInTheDocument();
      expect(container.querySelector('.pgn__annotation-dark-top')).toBeInTheDocument();
      expect(container.querySelector('.pgn__progress-bar--dark')).toBeInTheDocument();
    });
    it('renders hints with text', () => {
      const progressHint = 'first hint';
      const thresholdHint = 'second hint';
      const { getByText } = render(<ProgressBarElement progressHint={progressHint} thresholdHint={thresholdHint} />);
      expect(getByText(progressHint)).toBeInTheDocument();
      expect(getByText(thresholdHint)).toBeInTheDocument();
    });
    it('renders progress hints when now is 30 and threshold is 40', () => {
      const now = 30;
      const threshold = 40;
      const { getAllByTestId } = render(<ProgressBarElement now={now} threshold={threshold} />);
      const progressHints = getAllByTestId('progress-hint');
      expect(progressHints.length).toBeGreaterThan(0);

      expect(progressHints[0].textContent).toEqual('');
      expect(progressHints[1].textContent).toEqual('');
    });

    it('renders progress hints when now is 70 and threshold is 70', () => {
      const { getAllByTestId } = render(<ProgressBarElement now={70} threshold={70} />);
      const progressHints = getAllByTestId('progress-hint');
      expect(progressHints.length).toBeGreaterThan(0);

      expect(progressHints[0].textContent).toEqual('');
      expect(progressHints[1].textContent).toEqual('');
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
