const MANUALLY_INCLUDED_COMPONENTS = {
  'Card.Img': 'Component',
  'Card.Subtitle': 'Component',
  'Card.Title': 'Component',
};

const getParagonComponentsTypes = (components) => {
  const componentsWithTypes = { ...MANUALLY_INCLUDED_COMPONENTS };
  Object.keys(components).forEach(componentName => {
    const component = components[componentName];
    let componentType;
    switch (true) {
      case typeof component === 'string' || typeof component === 'number':
        componentType = 'Text';
        break;
      case component.name?.startsWith('use'):
        componentType = 'Hook';
        break;
      case (typeof component === 'function' && componentName[0] === componentName[0].toUpperCase())
            || (component.constructor.name === 'Object' && !!component.render)
            || (!!component.Consumer && !!component.Provider):
        componentType = 'Component';
        break;
      case component.constructor.name === 'Object':
        componentType = 'Object';
        break;
      case typeof component === 'function':
        componentType = 'Function';
        break;
      default:
        componentType = 'Unknown';
        break;
    }

    componentsWithTypes[componentName] = componentType;
    if (componentType === 'Component') {
      Object.keys(component).forEach(subcomponentName => {
        const subcomponent = component[subcomponentName];

        if (subcomponent && ((typeof subcomponent === 'function'
        && subcomponentName[0] === subcomponentName[0].toUpperCase())
        || (subcomponent.constructor.name === 'Object' && !!subcomponent.render)
        || (subcomponentName === 'Consumer' || subcomponentName === 'Provider'))) {
          componentsWithTypes[`${componentName}.${subcomponentName}`] = componentType;
        }
      });
    }
  });
  return componentsWithTypes;
};

export default getParagonComponentsTypes;
