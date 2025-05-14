const mockStyleDictionaryInstance = {
  cleanAllPlatforms: jest.fn().mockResolvedValue(undefined),
  buildAllPlatforms: jest.fn().mockResolvedValue(undefined),
};

const mockStyleDictionary = jest.fn(() => mockStyleDictionaryInstance);

mockStyleDictionary.hooks = {
  transforms: {
    'color/sass-color-functions': {},
  },
};

const mockInitializeStyleDictionary = jest.fn().mockResolvedValue(mockStyleDictionary);

module.exports = {
  initializeStyleDictionary: mockInitializeStyleDictionary,
  getTokensStudioTransforms: jest.fn().mockResolvedValue({
    expandTypesMap: {},
  }),
  colorTransform: jest.fn(),
  __mockInstance: mockStyleDictionaryInstance,
  __mockClass: mockStyleDictionary,
};
