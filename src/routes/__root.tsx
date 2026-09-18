import { HeadContent, Scripts, createRootRoute, useRouter } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { useEffect } from 'react';

import appCss from '../styles.css?url';
import { Footer, Navbar, ThemeProvider } from '@/components/layout';
import { getThemeServerFn, themeInitScript } from '@/lib/theme';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'description',
        content: 'A personal website by Ricardo Otero.',
      },
      {
        title: 'Ricardo Otero',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    scripts: [
      {
        children: themeInitScript,
      },
    ],
  }),
  loader: () => getThemeServerFn(),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const theme = Route.useLoaderData();
  const router = useRouter();

  // No saved cookie yet: the head script already resolved the system
  // preference and applied it client-side. Invalidate once so the loader
  // (and therefore the SSR-derived theme/context) picks up that same value.
  useEffect(() => {
    if (theme === null) router.invalidate();
  }, [theme]);

  const resolvedTheme =
    theme ?? (typeof window !== 'undefined' ? window.__theme : undefined) ?? 'light';

  return (
    <html lang="en" className={resolvedTheme} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>

      <body className="font-wotfard overflow-auto dark:bg-dark-900">
        <ThemeProvider theme={resolvedTheme}>
          <div className="bg-zinc-100 dark:bg-dark-900 min-h-screen pt-8">
            <div className="max-w-5xl mx-auto flex h-16 sticky left-0 top-0">
              <header className="grow bg-zinc-100 dark:bg-dark-900">
                <Navbar />
              </header>
            </div>

            <div className="bg-white dark:bg-dark-800 flex flex-row max-w-5xl mx-auto shadow-md">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
