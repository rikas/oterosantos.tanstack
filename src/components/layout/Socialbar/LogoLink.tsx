import { twMerge } from 'tailwind-merge';
import type { PropsWithChildren } from 'react';

import { ExternalLink } from '@/components/atoms';

type LinkProps = PropsWithChildren<{
  href: string;
}> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function LogoLink({ href, className, children }: LinkProps): React.ReactElement {
  const twClasses = twMerge(
    'rounded-full w-10 p-2',
    'hover:opacity-80 hover:bg-white hover:bg-opacity-70',
    'dark:hover:bg-black/20',
    className,
  );

  return (
    <ExternalLink href={href} className={twClasses}>
      {children}
    </ExternalLink>
  );
}
