import { Star } from 'lucide-react';
import { AnimatedArrowLinkText, ExternalLink, Stack } from '../atoms';

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  private: boolean;
  description: string;
  language: string;
  visibility: 'public' | 'private';
}

type Props = {
  repos: Repository[];
  profileURL: string;
  repoCount: number;
};

export function TopGitHubProjects({ repos, profileURL, repoCount }: Props) {
  function repoSorter(repoA: Repository, repoB: Repository) {
    return (repoB.stargazers_count || 0) - (repoA.stargazers_count || 0);
  }
  const topRepos = repos.sort(repoSorter).slice(0, 10);

  return (
    <ol className="list-none text-zinc-600 dark:text-zinc-400">
      {topRepos.map((repo) => (
        <li key={repo.id}>
          <Stack render={<span />} direction="row" gap={2} className="inline-flex mb-2">
            <ExternalLink href={repo.html_url}>{repo.name}</ExternalLink>
            <Stack render={<span />} direction="row" className="text-xs items-center" gap={1}>
              {repo.stargazers_count}
              <Star
                strokeWidth={1.6}
                className="size-3 fill-yellow-500 text-yellow-500 dark:fill-yellow-200 dark:text-yellow-200"
              />
            </Stack>
          </Stack>
        </li>
      ))}
      <li className="mt-2">
        <ExternalLink href={profileURL} className="text-sm inline-flex" variant="gray">
          <AnimatedArrowLinkText text={`See all ${repoCount} repositories`} />
        </ExternalLink>
      </li>
    </ol>
  );
}
