import initStoryshots from '@storybook/addon-storyshots';
import '../src/utils/reactResponsive.mock';

// per https://github.com/storybooks/storybook/issues/2522
// TypeError: (0 , _reactDom.findDOMNode) is not a function errors due to a11y addon
jest.mock("react-dom", () => {
  return {
    render: () => null,
    unmountComponentAtNode: () => null,
    findDOMNode: () => null,
    createPortal: () => null,
  };
});

// Mock newId so that snapshots of id attributes don't change every time
jest.mock("../src/utils/newId", () => () => 'id1');

initStoryshots({
  storyKindRegex: /^((?!.*?Modal).)*$/,
});
