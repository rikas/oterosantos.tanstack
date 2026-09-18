import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { Navbar, ThemeProvider } from '@/components/layout'
import { getThemeServerFn } from '@/lib/theme'

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
        title: 'Ricardo Otero',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  loader: () => getThemeServerFn(),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const theme = Route.useLoaderData()

  return (
    <html lang="en" className={theme}>
      <head>
        <HeadContent />
      </head>

      <body className="font-wotfard overflow-auto dark:bg-dark-900">
        <ThemeProvider theme={theme}>
          <div className="bg-zinc-100 dark:bg-dark-900 min-h-screen pt-8">
            <div className="max-w-5xl mx-auto flex h-16 sticky left-0 top-0">
              <header className="grow bg-zinc-100 dark:bg-dark-900">
                <Navbar />
              </header>
            </div>

            <div className="bg-white dark:bg-dark-800 flex flex-row max-w-5xl mx-auto shadow-md">
              {children}
            </div>

            <footer className="max-w-5xl pb-5 mx-auto pl-10 py-3">
              <small className="text-zinc-400">&copy; 2026 Ricardo Otero</small>
            </footer>
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
  )
}
