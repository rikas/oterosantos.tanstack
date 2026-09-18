import { LogoLink } from './LogoLink';
import { Stack } from '@/components/atoms';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';

export function Socialbar(): React.ReactElement {
  return (
    <Stack direction="row" className="justify-around">
      <LogoLink href="https://github.com/rikas" className="fill-github dark:fill-slate-50">
        <GithubIcon />
      </LogoLink>

      <LogoLink href="https://www.linkedin.com/in/oterosantos" className="fill-linkedin">
        <LinkedinIcon />
      </LogoLink>

      <LogoLink href="https://twitter.com/rikas" className="fill-twitter">
        <TwitterIcon />
      </LogoLink>
    </Stack>
  );
}
