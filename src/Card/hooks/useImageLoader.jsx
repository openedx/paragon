/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import cardSrcFallbackImg from '../fallback-default.png';

const useImageLoader = ({ mainSrc, fallback, useDefaultSrc = false }) => {
  const [loadedImage, setLoadedImage] = useState({});
  const [isSrcLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mainSrc || !fallback) {
      return;
    }

    const loadImageWithRetry = async ({ mainSrc, src }) => {
      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
      return { [mainSrc]: img };
    };

    const loadImage = async ({ mainSrc, fallback, useDefaultSrc }) => {
      let loadedImage = {};

      try {
        loadedImage = await loadImageWithRetry({ mainSrc, src: mainSrc });
      } catch (error) {
        if (fallback) {
          try {
            loadedImage = await loadImageWithRetry({ mainSrc, src: fallback });
          } catch (error) {
            if (useDefaultSrc) {
              loadedImage = { [mainSrc]: cardSrcFallbackImg };
            }
          }
        }
      }

      return loadedImage;
    };

    const loadAllImages = async () => {
      try {
        const loadedImageObject = await loadImage({ mainSrc, fallback, useDefaultSrc });
        setLoadedImage(loadedImageObject);
      } finally {
        setIsLoading(false);
      }
    };

    loadAllImages();
  }, [mainSrc, fallback, useDefaultSrc]);

  return { loadedImage, isSrcLoading };
};

export default useImageLoader;
