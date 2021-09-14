import { useMemo } from 'react';

/**
 * A React hook to convert ``indeterminate`` prop to ``isIndeterminate``.
 *
 * @param {object} props An object containing props.
 * @returns Updated props object.
 */
const useConvertIndeterminateProp = (props) => {
  const updatedProps = useMemo(
    () => {
      const newProps = { ...props };
      newProps.isIndeterminate = newProps.indeterminate;
      // delete unused ``indeterminate`` prop
      delete newProps.indeterminate;
      return newProps;
    },
    [props],
  );
  return updatedProps;
};

export default useConvertIndeterminateProp;
