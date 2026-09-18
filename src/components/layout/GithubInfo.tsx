import { Divider, Stack, Subtitle } from '../atoms';
import { GithubUserDetails, TopGitHubProjects } from '../projects';
import type { GithubRepo, GithubUser } from '@/lib/github';

type Props = {
  user: GithubUser;
  repos: Array<GithubRepo>;
};

export function GithubInfo({ repos, user }: Props): React.ReactElement {
  return (
    <>
      <Stack>
        <Subtitle>Github profile</Subtitle>
        <GithubUserDetails user={user} />
      </Stack>

      <Divider />

      <Stack>
        <Subtitle>Popular repos</Subtitle>
        <TopGitHubProjects repos={repos} profileURL={user.html_url} repoCount={user.public_repos} />
      </Stack>
    </>
  );
}
