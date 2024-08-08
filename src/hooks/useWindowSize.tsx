import { useState, useLayoutEffect } from 'react';

export interface WindowSizeData {
  width: number | undefined;
  height: number | undefined;
}

function useWindowSize(): WindowSizeData {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<WindowSizeData>({
    width: undefined,
    height: undefined,
  });

  useLayoutEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: global.innerWidth,
        height: global.innerHeight,
      });
    }

    // Add event listener
    global.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => global.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default useWindowSize;
