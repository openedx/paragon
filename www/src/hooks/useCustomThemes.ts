import { useEffect } from 'react';
import { encodeThemesToQueryParam, ThemeSetting } from '../utils/queryParamEncoding';
import { UpdateSettingsFunction } from './useSettings';

export const useCustomThemes = (
  settings: any,
  updateSettings: UpdateSettingsFunction,
) => {
  const injectThemeCSS = (themes: ThemeSetting[], activeIndex: number) => {
    // Remove any previous custom CSS
    document.querySelectorAll('link[data-custom-theme]').forEach(el => el.remove());

    // Inject CSS for the active theme
    if (themes.length > 0 && themes[activeIndex]) {
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
    const encoded = encodeThemesToQueryParam(themes, activeIndex);
    const url = new URL(window.location.href);

    if (themes.length > 0) {
      url.searchParams.set('themes', encoded);
    } else {
      url.searchParams.delete('themes');
      url.searchParams.delete('activeTheme');
    }

    window.history.replaceState({}, '', url.toString());
  };

  const handleCustomThemesChange = (key: string, value: any) => {
    let themesArr: ThemeSetting[] = settings.customThemes || [];
    let activeIdx = settings.activeCustomThemeIndex || 0;

    if (key === 'customThemes') {
      themesArr = value || [];
      if (activeIdx >= themesArr.length) { activeIdx = 0; }
    } else if (key === 'activeCustomThemeIndex') {
      activeIdx = value;
    }

    // Inject CSS and update URL
    injectThemeCSS(themesArr, activeIdx);
    updateURLParams(themesArr, activeIdx);

    // Update settings atomically
    updateSettings({
      customThemes: themesArr,
      activeCustomThemeIndex: activeIdx,
    });
  };

  const handleCustomThemeChange = (theme: ThemeSetting) => {
    const themesArr = [theme];
    const activeIdx = 0;

    // Inject CSS and update URL
    injectThemeCSS(themesArr, activeIdx);
    updateURLParams(themesArr, activeIdx);

    // Update settings atomically
    updateSettings({
      customThemes: themesArr,
      activeCustomThemeIndex: activeIdx,
    });
  };

  const resetCustomTheme = () => {
    // Remove any previous custom CSS
    document.querySelectorAll('link[data-custom-theme]').forEach(el => el.remove());

    // Update URL params - remove themes
    const url = new URL(window.location.href);
    url.searchParams.delete('themes');
    window.history.replaceState({}, '', url.toString());

    // Update settings atomically
    updateSettings({
      customThemes: [],
      activeCustomThemeIndex: 0,
    });
  };

  // Apply theme CSS on mount and when settings change
  useEffect(() => {
    const themes = settings.customThemes || [];
    const activeIndex = settings.activeCustomThemeIndex || 0;

    if (themes.length > 0 && themes[activeIndex]) {
      injectThemeCSS(themes, activeIndex);
    }
  }, [settings.customThemes, settings.activeCustomThemeIndex]);

  return {
    handleCustomThemesChange,
    handleCustomThemeChange,
    resetCustomTheme,
  };
};
