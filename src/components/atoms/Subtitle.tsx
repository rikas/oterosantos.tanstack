import { twMerge } from 'tailwind-merge'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  noBottomGutter?: boolean
}> &
  React.HTMLAttributes<HTMLHeadingElement>

export function Subtitle({
  children,
  noBottomGutter = false,
  className = '',
}: Props): React.ReactElement {
  const defaultClasses =
    'tracking-widest uppercase text-yellow-600 dark:text-yellow-400'

  const twClasses = twMerge(
    defaultClasses,
    noBottomGutter ? '' : 'mb-2',
    className,
  )

  return <h4 className={twClasses}>{children}</h4>
}
