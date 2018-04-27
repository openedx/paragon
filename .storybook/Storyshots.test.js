import initStoryshots from '@storybook/addon-storyshots';

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

initStoryshots({
  storyKindRegex: /^((?!.*?Modal).)*$/,
});
