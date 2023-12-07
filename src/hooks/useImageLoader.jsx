import { useState, useEffect, useRef } from 'react';
import cardSrcFallbackImg from '../Card/fallback-default.png';

const useImageLoader = ({
  mainSrc,
  fallbackSrc,
  useDefaultSrc = false,
}) => {
  const ref = useRef(null);
  const [isSrcLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ((!mainSrc && !fallbackSrc) || !ref.current) {
      return;
    }
    const img = ref.current;

    const loadImageWithRetry = async (src) => {
      setIsLoading(true);

      await new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
      });
    };

    const loadImage = async () => {
      let imageSrc = null;
      const sources = [mainSrc];

      if (fallbackSrc) {
        sources.push(fallbackSrc);
      }

      // Add default image source if useDefaultSrc is true
      if (useDefaultSrc) {
        sources.push(cardSrcFallbackImg);
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const src of sources) {
        if (!src) {
          // eslint-disable-next-line no-continue
          continue;
        }

        try {
          // eslint-disable-next-line no-await-in-loop
          await loadImageWithRetry(src);
          imageSrc = src;
          break;
        } catch (error) {
          console.error(error);
          // Continue to the next source if loading fails
        }
      }
      return imageSrc;
    };

    const loadImages = async () => {
      await loadImage();
      setIsLoading(false);
    };

    loadImages();
  }, [mainSrc, fallbackSrc, useDefaultSrc]);

  return { ref, isSrcLoading };
};

export default useImageLoader;
