import React from 'react';

export interface ElementDataEntry {
  type: React.ElementType | string | null;
  props: Record<string, any> | null;
  start: number;
  end: number;
  children: ElementDataEntry[] | null;
}

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
  elementsData: Array<ElementDataEntry> = [],
): string {
  let result = '';

  children?.forEach(child => {
    const isStringOrNumber = typeof child === 'string' || typeof child === 'number';
    const isElement = React.isValidElement(child);
    
    // Default values if the child is a simple string/number
    let currentChildren = null;
    let childProps: Record<string, any> | null = null;
    let childType: React.ElementType | string | null = null;

    const start = result.length;

    if (isStringOrNumber) {
      result += String(child);
    } 
    else if (isElement) {
      childProps = (child as React.ReactElement).props;
      childType = (child as React.ReactElement).type;

      const elementChildren = childProps?.children;
      const isElementChildrenStringOrNumber = typeof elementChildren === 'string' || typeof elementChildren === 'number';

      if (isElementChildrenStringOrNumber) {
        result += String(elementChildren);

      } else if (elementChildren) {
        const nestedChildrenData: ElementDataEntry[] = [];

        const childrenArray = Array.isArray(elementChildren)
          ? elementChildren
          : [elementChildren]; // If it's a single element, wrap it in an array

        result += assembleStringFromChildrenArray(
          childrenArray as Array<React.ReactNode>,
          nestedChildrenData,
        );

        currentChildren = nestedChildrenData;
      }
    }
    const end = result.length;

    elementsData.push({
      type: childType,
      props: childProps,
      start,
      end,
      children: currentChildren,
    });
  });

  return result;
}
