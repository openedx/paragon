// Utility for encoding/decoding theme settings as base64 in a query param

export interface ThemeSetting {
  name: string;
  urls: string[];
}

/**
 * Encodes an array of theme settings as a base64 string for use in a query param.
 */
export function encodeThemesToQueryParam(themes: ThemeSetting[]): string {
  const json = JSON.stringify(themes);
  return btoa(encodeURIComponent(json));
}

/**
 * Decodes a base64 query param value into an array of theme settings.
 */
export function decodeThemesFromQueryParam(param: string): ThemeSetting[] {
  try {
    const json = decodeURIComponent(atob(param));
    return JSON.parse(json);
  } catch {
    return [];
  }
} 