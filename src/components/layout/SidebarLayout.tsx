import { Stack } from '../atoms';
import { GithubInfo } from './GithubInfo';
import { MobileDrawer } from './MobileDrawer';
import { Sidebar } from './Sidebar';
import type { GithubRepo, GithubUser } from '@/lib/github';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  user: GithubUser;
  repos: Array<GithubRepo>;
}>;

export function SidebarLayout({ user, repos, children }: Props): React.ReactElement {
  return (
    <>
      <main className="mx-auto p-10 relative">
        <MobileDrawer repos={repos} user={user} />
        {children}
      </main>

      <Sidebar>
        <Stack gap={10} id="github-information">
          <GithubInfo repos={repos} user={user} />
        </Stack>
      </Sidebar>
    </>
  );
}
