// Utility for encoding/decoding theme settings as base64 in a query param

export interface ThemeSetting {
  name: string;
  urls: string[];
}

export interface ThemeState {
  themes: ThemeSetting[];
  activeIndex: number;
}

/**
 * Encodes theme state (themes array + active index) as a base64 string for use in a query param.
 */
export function encodeThemesToQueryParam(themes: ThemeSetting[], activeIndex: number): string {
  const themeState: ThemeState = {
    themes,
    activeIndex,
  };
  const json = JSON.stringify(themeState);
  return btoa(encodeURIComponent(json));
}

/**
 * Decodes a base64 query param value into theme state (themes array + active index).
 */
export function decodeThemesFromQueryParam(param: string): ThemeState {
  try {
    const json = decodeURIComponent(atob(param));
    const parsed = JSON.parse(json);
    
    // Handle legacy format (just themes array)
    if (Array.isArray(parsed)) {
      return {
        themes: parsed,
        activeIndex: 0,
      };
    }
    
    // Handle new format (ThemeState object)
    return {
      themes: parsed.themes || [],
      activeIndex: parsed.activeIndex || 0,
    };
  } catch {
    return {
      themes: [],
      activeIndex: 0,
    };
  }
} 