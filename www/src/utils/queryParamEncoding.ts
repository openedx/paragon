import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import { type ThemeConfig } from '../types/types';

export interface ThemeState {
  themes: ThemeConfig[];
  activeIndex: number;
}

interface ShortThemeConfig {
  n: string; // name
  u: string[]; // urls
}

interface ShortThemeState {
  t: ShortThemeConfig[]; // themes
  i: number; // activeIndex
}

/**
 * Encodes theme state (themes array + active index) as a highly compressed string for use in a query param.
 * Uses shorthand keys and LZ-String compression.
 */
export function encodeThemesToQueryParam(themes: ThemeConfig[], activeIndex: number): string {
  const fullState: ThemeState = { themes, activeIndex };
  const shortThemes: ShortThemeConfig[] = fullState.themes.map(theme => ({
    n: theme.name,
    u: theme.urls,
  }));
  const shortState: ShortThemeState = {
    t: shortThemes,
    i: fullState.activeIndex,
  };
  return compressToEncodedURIComponent(JSON.stringify(shortState));
}

/**
 * Decodes a compressed query param value into theme state (themes array + active index).
 * Handles LZ-String decompression and shorthand key expansion.
 */
export function decodeThemesFromQueryParam(encoded: string): ThemeState {
  try {
    const decompressed = decompressFromEncodedURIComponent(encoded);
    if (!decompressed) { return { themes: [], activeIndex: 0 }; }

    const shortState: ShortThemeState = JSON.parse(decompressed);
    const fullThemes: ThemeConfig[] = (shortState.t || []).map(shortTheme => ({
      name: shortTheme.n,
      urls: shortTheme.u,
    }));

    return {
      themes: fullThemes,
      activeIndex: shortState.i || 0,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error decoding theme query param:', error);
    return { themes: [], activeIndex: 0 };
  }
}
