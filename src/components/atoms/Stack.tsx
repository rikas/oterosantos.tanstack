import { useRender } from '@base-ui/react/use-render';
import { mergeProps } from '@base-ui/react/merge-props';
import { tv } from 'tailwind-variants';
import type { VariantProps } from 'tailwind-variants';

const stackVariants = tv({
  base: 'flex',
  variants: {
    direction: {
      col: 'flex-col',
      row: 'flex-row',
    },
    gap: {
      0: 'gap-0',
      0.5: 'gap-0.5',
      1: 'gap-1',
      2: 'gap-2',
      4: 'gap-4',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
    },
  },
  defaultVariants: {
    direction: 'col',
    gap: 0,
  },
});

interface RenderProps extends useRender.ComponentProps<'div'> {
  direction?: 'col' | 'row';
  gap?: number;
}

type StackProps = RenderProps & VariantProps<typeof stackVariants>;

export function Stack({
  render,
  className,
  direction,
  gap,
  ...otherProps
}: StackProps): React.ReactElement {
  const element = useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>(
      { className: stackVariants({ gap, direction, className }) },
      otherProps,
    ),
  });

  return element;
}
