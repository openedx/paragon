import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import { type ThemeSetting } from '../types/types';

export interface ThemeState {
  themes: ThemeSetting[];
  activeIndex: number;
}

interface ShortThemeSetting {
  n: string; // name
  u: string[]; // urls
}

interface ShortThemeState {
  t: ShortThemeSetting[]; // themes
  i: number; // activeIndex
}

/**
 * Converts a ThemeState object to its shorthand representation for compression.
 */
function toShortThemeState(fullState: ThemeState): ShortThemeState {
  const shortThemes: ShortThemeSetting[] = fullState.themes.map(theme => ({
    n: theme.name,
    u: theme.urls,
  }));

  return {
    t: shortThemes,
    i: fullState.activeIndex,
  };
}

/**
 * Converts a shorthand ThemeState object back to its full representation.
 */
function fromShortThemeState(shortState: ShortThemeState): ThemeState {
  const fullThemes: ThemeSetting[] = (shortState.t || []).map(shortTheme => ({
    name: shortTheme.n,
    urls: shortTheme.u || [],
  }));

  return {
    themes: fullThemes,
    activeIndex: shortState.i || 0,
  };
}

/**
 * Encodes theme state (themes array + active index) as a highly compressed string for use in a query param.
 * Uses shorthand keys and LZ-String compression.
 */
export function encodeThemesToQueryParam(themes: ThemeSetting[], activeIndex: number): string {
  const fullState: ThemeState = { themes, activeIndex };
  const shortState = toShortThemeState(fullState);
  const json = JSON.stringify(shortState);
  return compressToEncodedURIComponent(json);
}

/**
 * Decodes a compressed query param value into theme state (themes array + active index).
 * Handles LZ-String decompression and shorthand key expansion.
 */
export function decodeThemesFromQueryParam(param: string): ThemeState {
  try {
    const json = decompressFromEncodedURIComponent(param);
    if (json === null || json === '') {
      throw new Error('Failed to decompress parameter or empty result.');
    }

    const parsed: unknown = JSON.parse(json);

    // Check if it matches the shorthand format
    if (typeof parsed === 'object' && parsed !== null && 't' in parsed && 'i' in parsed) {
      return fromShortThemeState(parsed as ShortThemeState);
    }

    // If none of the above, it's an unrecognized or invalid format after decompression/parsing
    throw new Error('Unrecognized theme state format after decompression.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error decoding theme query param:', error);
    return {
      themes: [],
      activeIndex: 0,
    };
  }
}
