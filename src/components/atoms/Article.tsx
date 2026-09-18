import { twMerge } from 'tailwind-merge';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<React.BaseHTMLAttributes<HTMLDivElement>>;

export function Article({ className, children, ...otherProps }: Props): React.ReactElement {
  const classes = twMerge('prose prose-lg prose-zinc dark:prose-invert', className);

  return (
    <article className={classes} {...otherProps}>
      {children}
    </article>
  );
}
