import { createServerFn } from '@tanstack/react-start'
import { getCookie, setCookie } from '@tanstack/react-start/server'

const storageKey = '_preferred-theme'

export type AppTheme = 'light' | 'dark'

export const getThemeServerFn = createServerFn().handler(
  async () => (getCookie(storageKey) || 'light') as AppTheme,
)

export const setThemeServerFn = createServerFn({ method: 'POST' })
  .validator(async (data: AppTheme) => {
    return data
  })
  .handler(async ({ data }) => setCookie(storageKey, data))
