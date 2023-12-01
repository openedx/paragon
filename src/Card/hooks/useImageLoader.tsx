import {
  useState, useEffect, useRef, RefObject,
} from 'react';
import cardSrcFallbackImg from '../fallback-default.png';

interface ImageLoaderProps {
  mainSrc: string;
  fallback: string;
  useDefaultSrc?: boolean;
}

interface UseImageLoaderResult {
  ref: RefObject<HTMLImageElement>;
  loadedImage: string | null;
  isSrcLoading: boolean;
}

const useImageLoader = ({
  mainSrc,
  fallback,
  useDefaultSrc = false,
}: ImageLoaderProps): UseImageLoaderResult => {
  const ref = useRef<HTMLImageElement>(null);
  const [loadedImage, setLoadedImage] = useState<string | null>(null);
  const [isSrcLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mainSrc || !fallback || !ref.current) {
      return;
    }
    const img = ref.current;

    const loadImageWithRetry = async (src: string): Promise<void> => {
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
      });
    };

    const loadImage = async (): Promise<string | null> => {
      let imageSrc: string | null = null;
      const sources = [mainSrc];

      if (fallback) {
        sources.push(fallback);
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
          // Continue to the next source if loading fails
        }
      }

      return imageSrc;
    };

    const loadImages = async (): Promise<void> => {
      const imageSrc = await loadImage();
      setLoadedImage(imageSrc);
      setIsLoading(false);
    };

    loadImages();
  }, [mainSrc, fallback, useDefaultSrc]);

  return { ref, loadedImage, isSrcLoading };
};

export default useImageLoader;
