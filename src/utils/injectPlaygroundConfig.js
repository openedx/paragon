export default function injectPlaygroundConfig(Component, options = {}) {
  const { initialProps, ...otherOptions } = options;
  return Object.assign(Component, {
    playgroundConfig: {
      initialProps: initialProps || {},
      ...otherOptions,
    },
  });
}
