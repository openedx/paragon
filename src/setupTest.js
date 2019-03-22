// TODO: @jaebradley refactor this when Jest issue (https://github.com/facebook/jest/issues/4545#issuecomment-333004504) is patched
// eslint-disable-next-line no-unused-vars
import raf from './tempPolyfills'; // need to import this first to ignore warnings
// eslint-disable-next-line import/no-extraneous-dependencies, import/first
import Enzyme from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies, import/first
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
