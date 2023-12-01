/* eslint-disable @typescript-eslint/no-shadow */
import { useState, useEffect } from 'react';
import cardSrcFallbackImg from '../fallback-default.png';

interface ImageLoaderProps {
  mainSrc: string;
  fallback: string;
  useDefaultSrc?: boolean;
}

interface LoadedImage {
  [key: string]: HTMLImageElement;
}

interface UseImageLoaderResult {
  loadedImage: LoadedImage;
  isSrcLoading: boolean;
}

const useImageLoader = ({ mainSrc, fallback, useDefaultSrc = false }: ImageLoaderProps): UseImageLoaderResult => {
  const [loadedImage, setLoadedImage] = useState<LoadedImage>({});
  const [isSrcLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mainSrc || !fallback) {
      return;
    }

    const loadImageWithRetry = async (src: string): Promise<LoadedImage> => {
      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
      return { [mainSrc]: img };
    };

    const loadImage = async (): Promise<LoadedImage> => {
      let objWithImage: LoadedImage = {};

      try {
        objWithImage = await loadImageWithRetry(mainSrc);
      } catch (error) {
        if (fallback) {
          try {
            objWithImage = await loadImageWithRetry(fallback);
          } catch (error) {
            if (useDefaultSrc) {
              const defaultImage = new Image();
              defaultImage.src = cardSrcFallbackImg;
              objWithImage = { [mainSrc]: defaultImage };
            }
          }
        }
      }

      return objWithImage;
    };

    const loadAllImages = async (): Promise<void> => {
      try {
        const loadedImageObject = await loadImage();
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
