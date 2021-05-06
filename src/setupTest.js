import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('@emotion/react', () => {
  const original = jest.requireActual('@emotion/react');
  return {
    ...original,
    useTheme: () => ({
      colors: { gray: 'gray' },
      formFeedback: {
        validColor: 'green',
        invalidColor: 'red',
      },
      text: {
        fontSize: { percent: { sm: '.875rem' } },
        muted: 'blue',
      },
    }),
  };
});
