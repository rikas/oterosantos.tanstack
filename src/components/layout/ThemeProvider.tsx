import { useRouter } from '@tanstack/react-router'
import { createContext, use } from 'react'
import type { PropsWithChildren } from 'react'
import type { AppTheme } from '@/lib/theme'
import { setThemeServerFn } from '@/lib/theme'

type ThemeContextVal = { theme: AppTheme; setTheme: (val: AppTheme) => void }
type Props = PropsWithChildren<{ theme: AppTheme }>

const ThemeContext = createContext<ThemeContextVal | null>(null)

export function ThemeProvider({ children, theme }: Props) {
  const router = useRouter()

  function setTheme(val: AppTheme) {
    setThemeServerFn({ data: val }).then(() => router.invalidate())
  }

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>
}

export function useTheme() {
  const val = use(ThemeContext)

  if (!val) throw new Error('useTheme called outside of ThemeProvider!')

  return val
}
