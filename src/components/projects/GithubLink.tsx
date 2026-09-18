import { ExternalLink, Stack } from '../atoms';
import { GithubIcon } from '../icons';

type Props = {
  repo: string;
};

export function GithubLink({ repo }: Props): React.ReactElement {
  return (
    <Stack direction="row" gap={1} className="items-center">
      <span className="size-4 dark:fill-white">
        <GithubIcon />
      </span>
      <ExternalLink href={`https://github.com/rikas/${repo}`}>{repo}</ExternalLink>
    </Stack>
  );
}
