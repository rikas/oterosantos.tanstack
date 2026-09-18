import { InvaderIcon } from '../icons';
import DarkmodeToggle from './DarkmodeToggle';
import { Stack, StyledLink } from '@/components/atoms';

// className="fill-zinc-400 transition group-hover:rotate-12 group-hover:fill-zinc-300"

export function Navbar(): React.ReactElement {
  return (
    <nav className="flex items-center py-4 pl-10 pr-6">
      <StyledLink variant="nav" href="/" className="font-extrabold text-xl">
        <Stack direction="row" gap={1} render={<span />} className="items-center group">
          <InvaderIcon className="fill-emerald-500 dark:fill-emerald-300 transition group-hover:-rotate-12" />
          Ricardo Otero
        </Stack>
      </StyledLink>

      <ul className="flex gap-5 ml-10">
        <li>
          <StyledLink variant="nav" href="/projects">
            Projects
          </StyledLink>
        </li>
        <li>
          <StyledLink variant="nav" href="/about">
            About
          </StyledLink>
        </li>
      </ul>

      <div className="flex grow justify-end">
        <DarkmodeToggle />
      </div>
    </nav>
  );
}
