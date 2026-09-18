import { Link } from '@tanstack/react-router'
import { twJoin } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import type { VariantProps } from 'tailwind-variants'

export const linkVariants = tv({
  base: 'text-sky-600 hover:text-sky-400 dark:text-sky-400 hover:dark:text-sky-600',
  variants: {
    variant: {
      null: '',
      nav: twJoin(
        'text-zinc-800 hover:text-zinc-600 dark:text-yellow-100 hover:dark:text-yellow-300',
        '[&.active]:underline [&.active]:text-yellow-700 dark:[&.active]:text-white underline-offset-4',
        '[&.active]:hover:text-zinc-600 dark:[&.active]:hover:text-yellow-300',
      ),
      gray: 'text-black/50 hover:text-black/60 dark:text-white/50 dark:hover:text-white/40',
    },
  },
})

export type StyledLinkProps = VariantProps<typeof linkVariants> &
  React.ComponentProps<'a'>

export function StyledLink({
  href,
  className,
  variant,
  children,
  ...otherProps
}: StyledLinkProps): React.ReactElement {
  const isExternal = href && /^https?:\/\//.test(href)

  if (isExternal) {
    return (
      <a
        href={href}
        className={linkVariants({ variant, className })}
        {...otherProps}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={href}
      className={linkVariants({ variant, className })}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
