import { ThemeConfig } from "../types/types";

// TypeScript wrapper for the CommonJS queryParamEncoding module
const queryParamEncoding = require('../../../lib/queryParamEncoding');

// Re-export the types for better TypeScript support
export type ThemeState = {
  themes: ThemeConfig[];
  activeIndex: number;
};

// Type-safe function signatures that replace the original implementations
export function encodeThemesToQueryParam(themes: ThemeConfig[], activeIndex: number): string {
  return queryParamEncoding.encodeThemesToQueryParam(themes, activeIndex);
}

export function decodeThemesFromQueryParam(encoded: string): ThemeState {
  return queryParamEncoding.decodeThemesFromQueryParam(encoded);
}
