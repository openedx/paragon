import { useRef, useState, useEffect } from 'react';

const useIsVisible = (defaultIsVisible = true) => {
  const sentinelRef = useRef();
  const [isVisible, setIsVisible] = useState(defaultIsVisible);

  useEffect(() => {
    try {
      if (sentinelRef.current) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(({ isIntersecting }) => {
            setIsVisible(isIntersecting);
          });
        }, {});
        observer.observe(sentinelRef.current);
        return () => {
          observer.disconnect();
        };
      }
    } catch (e) {
      const isReferenceError = e instanceof ReferenceError;
      if (!isReferenceError) {
        throw e;
      }
      // Do nothing if an intersection observer can't be created.
    }
    return () => {};
  }, []);

  return [isVisible, sentinelRef];
};

export default useIsVisible;
