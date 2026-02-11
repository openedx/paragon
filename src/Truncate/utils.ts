import React from 'react';

export interface ElementDataEntry {
  type: React.ElementType | string | null;
  props: Record<string, any> | null;
  start: number;
  end: number;
  children: ElementDataEntry[] | null;
}

export interface AssemblyResult {
  result: string;
  elementsData: ElementDataEntry[];
};

/**
 * Retrieves plain string from children array and collects data
 * to be able to restore original children in the future.
 *
 * @param {array} children
 * @param {array} elementsData original data to restore children
 * @returns string
 */
export function assembleStringFromChildrenArray(
  children: Array<React.ReactNode>,
): AssemblyResult {
  let finalResult = '';
  const finalElementsData: ElementDataEntry[] = [];

  children?.forEach(child => {
    const isStringOrNumber = typeof child === 'string' || typeof child === 'number';
    const isElement = React.isValidElement(child);

    let currentChildren: ElementDataEntry[] | null = null;
    let childProps: Record<string, any> | null = null;
    let childType: React.ElementType | string | null = null;

    const start = finalResult.length;

    if (isStringOrNumber) {
      finalResult += String(child);
    } else if (isElement) {
      childProps = (child as React.ReactElement).props;
      childType = (child as React.ReactElement).type;

      const elementChildren = childProps?.children;

      if (typeof elementChildren === 'string' || typeof elementChildren === 'number') {
        finalResult += String(elementChildren);
      } else if (elementChildren) {
        const childrenArray = Array.isArray(elementChildren) ? elementChildren : [elementChildren];
        
        const { result, elementsData } = assembleStringFromChildrenArray(childrenArray);
        
        finalResult += result;
        currentChildren = elementsData;
      }
    }

    const end = finalResult.length;

    finalElementsData.push({
      type: childType,
      props: childProps,
      start,
      end,
      children: currentChildren,
    });
  });

  return { result: finalResult, elementsData: finalElementsData };
}
