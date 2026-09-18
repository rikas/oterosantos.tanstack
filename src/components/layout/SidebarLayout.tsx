import { Divider, Stack, Subtitle } from '../atoms';
import { GithubUserDetails, TopGitHubProjects } from '../projects';
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
      <main className="mx-auto p-10">{children}</main>

      <Sidebar>
        <Stack gap={10} id="github-information">
          <Stack>
            <Subtitle>Github profile</Subtitle>
            <GithubUserDetails user={user} />
          </Stack>

          <Divider />

          <Stack>
            <Subtitle>Popular repos</Subtitle>
            <TopGitHubProjects
              repos={repos}
              profileURL={user.html_url}
              repoCount={user.public_repos}
            />
          </Stack>
        </Stack>
      </Sidebar>
    </>
  );
}
