import { useState, useEffect, useCallback } from 'react';
import cardSrcFallbackImg from '../fallback-default.png';

/**
 * Custom hook to load images and track their loading status.
 *
 * @param {Object[]} urls - An array of image objects to load and track.
 * @param {string} urls[].src - The main source URL of the image.
 * @param {string} [urls[].fallback] - The fallback source URL to use if the main source fails to load.
 * // TODO
 * @param {string} urls[].type ? do i need this
 *
 * @returns {Object} An object containing the loaded img statuses and a boolean indicating whether all imgs are loaded.
 * @property {Object} loadedImages - An object with image URLs as keys and their loading status as values.
 * @property {boolean} allLoaded - A boolean indicating whether all images are loaded.
 */
const useImagesLoader = (urls) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [allLoaded, setAllLoaded] = useState(false);

  const isValidUrl = useCallback((url) => {
    try {
      // eslint-disable-next-line no-new
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }, []);

  useEffect(() => {
    const loadImage = async ({ mainSrc, fallback, type }) => new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ [mainSrc]: true });
      img.onerror = () => {
        if (fallback && type === 'image') {
          resolve({ [mainSrc]: cardSrcFallbackImg });
        } else if (fallback) {
          resolve({ [fallback]: fallback });
        } else {
          resolve({ [mainSrc]: false });
        }
      };
      img.src = isValidUrl(mainSrc) && mainSrc;
    });

    const loadImages = async () => {
      const results = await Promise.all(urls.map(loadImage));
      const loadedImagesResult = results.reduce((acc, result) => {
        Object.assign(acc, result);
        return acc;
      }, {});
      setLoadedImages(loadedImagesResult);

      const isAllLoaded = Object.values(loadedImagesResult).every((loaded) => loaded);
      setAllLoaded(isAllLoaded);
    };

    loadImages();
  }, [isValidUrl, urls]);

  return { loadedImages, allLoaded };
};

export default useImagesLoader;
