import { createServerFn } from '@tanstack/react-start';
import { getCookie, setCookie } from '@tanstack/react-start/server';

export const themeStorageKey = '_preferred-theme';

export type AppTheme = 'light' | 'dark';

declare global {
  interface Window {
    __theme?: AppTheme;
  }
}

function isAppTheme(value: string | undefined): value is AppTheme {
  return value === 'light' || value === 'dark';
}

/**
 * Returns the user's saved theme preference, or `null` if they have never
 * picked one (no cookie yet). Falling back to `'light'` here would override
 * the system preference detected client-side on first visit.
 */
export const getThemeServerFn = createServerFn().handler(async (): Promise<AppTheme | null> => {
  const cookie = getCookie(themeStorageKey);
  return isAppTheme(cookie) ? cookie : null;
});

export const setThemeServerFn = createServerFn({ method: 'POST' })
  .validator(async (data: AppTheme) => {
    return data;
  })
  .handler(async ({ data }) => setCookie(themeStorageKey, data, { path: '/', maxAge: 31536000 }));

/**
 * Blocking script rendered in `<head>` before hydration. When the user has no
 * saved preference yet, it resolves the theme from `prefers-color-scheme`,
 * applies the `dark` class immediately (avoiding a flash of the wrong theme),
 * and persists it as the cookie so subsequent server renders stay in sync.
 */
export const themeInitScript = `(function () {
  try {
    var key = ${JSON.stringify(themeStorageKey)};
    var match = document.cookie.match(new RegExp('(?:^|; )' + key + '=([^;]*)'));
    var theme = match ? decodeURIComponent(match[1]) : null;
    if (theme !== 'light' && theme !== 'dark') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.cookie = key + '=' + theme + '; path=/; max-age=31536000; samesite=lax';
    }
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.__theme = theme;
  } catch (e) {}
})();`;
