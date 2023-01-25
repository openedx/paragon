import getChildrenElements from '../getChildrenElements';

describe('getChildrenElements', () => {
  it('returns the desired child elements', () => {
    const exampleClassName = 'child-item';
    const element = document.createElement('div');

    const createAndAppendChild = (className = exampleClassName) => {
      const childElement = document.createElement('div');
      childElement.classList.add(className);
      element.appendChild(childElement);
    };

    createAndAppendChild();
    createAndAppendChild();
    createAndAppendChild();
    createAndAppendChild('no-op');

    const args = {
      element,
      childQuerySelector: `.${exampleClassName}`,
    };

    const result = getChildrenElements(args);
    expect(result).toHaveLength(3);
    result.forEach((resultElement) => {
      expect(resultElement.classList.contains(exampleClassName)).toBeTruthy();
    });
  });

  it('returns 0 child elements when none match query selector', () => {
    const element = document.createElement('div');

    const createAndAppendChild = () => {
      const childElement = document.createElement('div');
      element.appendChild(childElement);
    };

    createAndAppendChild();
    createAndAppendChild();
    createAndAppendChild();

    const args = {
      element,
      childQuerySelector: '.not-found-404',
    };

    const result = getChildrenElements(args);
    expect(result).toHaveLength(0);
  });
});
