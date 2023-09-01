const getParagonComponentsTypes = (components) => {
  const componentsWithTypes = {};
  Object.keys(components).forEach(componentName => {
    const component = components[componentName];
    const isFunctionComponent = typeof component === 'function' && componentName[0] === componentName[0].toUpperCase();
    // Case for React.forwardRef() returns an object
    const isObjectComponent = component.constructor.name === 'Object' && !!component.render;
    const isContext = !!component.Consumer && !!component.Provider;
    let componentType;
    switch (true) {
      case typeof component === 'string' || typeof component === 'number':
        componentType = 'Text';
        break;
      case componentName.startsWith('use'):
        componentType = 'Hook';
        break;
      case isFunctionComponent || isObjectComponent || isContext:
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
        const isFunctionSubcomponent = typeof subcomponent === 'function'
          && subcomponentName[0] === subcomponentName[0].toUpperCase();
        // Case for React.forwardRef() returns an object
        const isObjectSubcomponent = subcomponent?.constructor.name === 'Object' && subcomponent?.render;
        const isContextSubcomponent = subcomponentName === 'Consumer' || subcomponentName === 'Provider';

        if (isFunctionSubcomponent || isObjectSubcomponent || isContextSubcomponent) {
          componentsWithTypes[`${componentName}.${subcomponentName}`] = componentType;
        }
      });
    }
  });
  return componentsWithTypes;
};

export default getParagonComponentsTypes;
