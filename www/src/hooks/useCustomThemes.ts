import { useEffect } from 'react';
import { encodeThemesToQueryParam } from '../utils/queryParamEncoding';
import { type ThemeSetting } from '../types/types';
import { UpdateSettingsFunction } from './useSettings';

/**
 * Hook to manage theme state including default and custom themes
 * Handles theme switching, CSS injection, and URL parameter management
 */
export const useCustomThemes = (
  settings: any,
  updateSettings: UpdateSettingsFunction,
) => {
  const injectThemeCSS = (themes: ThemeSetting[], activeIndex: number) => {
    // Remove any previous custom CSS
    document.querySelectorAll('link[data-custom-theme]').forEach(el => el.remove());

    // Inject CSS for the active theme (skip if it's the default theme with no URLs)
    if (themes.length > 0 && themes[activeIndex] && themes[activeIndex].urls && themes[activeIndex].urls.length > 0) {
      themes[activeIndex].urls.forEach((url: string) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.setAttribute('data-custom-theme', 'true');
        document.head.appendChild(link);
      });
    }
  };

  const updateURLParams = (themes: ThemeSetting[], activeIndex: number) => {
    const url = new URL(window.location.href);

    // Only set URL params if we have custom themes (more than just the default theme)
    const hasCustomThemes = themes.length > 1 || (themes.length === 1 && themes[0].urls && themes[0].urls.length > 0);

    if (hasCustomThemes) {
      const encoded = encodeThemesToQueryParam(themes, activeIndex);
      url.searchParams.set('themes', encoded);
    } else {
      url.searchParams.delete('themes');
      url.searchParams.delete('activeTheme');
    }

    window.history.replaceState({}, '', url.toString());
  };

  const handleThemesChange = (key: string, value: any) => {
    let themesArr: ThemeSetting[] = settings.themes || [];
    let activeIdx = settings.activeThemeIndex || 0;

    if (key === 'themes') {
      themesArr = value || [];
      if (activeIdx >= themesArr.length) { activeIdx = 0; }
    } else if (key === 'activeThemeIndex') {
      activeIdx = value;
    }

    // Ensure we have at least the default theme
    if (themesArr.length === 0) {
      themesArr = [{ name: 'Open edX (Default)', urls: [] }];
      activeIdx = 0;
    }

    // Inject CSS and update URL
    injectThemeCSS(themesArr, activeIdx);
    updateURLParams(themesArr, activeIdx);

    // Update settings atomically
    updateSettings({
      themes: themesArr,
      activeThemeIndex: activeIdx,
    });
  };

  const addTheme = (theme: ThemeSetting) => {
    const currentThemes = settings.themes || [];
    const themesArr = [...currentThemes, theme];
    const activeIdx = themesArr.length - 1;

    injectThemeCSS(themesArr, activeIdx);
    updateURLParams(themesArr, activeIdx);

    updateSettings({
      themes: themesArr,
      activeThemeIndex: activeIdx,
    });
  };

  const updateTheme = (index: number, theme: ThemeSetting) => {
    const currentThemes = settings.themes || [];
    if (index >= 0 && index < currentThemes.length) {
      const newThemes = [...currentThemes];
      newThemes[index] = theme;
      const activeIdx = index;

      injectThemeCSS(newThemes, activeIdx);
      updateURLParams(newThemes, activeIdx);

      updateSettings({
        themes: newThemes,
        activeThemeIndex: activeIdx,
      });
    }
  };

  const removeTheme = (index: number) => {
    const currentThemes = settings.themes || [];
    if (index >= 0 && index < currentThemes.length) {
      const newThemes = currentThemes.filter((_, i) => i !== index);

      // Ensure we have at least the default theme
      if (newThemes.length === 0) {
        newThemes.push({ name: 'Open edX (Default)', urls: [] });
      }

      // Adjust active index if needed
      let activeIdx = settings.activeThemeIndex || 0;
      if (activeIdx >= newThemes.length) {
        activeIdx = 0;
      } else if (activeIdx > index) {
        // If we removed a theme before the active one, adjust the index
        activeIdx--;
      }

      injectThemeCSS(newThemes, activeIdx);
      updateURLParams(newThemes, activeIdx);

      updateSettings({
        themes: newThemes,
        activeThemeIndex: activeIdx,
      });
    }
  };

  const resetThemes = () => {
    // Remove any previous custom CSS
    document.querySelectorAll('link[data-custom-theme]').forEach(el => el.remove());

    // Update URL params - remove themes
    const url = new URL(window.location.href);
    url.searchParams.delete('themes');
    window.history.replaceState({}, '', url.toString());

    // Update settings atomically - reset to just the default theme
    updateSettings({
      themes: [{ name: 'Open edX (Default)', urls: [] }],
      activeThemeIndex: 0,
    });
  };

  // Apply theme CSS on mount and when settings change
  useEffect(() => {
    const themes = settings.themes || [];
    const activeIndex = settings.activeThemeIndex || 0;

    // Ensure we have at least the default theme
    if (themes.length === 0) {
      return;
    }

    // Inject CSS for the active theme (skip if it's the default theme with no URLs)
    if (themes[activeIndex] && themes[activeIndex].urls && themes[activeIndex].urls.length > 0) {
      injectThemeCSS(themes, activeIndex);
    } else {
      // Remove any previous custom CSS if switching to default theme
      document.querySelectorAll('link[data-custom-theme]').forEach(el => el.remove());
    }
  }, [settings.themes, settings.activeThemeIndex]);

  return {
    handleThemesChange,
    addTheme,
    updateTheme,
    removeTheme,
    resetThemes,
  };
};
