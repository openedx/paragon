import { useRef, useState, useEffect } from 'react';

const useIsVisible = (defaultIsVisible = true) => {
  const sentinelRef = useRef();
  const [isVisible, setIsVisible] = useState(defaultIsVisible);

  useEffect(() => {
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
    return () => {};
  }, [sentinelRef.current]);

  return [isVisible, sentinelRef];
};

export default useIsVisible;
