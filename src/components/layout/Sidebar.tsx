import type { PropsWithChildren } from 'react';

import { Stack } from '@/components/atoms';

export function Sidebar({ children }: PropsWithChildren): React.ReactElement {
  return (
    <Stack render={<aside />} className="bg-blue-100 dark:bg-dark-700 sm:flex w-64 hidden">
      <Stack className="flex flex-col p-6 pt-10 grow">{children}</Stack>
    </Stack>
  );
}
