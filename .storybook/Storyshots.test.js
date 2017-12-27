import initStoryshots from '@storybook/addon-storyshots';

// per https://github.com/storybooks/storybook/issues/2522
jest.mock("react-dom", () => {
  return {
    render: () => null,
    unmountComponentAtNode: () => null,
  };
});

initStoryshots();
