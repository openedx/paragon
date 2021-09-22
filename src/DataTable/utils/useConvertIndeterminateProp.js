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
      const { indeterminate, ...rest } = props;
      return { isIndeterminate: indeterminate, ...rest };
    },
    [props],
  );
  return updatedProps;
};

export default useConvertIndeterminateProp;
